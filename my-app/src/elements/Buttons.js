import React from "react";
import propTypes from "prop-types";

export default function Buttons(props) {
  const className = ["button"];
  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-wide-mobile");
  if (props.isSmall) className.push("button-sm");
  if (props.isBlock) className.push("button-block");
  return <button className={className.join(" ")}>{props.children}</button>;
}

Buttons.propTypes = {
  isPrimary: propTypes.bool,
  isWideMobile: propTypes.bool,
  isBlock: propTypes.bool,
  isSmall: propTypes.bool,
};
