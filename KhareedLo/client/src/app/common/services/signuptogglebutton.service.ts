import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignuptogglebuttonService {

  private isRegisterModeSource = new BehaviorSubject<boolean>(false);
  currentIsRegisterMode = this.isRegisterModeSource.asObservable();

  constructor() {}

  updateIsRegisterMode(value: boolean) {
    this.isRegisterModeSource.next(value);
  }}
