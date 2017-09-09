import { Component, Input } from "@angular/core";
import { IReference } from "./content";

@Component({
  selector: "AppContent",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.scss"],
})
export class ContentComponent {

  @Input()
  public references: IReference[];

}
