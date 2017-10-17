/**
 * Created by artash on 10/10/17.
 */
export class Message {

  private message:string;
  private senderNickname:string;

  constructor(message: string, sender:string) {
    this.message = message;
    this.senderNickname = sender;
  }

  public getMessage():string {
    return this.message;
  }

  public getSender():string {
    return this.senderNickname;
  }

}
