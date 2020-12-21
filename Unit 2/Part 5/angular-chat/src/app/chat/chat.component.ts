import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../interfaces/message';
import { SocketIoService } from '../services/socket.io.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() user!: string;
  messages: Message[] = [];
  newMsg = '';
  connected = false;

  constructor(private ioService: SocketIoService) { }

  ngOnInit(): void {
    this.ioService.connection$.subscribe(
      connected => this.connected = connected
    );

    this.ioService.messages$.pipe(
      filter(m => m.user !== this.user)
    ).subscribe(m => {
      m.mine = false;
      this.messages.push(m);
    });
  }

  connect(): void {
    this.ioService.connect(5000);
  }

  disconnect(): void {
    this.ioService.disconnect();
  }

  send(): void {
    const msg: Message = { user: this.user, text: this.newMsg };
    this.ioService.sendMessage(msg);
    msg.mine = true;
    this.messages.push(msg); // Add the message directly to the chat
    this.newMsg = '';
  }

}
