import { Component } from "@angular/core";
import { modbusTsReferences } from "./modbus-ts";

@Component({
  selector: "AppModbusTs",
  templateUrl: "./modbus-ts.component.html",
})
export class ModbusTsComponent {

  public references = modbusTsReferences;

}
