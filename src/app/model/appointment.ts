export class Appointment {
  constructor(
    public name: string,
    public mobileNo: string,
    public city: string,
    public age: number,
    public gender: string,
    public appointmentDate: string,
    public appointmentTime: string,
    public isFirstVisit: boolean,
    public naration: string
  ) {}
}
