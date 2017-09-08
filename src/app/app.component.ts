import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MdIconRegistry } from "@angular/material";

@Component({
  selector: "AppRoot",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.scss"],
})
export class AppComponent {

  public constructor(
    protected iconRegistry: MdIconRegistry,
    protected sanitiser: DomSanitizer,
  ) {
    // Toolbar button icons.
    iconRegistry.addSvgIcon("mojzu", sanitiser.bypassSecurityTrustResourceUrl("assets/icons/mojzu.svg"));
    iconRegistry.addSvgIcon("github", sanitiser.bypassSecurityTrustResourceUrl("assets/icons/github.svg"));
  }

}
