import { ITile, IRouteData } from "../home";

export const marginCalculatorPath = "margin-calculator";

export const marginCalculatorTile: ITile = {
  background: "tiles/margin-calculator.png",
  link: `/${marginCalculatorPath}`,
  title: "Margin Calculator",
  description: "Android margin and markup calculator application with currency conversion and optional discount.",
};

export const marginCalculatorRouteData: IRouteData = {
  title: "Margin Calculator",
};
