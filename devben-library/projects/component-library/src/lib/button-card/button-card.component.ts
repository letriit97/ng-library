import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss']
})
export class ButtonCardComponent implements OnInit {
  @Input() name: string = 'button card';
  @Input() icon?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
