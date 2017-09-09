import { Component } from "@angular/core";
import { marginCalculatorReferences } from "./margin-calculator";

@Component({
  selector: "AppMarginCalculator",
  templateUrl: "./margin-calculator.component.html",
  styleUrls: ["./margin-calculator.scss"],
})
export class MarginCalculatorComponent {

  public references = marginCalculatorReferences;

}
