import Mousetrap from "mousetrap";
import React from "react";

export default class Button extends React.Component {
  componentDidMount() {
    if (this.props.shortcut) {
      Mousetrap.bind(this.props.shortcut, () => {
        if (this.props.enabled) {
          this.props.onClick();
        }
      }, "keyup");
    }
  }

  componentWillUnmount() {
    Mousetrap.unbind(this.props.shortcut);
  }

  render() {
    const {onClick, enabled, children, className} = this.props;
    return (
      <button className={`btn btn-primary ${className}`} onClick={enabled ? onClick : undefined} disabled={!enabled}>{children}</button>
    );
  }
}
