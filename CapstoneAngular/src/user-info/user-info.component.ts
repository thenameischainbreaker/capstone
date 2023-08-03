import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input()uId = 0;
  @Input()uName="User Name";
  @Input()uAdmin="True";
  @Input()email="user@email.com"
  @Input()phone="(555)555-5555"
  @Input()balance=100.00;
  @Input()uPic="Profile Pic";
}

export class user{
  id=0;
  name="name";
  admin="False";
  email="user@email.com";
  phone="(555)555-5555";
  balance=100.00;
  pic="ProfilePic"
}
