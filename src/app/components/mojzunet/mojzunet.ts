import { icons, iconReferences } from "../../services";
import { IReference } from "../content";
import { ITile, IRouteData } from "../home";

export const mojzuNetPath = "mojzunet";

export const mojzuNetTile: ITile = {
  background: "tiles/mojzunet.jpg",
  link: `/${mojzuNetPath}`,
  title: "MojzuNet",
  description: "Angular application for showcase website.",
};

export const mojzuNetRouteData: IRouteData = {
  title: "MojzuNet",
};

export const mojzuNetReferences: IReference[] = [
  {
    href: "https://github.com/mojzunet/mojzunet",
    icon: icons.github,
    text: "GitHub Repository",
  },
  iconReferences.angular,
  iconReferences.typescript,
  iconReferences.rxjs,
  iconReferences.sass,
];
