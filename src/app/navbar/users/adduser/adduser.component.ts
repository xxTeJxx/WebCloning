import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { USER } from '../USER';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css',
})
export class AdduserComponent {
  user = new FormGroup({
    Name: new FormControl(''),
    Phone_number: new FormControl(''),
    Gender: new FormControl(''),
    City: new FormControl(''),
    Email: new FormControl(''),
  });

  getNextRoomId(): number {
    const roomList=this.userservice.getRooms1();
    if (roomList.length === 0) {
      return 1;
    }
    const maxId = Math.max(...roomList.map(room => room.sl_no ?? 0));
    return maxId + 1;
  }
  private userservice = inject(UsersService);
  varip!: USER;
  addUser() {
    this.varip = {
      sl_no:this.getNextRoomId(),
      Name: this.user.value.Name || '',
      Gender: this.user.value.Gender || '',
      City: this.user.value.City || '',
      Phone_number: Number(this.user.value.Phone_number),
      Email: this.user.value.Email || '',
    };
    this.userservice.addUser(this.varip)
  }
}
