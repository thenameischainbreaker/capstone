import { Component, Input } from '@angular/core';
import { UserInfoComponent } from 'src/user-info/user-info.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input()user: UserInfoComponent = new UserInfoComponent;
  set(u: UserInfoComponent){
    this.user = u;
  }
}
