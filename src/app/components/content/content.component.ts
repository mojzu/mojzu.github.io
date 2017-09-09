import { Component, Input } from "@angular/core";
import { IReference } from "./content";

@Component({
  selector: "AppContent",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.scss"],
})
export class ContentComponent {

  @Input()
  public path: string;

  @Input()
  public references: IReference[];

  public get pagePath(): string { return `assets/pages/${this.path}`; }

}
