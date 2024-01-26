import React, { Component } from "react";
import { greeting, contactPageData } from "../../portfolio.js";

const addressSection = contactPageData.addressSection;
export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
        alt=""
      />
    );
  }
}
