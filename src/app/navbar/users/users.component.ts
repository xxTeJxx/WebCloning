import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { USER } from './USER';
import { MatIconModule } from '@angular/material/icon';
import { AdduserComponent } from './adduser/adduser.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UsersService } from './users.service';
import { ViewuserComponent } from './viewuser/viewuser.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatDialogModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  private dialog = inject(MatDialog);
  private userservice = inject(UsersService);
  openDialog() {
    const dialogRef = this.dialog.open(AdduserComponent);
  }
  view(user: USER) {
    const dialogRef = this.dialog.open(ViewuserComponent, {
      data: {
        Name: user.Name,
        Email: user.Email,
        Gender: user.Gender,
        City: user.City,
        Phone_number: user.Phone_number,
      },
    });
  }
  Delete(user: USER) {
    this.userservice.deleteUser(user);
  }

  user: USER[] = [];

  displayedColumns: string[] = [
    'SLno',
    'Name',
    'gender',
    'city',
    'phone',
    'Uis',
    'Action',
  ];

  ngOnInit() {
    this.userservice.rooms$.subscribe((users) => {
      this.user = users;
    });
  }
}
