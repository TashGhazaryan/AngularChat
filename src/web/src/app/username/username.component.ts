import {Component} from "@angular/core";
import {SocketService} from "../socket.service";
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {

  private username: string;

  constructor(private socketService: SocketService) {
  }

  connect() {
    this.socketService.connect(this.username);
  }

}
