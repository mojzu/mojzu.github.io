import * as React from "react";
import { Image } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "../styles/responsive.scss";

import * as logo from "../assets/mojzu.svg";

const styles = {
  container: {
    margin: 0,
    minHeight: "100vh",
    maxHeight: "100vh",
    backgroundColor: "#ECEFF1",
  },
  menuColumn: {
    minHeight: "100vh",
    maxHeight: "100vh",
    overflowY: "scroll",
    backgroundColor: "#CFD8DC",
    borderRight: "1px solid #B0BEC5",
  },
  contentColumn: {
    minHeight: "100vh",
    maxHeight: "100vh",
    overflowY: "scroll",
  },
};

interface IProps extends React.HTMLProps<HTMLDivElement> {
  location: { pathname: string; };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<IProps, void> {
  public render() {
    return (
      <div style={styles.container} className={`ui grid`}>
        <div style={styles.menuColumn} className={`mobile hidden six wide tablet four wide computer column`}>

          <Image src={logo} />
          <div className={"ui large link list"}>
            <a className={"active item"}>Sam "Mojzu" Ward</a>
          </div>

        </div>
        <div style={styles.contentColumn} className={`sixteen wide mobile ten wide tablet twelve wide computer column`}>
          {this.props.children()}
        </div>
      </div>
    );
  }
}
