import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home";
import { MarginCalculatorComponent } from "./components/margin-calculator";

const routes: Routes = [
  {
    path: "margin-calculator",
    component: MarginCalculatorComponent,
  },
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "**",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
