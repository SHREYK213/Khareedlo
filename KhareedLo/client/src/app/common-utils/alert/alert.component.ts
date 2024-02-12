import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessageService } from 'src/app/common/services/utils/alert-message.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
alertData!:any;
alertSvcSub!: Subscription;

  constructor( private alertsvc:AlertMessageService) { }

  ngOnInit(): void {
    this.alertSvcSub = this.alertsvc.getAlertMessage().subscribe((alertMessage)=>{
      this.alertData = alertMessage;
    })
    console.log(this.alertData);
    
  }
}
