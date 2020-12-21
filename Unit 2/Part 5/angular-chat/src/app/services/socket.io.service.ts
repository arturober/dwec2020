import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket!: Socket;
  private connecting = false;
  public connection$ = new ReplaySubject<boolean>(1);
  public messages$ = new ReplaySubject<Message>(5);

  constructor() { }

  connect(port: number): Observable<boolean> {
    if (!this.connecting) {
      this.connecting = true;
      this.socket = io(`http://localhost:${port}`);

      this.socket.on('connect', () => {
        this.connection$.next(true);
      });

      this.socket.on('disconnect', () => {
        this.connection$.next(false);
      });

      this.socket.on('message', (msg: Message) => {
        this.messages$.next(msg);
      });
    }

    return this.connection$;
  }

  sendMessage(msg: Message): void {
    if (this.socket && this.socket.connected) {
      this.socket.emit('new-message', msg);
    }
  }

  disconnect(): void {
    if (this.socket && this.socket.connected) {
      this.socket.close();
    }
  }
}
