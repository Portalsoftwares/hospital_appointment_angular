import { Component } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {

  appointmentObj: Appointment = {
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "2023-12-22T05:50:31.728Z",
    "appointmentTime": "",
    "isFirstVisit": true,
    "naration": ""
  };

  constructor(private master: MasterService){}

  onSaveAppointment() {
    this.master.createNew(this.appointmentObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Appointment Done & Appintment No is -" + res.data.appointmentNo);
      }
    },error => {
      alert("API Error/ Check Form" + error.message)
    })
  }

}
