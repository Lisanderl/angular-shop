import { Component, OnInit } from '@angular/core';

export enum FirstComponentEnum {
  Up,
  Down,
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.sass']
})
export class FirstComponentComponent implements OnInit {
  public name = 'FirstComponent';
  public description = 'It\'s kind of first component it this app';
  public price = 22.55;
  public componentEnum: FirstComponentEnum = FirstComponentEnum.Down;
  public isAvailable = false;

  constructor() { }

  ngOnInit(): void {
  }

}
