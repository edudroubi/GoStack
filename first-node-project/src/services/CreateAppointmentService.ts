import Appointment from '../models/Appointments';

class CreateAppointmentService {
  public execute(): Appointment {
    const appointmentDate = parseISO(date);

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

    return appointment;
  }
}

export default CreateAppointmentService;
