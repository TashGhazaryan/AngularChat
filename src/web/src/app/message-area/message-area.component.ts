import {Component, OnInit} from "@angular/core";
import {SocketService} from "../socket.service";
import {Subscription} from "rxjs/Subscription";
import {Message} from "./data/message";

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css']
})
export class MessageAreaComponent implements OnInit {

  private sentMessage: string;
  private receivedMessage: Message[] = [];
  private subscription: Subscription;
  private me: string;

  constructor(private socketService: SocketService) {
    this.me = SocketService.nickname;
    this.subscription = this.socketService.getMessage().subscribe(recData => {
      console.log(recData);
      let msg = JSON.parse(recData);
      let message = new Message(msg.message, msg.senderNickname);
      this.receivedMessage.push(message);
    });
  }

  ngOnInit() {
  }

  sendMessage() {
    this.receivedMessage.push(this.socketService.send(this.sentMessage));
    this.sentMessage = "";
  };
}
