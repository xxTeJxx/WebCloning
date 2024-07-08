import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USER } from './USER';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private roomsSubject = new BehaviorSubject<USER[]>([]);
  rooms$ = this.roomsSubject.asObservable();
  getRooms1(){
    return this.roomsSubject.value
  }
  addUser(room: USER) {
    const currentRooms = this.roomsSubject.value;
    this.roomsSubject.next([...currentRooms, room]);
  }

  deleteUser(user1:USER){
    const currentRooms = this.roomsSubject.value;
    const updatedRooms = currentRooms.filter(current=>current.sl_no!==user1.sl_no);
    this.roomsSubject.next(updatedRooms);
  }

}
