import React, { Component } from "react";
import feelingProud from "../../assests/images/undraw_software_engineer_re_tnjc.svg";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return <img alt="saad sitting on table" src={feelingProud}></img>;
  }
}

export default FeelingProud;
