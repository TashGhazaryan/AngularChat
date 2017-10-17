import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {Message} from "./message-area/data/message";
@Injectable()
export class SocketService {
  private subject = new Subject<any>();
  private ws:WebSocket;
  public static nickname: string;

  constructor() {
  }

  connect(nick) {
    SocketService.nickname = nick;
    this.ws = new WebSocket("ws://localhost:8080/ws");
    this.ws.onmessage = (evt) => {
      console.log("Received message: " + evt.data);
      this.subject.next(evt.data)
    };
    this.ws.onopen = function () {
      console.info("Opened " + SocketService.nickname);
    }
  };

  send(msg):Message {
    let mes = new Message(msg, SocketService.nickname);
    console.info('mes', mes);
    this.ws.send(JSON.stringify(mes));
    return mes;
  };

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
