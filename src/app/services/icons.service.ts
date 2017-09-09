import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MdIconRegistry } from "@angular/material";

const angular = "angular";
const github = "github";
const googlePlay = "googlePlay";
const mojzu = "mojzu";
const nodejs = "nodejs";
const react = "react";
const redux = "redux";
const rxjs = "rxjs";
const typescript = "typescript";

export const icons = {
  angular,
  github,
  googlePlay,
  mojzu,
  nodejs,
  react,
  redux,
  rxjs,
  typescript,
};

export const iconUrls = {
  [angular]: "assets/icons/angular.svg",
  [github]: "assets/icons/github.svg",
  [googlePlay]: "assets/icons/google-play.svg",
  [mojzu]: "assets/icons/mojzu.svg",
  [nodejs]: "assets/icons/nodejs.svg",
  [react]: "assets/icons/react.svg",
  [redux]: "assets/icons/redux.svg",
  [rxjs]: "assets/icons/rxjs.svg",
  [typescript]: "assets/icons/typescript.svg",
};

@Injectable()
export class IconsService {

  constructor(
    protected iconRegistry: MdIconRegistry,
    protected sanitiser: DomSanitizer,
  ) {
    // Register icons.
    for (const key in iconUrls) {
      if (iconUrls.hasOwnProperty(key)) {
        iconRegistry.addSvgIcon(key, sanitiser.bypassSecurityTrustResourceUrl(iconUrls[key]));
      }
    }
  }

}
