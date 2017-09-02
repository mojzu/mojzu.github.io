import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdToolbarModule, MdGridListModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./components/home";

@NgModule({
  declarations: [
    // Application components.
    AppComponent,
    HomeComponent,
  ],
  imports: [
    // Angular modules.
    BrowserModule,
    BrowserAnimationsModule,

    // Flex layout, Material modules.
    FlexLayoutModule,
    MdToolbarModule,
    MdGridListModule,

    // Application modules.
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
