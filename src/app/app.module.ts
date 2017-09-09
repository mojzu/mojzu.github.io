import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// TODO: Replace with HttpClientModule.
import { HttpModule } from "@angular/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdGridListModule,
} from "@angular/material";
import { NgModule } from "@angular/core";
import { MarkdownModule } from "angular2-markdown";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ContentComponent } from "./components/content";
import { HomeComponent } from "./components/home";
import { MarginCalculatorComponent } from "./components/margin-calculator";
import { MojzuNetComponent } from "./components/mojzunet";

@NgModule({
  declarations: [
    // Application components.
    AppComponent,
    ContentComponent,
    HomeComponent,
    MarginCalculatorComponent,
    MojzuNetComponent,
  ],
  imports: [
    // Angular modules.
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    // Flex layout, Material and Markdown modules.
    FlexLayoutModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MarkdownModule.forRoot(),

    // Application modules.
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
