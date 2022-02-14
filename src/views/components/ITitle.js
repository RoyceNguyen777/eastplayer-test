import React, { Component } from "react";
import "./style.css";
class ITitle extends Component {
  _fontSizeTitle = level => {
    switch (level) {
      case 1: {
        return "levelh1";
      }
      case 2: {
        return "levelh2";
      }
      case 3: {
        return "levelh3";
      }
      case 4: {
        return "levelh4";
      }
      case 5: {
        return "levelh5";
      }
      case 6: {
        return "levelh6";
      }
      default:
        return "levelh4";
    }
  };

  render() {
    const { title, level, color, boild } = this.props;
    const levelSize = this._fontSizeTitle(level);
    return (
      <span {...this.props} style={{ fontWeight: boild, color: color }} className={levelSize}>
        {title}
      </span>
    );
  }
}

export default ITitle;