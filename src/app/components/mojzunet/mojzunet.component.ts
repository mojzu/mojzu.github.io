import { Component } from "@angular/core";
import { mojzuNetReferences } from "./mojzunet";

@Component({
  selector: "AppMojzuNet",
  templateUrl: "./mojzunet.component.html",
  styleUrls: ["./mojzunet.scss"],
})
export class MojzuNetComponent {

  public references = mojzuNetReferences;

}
