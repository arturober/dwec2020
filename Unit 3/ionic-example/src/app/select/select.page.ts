import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  selectedConsoles: string[] = [];
  consoles: {val: string, title: string}[] = [
    {val: 'nes', title: 'NES'},
    {val: 'n64', title: 'Nintendo64'},
    {val: 'ps', title: 'Playstation'},
    {val: 'md', title: 'Mega Drive'},
    {val: 'saturn', title: 'Saturn'},
    {val: 'snes', title: 'SNES'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
