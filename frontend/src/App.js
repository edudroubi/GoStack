import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import Header from './components/Header';

function App () {
  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject () {
    // Não aplica o conceito de imutabilidade
    // projects.push(`Novo Projeto ${Date.now()}`);
    
    // Aplica o conceito de imutabilidade
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Eduardo Droubi"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title='Projects' />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;