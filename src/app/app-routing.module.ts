import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  homeRouteData,
  HomeComponent,
  marginCalculatorRouteData,
  marginCalculatorPath,
  MarginCalculatorComponent,
  mojzuNetRouteData,
  mojzuNetPath,
  MojzuNetComponent,
} from "./components";

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
