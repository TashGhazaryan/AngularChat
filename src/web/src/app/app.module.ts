import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { FormsModule } from '@angular/forms';
import { MessageAreaComponent } from './message-area/message-area.component';
import {SocketService} from "./socket.service";
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    MessageAreaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:UsernameComponent
      },
      {
        path:'messages',
        component:MessageAreaComponent
      }
    ])
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
