import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    dark_grey: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "button",
      this.props.orange ? "orange" : "",
      this.props.dark_grey ? "dark-grey" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()} onClick={this.handleClick}> 
        <span className="label">{this.props.name}</span>
      </div>
    );
  }
}
