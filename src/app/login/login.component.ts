// import { Component, inject } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input'; 
// import {MatButtonModule} from '@angular/material/button';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
// loginform= new FormGroup({
//   Login_Email:new FormControl(""),
//   Password: new FormControl("")
// })
// private route=inject(Router)
// go(){
//   this.route.navigateByUrl("/home");
// }
// }

import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginform: LoginForm = {
    Email: '',
    Phone_number: '',
  };

  private route = inject(Router);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);
  go() {
    this.route.navigateByUrl('/home');
    console.log(this.loginform);
  }

  toggleTabs(tab: 'email' | 'phone') {
    const phoneTab = document.getElementById('phone-tab');
    const emailTab = document.getElementById('email-tab');
    const phoneForm = document.getElementById('phone-form');
    const emailForm = document.getElementById('email-form');

    if (tab === 'phone' && phoneTab && emailTab && phoneForm && emailForm) {
      phoneTab.classList.add('active');
      emailTab.classList.remove('active');
      phoneForm.style.display = 'block';
      emailForm.style.display = 'none';
    } else if (emailTab && phoneTab && emailForm && phoneForm) {
      emailTab.classList.add('active');
      phoneTab.classList.remove('active');
      emailForm.style.display = 'block';
      phoneForm.style.display = 'none';
    }
  }
}
interface LoginForm {
  Email: string;
  Phone_number: string;
}