import { icons } from "../../services";
import { IReference } from "../content";
import { ITile, IRouteData } from "../home";

export const modbusTsPath = "modbus-ts";

export const modbusTsTile: ITile = {
  background: "tiles/modbus.ts.png",
  link: `/${modbusTsPath}`,
  title: "Modbus.ts",
  description: "Modbus application protocol written in TypeScript for Node.js.",
};

export const modbusTsRouteData: IRouteData = {
  title: "Modbus.ts",
};

export const modbusTsReferences: IReference[] = [
  {
    href: "https://github.com/mojzu/modbus.ts",
    icon: icons.github,
    text: "GitHub Repository",
  },
  {
    href: "https://nodejs.org/en/",
    icon: icons.nodejs,
    text: "Node.js",
  },
  {
    href: "https://www.typescriptlang.org/",
    icon: icons.typescript,
    text: "TypeScript",
  },
  {
    href: "http://reactivex.io/rxjs/",
    icon: icons.rxjs,
    text: "RxJS",
  },
];
