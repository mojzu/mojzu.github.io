import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MdIconRegistry } from "@angular/material";

const mojzu = "mojzu";
const github = "github";
const googlePlay = "googlePlay";
const react = "react";
const redux = "redux";
const angular = "angular";

export const icons = {
  mojzu,
  github,
  googlePlay,
  react,
  redux,
  angular,
};

export const iconUrls = {
  [mojzu]: "assets/icons/mojzu.svg",
  [github]: "assets/icons/github.svg",
  [googlePlay]: "assets/icons/google-play.svg",
  [react]: "assets/icons/react.svg",
  [redux]: "assets/icons/redux.svg",
  [angular]: "assets/icons/angular.svg",
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
