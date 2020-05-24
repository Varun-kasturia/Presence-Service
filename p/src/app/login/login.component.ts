import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'varun'
  password = ''
  errorMessage ='Invalid Credentials'
  invalidLogin = false



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){

    //console.log(this.username);
    if(this.username==="varun" && this.password === 'dummy')
    {
      this.router.navigate(['welcome'])
      this.invalidLogin = false
    }
    else
    {
      this.invalidLogin = true
    }
  }

}
