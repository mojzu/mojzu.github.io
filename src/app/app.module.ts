import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdToolbarModule, MdButtonModule, MdGridListModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./components/home";
import { MarginCalculatorComponent } from "./components/margin-calculator";

@NgModule({
  declarations: [
    // Application components.
    AppComponent,
    HomeComponent,
    MarginCalculatorComponent,
  ],
  imports: [
    // Angular modules.
    BrowserModule,
    BrowserAnimationsModule,

    // Flex layout, Material modules.
    FlexLayoutModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,

    // Application modules.
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
