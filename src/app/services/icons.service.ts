import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MdIconRegistry } from "@angular/material";
import { IReference } from "../components";

const angular = "angular";
const css = "css";
const github = "github";
const googlePlay = "googlePlay";
const html = "html";
const jasmine = "jasmine";
const mojzu = "mojzu";
const nodejs = "nodejs";
const npm = "npm";
const reactNative = "reactNative";
const redux = "redux";
const reduxObservable = "reduxObservable";
const rxjs = "rxjs";
const sass = "sass";
const typescript = "typescript";

export const icons = {
  angular,
  css,
  github,
  googlePlay,
  html,
  jasmine,
  mojzu,
  nodejs,
  npm,
  reactNative,
  redux,
  reduxObservable,
  rxjs,
  sass,
  typescript,
};

export const iconUrls = {
  [angular]: "assets/icons/angular.svg",
  [css]: "assets/icons/css.svg",
  [github]: "assets/icons/github.svg",
  [googlePlay]: "assets/icons/google-play.svg",
  [html]: "assets/icons/html.svg",
  [jasmine]: "assets/icons/jasmine.svg",
  [mojzu]: "assets/icons/mojzu.svg",
  [nodejs]: "assets/icons/nodejs.svg",
  [npm]: "assets/icons/npm.svg",
  [reactNative]: "assets/icons/react-native.svg",
  [redux]: "assets/icons/redux.svg",
  [reduxObservable]: "assets/icons/redux-observable.svg",
  [rxjs]: "assets/icons/rxjs.svg",
  [sass]: "assets/icons/sass.svg",
  [typescript]: "assets/icons/typescript.svg",
};

export const iconReferences = {
  [angular]: {
    href: "https://angular.io/",
    icon: icons.angular,
    text: "Angular",
  },
  [css]: {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: icons.css,
    text: "CSS",
  },
  [html]: {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: icons.html,
    text: "HTML",
  },
  [jasmine]: {
    href: "https://jasmine.github.io/",
    icon: icons.jasmine,
    text: "Jasmine",
  },
  [nodejs]: {
    href: "https://nodejs.org/en/",
    icon: icons.nodejs,
    text: "Node.js",
  },
  [reactNative]: {
    href: "https://facebook.github.io/react-native/",
    icon: icons.reactNative,
    text: "React Native",
  },
  [redux]: {
    href: "https://github.com/reactjs/redux",
    icon: icons.redux,
    text: "Redux",
  },
  [reduxObservable]: {
    href: "https://redux-observable.js.org/",
    icon: icons.reduxObservable,
    text: "Redux Observable",
  },
  [rxjs]: {
    href: "http://reactivex.io/rxjs/",
    icon: icons.rxjs,
    text: "RxJS",
  },
  [sass]: {
    href: "http://sass-lang.com/",
    icon: icons.sass,
    text: "Sass",
  },
  [typescript]: {
    href: "https://www.typescriptlang.org/",
    icon: icons.typescript,
    text: "TypeScript",
  },
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
