import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

interface IAlertMessage {
  message: string;
  timer?: number;
  isButton?: boolean;
  matIcon?: string;
  isTimer?: boolean;
}
@Injectable({
  providedIn: "root",
})
export class AlertMessageService {
  timer!: number;
  private subject = new Subject<any>();

  showAlertMessage(
    type?: string,
    data?: IAlertMessage,
    onComplete?: () => void
  ) {
    
    this.subject.next({ type, data });
    const isTimer =
      data?.isTimer === undefined || data?.isTimer === null ||
      data?.isTimer === true ? true : false;
    const timer = data?.timer ? data?.timer : 3000;
    if (isTimer) {
      setTimeout(() => {
        this.clearAlertMessage();
        onComplete?.();
      }, timer);
    }
  }

  clearAlertMessage() {
    this.subject.next({});
  }

  // after click on close button
  closeAlertMessage() {
    this.subject.next({});
  }

  getAlertMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}