import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import AppoitmentsRepository from '../repositories/Appoitments.Repository';

const appointmentsRouter = Router();
const appoitmentsRepository = new AppoitmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appoitments = appoitmentsRepository.all();

  return response.json(appoitments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appoitmentsRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appoitment is already booked' });
  }

  const appointment = appoitmentsRepository.create({
    provider,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
