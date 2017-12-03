import * as React from "react";
import { Image } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "../styles/responsive.scss";

import * as logo from "../assets/mojzu.svg";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  location: { pathname: string; };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<IProps, void> {
  public render() {
    return (
      <div className={`ui grid`} style={{
        margin: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
        backgroundColor: "#ECEFF1",
      }}>
        <div className={`mobile hidden six wide tablet four wide computer column`} style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowY: "scroll",
          backgroundColor: "#CFD8DC",
          borderRight: "1px solid #B0BEC5",
        }}>
          <Image src={logo} floated="right" alt="Sam 'Mojzu' Ward" />
        </div>
        <div className={`sixteen wide mobile ten wide tablet twelve wide computer column`} style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowY: "scroll",
        }}>
          {this.props.children()}
        </div>
      </div>
    );
  }
}
