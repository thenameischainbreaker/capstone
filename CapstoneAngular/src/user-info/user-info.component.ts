import { Component, Input } from '@angular/core';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input()uId = 0;
  @Input()uName="Guest";
  @Input()uAdmin="False";
  @Input()email="Not Applicable"
  @Input()phone="(555)555-5555"
  @Input()balance=0;
  @Input()uPic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232";
  constructor(){
    this.getCookieInfo();
  }

  getCookieInfo(){
    let uMD= getCookie('userMetaData') as string;
    console.log("uMD"+typeof(uMD));
    console.log("uMD:"+uMD);
    
    if((uMD)!== "null" && (uMD)!== undefined)
    {
      try {
      let parsedUMD= JSON.parse(uMD);
      this.uId = parsedUMD.userId
      this.uName = parsedUMD.name;
      this.email = parsedUMD.email;
      this.balance = parsedUMD.balance
      this.uPic = parsedUMD.profile_picture;
      this.uAdmin = parsedUMD.role;
      }
      catch (e) {
        console.error('Failed to parse userMetaData' , e);
      }
    }
  }

  getCookieInfo2(){
    let dummy = new userMetaData()
    let dummyString = JSON.stringify(dummy);
    setCookie("dummy", dummyString);
    let getDummy = getCookie("dummy");
    if(getDummy!==undefined)
    {
      let parsedUMD = JSON.parse(getDummy);
      console.log();
      this.uId = parsedUMD.userId
      this.uName = parsedUMD.name;
      this.email = parsedUMD.emial;
      this.balance = parsedUMD.balance
      this.uPic = parsedUMD.profile_picture;
      this.uAdmin = parsedUMD.role;
    }
  }
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

export class userMetaData{
  userId=0;
	role = "False";
	email= "email";
	name = "Truck";
	balance = 0.0;
	profile_picture = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232";
	message = "message";
	emailVerified = true;
}
