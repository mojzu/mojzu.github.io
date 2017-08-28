import { Component } from "@angular/core";

@Component({
  selector: "AppRoot",
  template: `
    <h1>
      {{title}}
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  public title = "MojzuNet";
}
