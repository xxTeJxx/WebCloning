import { Component, inject } from '@angular/core';
import { USER } from '../USER';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-viewuser',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {
readonly data=inject<USER>(MAT_DIALOG_DATA)
 phone=this.data.Phone_number

}
