import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home";
import { marginCalculatorPath, MarginCalculatorComponent } from "./components/margin-calculator";
import { mojzuNetPath, MojzuNetComponent } from "./components/mojzunet";

const routes: Routes = [
  {
    path: marginCalculatorPath,
    component: MarginCalculatorComponent,
  },
  {
    path: mojzuNetPath,
    component: MojzuNetComponent,
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
