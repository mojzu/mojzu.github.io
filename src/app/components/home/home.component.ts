import { Component } from "@angular/core";
import { ITile } from "./home";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {

  public tiles: ITile[] = [
    {
      text: "1",
    },
    {
      text: "2",
    },
    {
      text: "3",
    },
    {
      text: "4",
    },
    {
      text: "5",
    },
    {
      text: "6",
    },
  ];

  public constructor() { }

  public tileColumnSpan(index: number): number {
    if (index === 0) {
      return 4;
    } else if (index < 3) {
      return 2;
    } else {
      return 1;
    }
  }

  public tileRowSpan(index: number): number {
    if (index === 0) {
      return 3;
    } else if (index < 3) {
      return 2;
    } else {
      return 1;
    }
  }

}
