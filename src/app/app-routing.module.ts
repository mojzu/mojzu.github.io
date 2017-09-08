import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { homeRouteData, HomeComponent } from "./components/home";
import {
  marginCalculatorRouteData,
  marginCalculatorPath,
  MarginCalculatorComponent,
} from "./components/margin-calculator";
import {
  mojzuNetRouteData,
  mojzuNetPath,
  MojzuNetComponent,
} from "./components/mojzunet";

const routes: Routes = [
  {
    path: marginCalculatorPath,
    component: MarginCalculatorComponent,
    data: marginCalculatorRouteData,
  },
  {
    path: mojzuNetPath,
    component: MojzuNetComponent,
    data: mojzuNetRouteData,
  },
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
    data: homeRouteData,
  },
  {
    path: "**",
    component: HomeComponent,
    data: homeRouteData,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
