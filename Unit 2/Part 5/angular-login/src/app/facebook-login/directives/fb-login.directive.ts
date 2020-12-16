import { EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Directive } from '@angular/core';
import { LoadFbApiService } from '../services/load-fb-api.service';

@Directive({
  selector: '[appFbLogin]'
})
export class FbLoginDirective implements OnInit {
  @Output() loginOk: EventEmitter<fb.StatusResponse> = new EventEmitter<fb.StatusResponse>();
  @Output() loginError: EventEmitter<string> = new EventEmitter<string>();
  @Output() loadingEnd: EventEmitter<void> = new EventEmitter<void>();
  @Input() scopes!: string[];

  constructor(private loadService: LoadFbApiService) { }

  ngOnInit() {
    this.loadService.loadApi().subscribe(
      () => this.loadingEnd.emit()
    );
  }

  @HostListener('click') onClick(): void {
    this.loadService.login(this.scopes.join(',')).subscribe(
      resp => this.loginOk.emit(resp),
      error => this.loginError.emit('Error with Facebook login!')
    );
  }
}

