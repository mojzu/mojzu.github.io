import { Component } from "@angular/core";
import { marginCalculatorReferences } from "./margin-calculator";

@Component({
  selector: "AppMarginCalculator",
  templateUrl: "./margin-calculator.component.html",
})
export class MarginCalculatorComponent {

  public references = marginCalculatorReferences;

}
