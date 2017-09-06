import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MdIconRegistry } from "@angular/material";

@Component({
  selector: "AppRoot",
  templateUrl: "./app.component.html",
})
export class AppComponent {

  public constructor(
    protected iconRegistry: MdIconRegistry,
    protected sanitiser: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon("github", sanitiser.bypassSecurityTrustResourceUrl("assets/icons/github.svg"));
  }

}
