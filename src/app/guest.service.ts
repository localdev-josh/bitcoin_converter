import { Injectable } from '@angular/core';
import { Guest } from './guest';
// import { Observable, of } from 'rxjs';
import { GUESTS } from './guest-list';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuestService {
  // guestss: GUEST[];
  guesta: Guest[] = GUESTS;
  constructor(
    private router: Router,
    ) { }


  addGuest(guest: Guest): void {
    if(this.guesta.length > 0){
      this.guesta.pop();
      this.guesta.push(guest);
    }else{
      this.guesta.push(guest);
    }
    this.router.navigate(['/currency']);
  }
  // getGuest(): Observable<Guest[]> {
  //   return of(GUESTS);
  // }
}
