import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from 'src/user-info/user-info.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  u = new user();
  id: number=0;
  updateProfile(f: NgForm, id: number){
    //call UserService.UpdateUser to change User data in the database
    console.log(f.value);
  }
  addToBalance(f: NgForm, id: number){
    //call UserService.UpdateUser to add to balance of the User in the database
    console.log(f.value.deposit);
  }
}
