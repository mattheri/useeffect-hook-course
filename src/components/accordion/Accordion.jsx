import React from "react";
import "./Accordion.css";

const Accordion = (props) => {
  const classnames = ["accordion"];

  if (props.value === props.active) {
    classnames.push("active");
  }

  const onClick = () => {
    props.onClick(props.value);
  };

  return (
    <div className={classnames.join(" ")}>
      <button onClick={onClick} className="accordion__button">
        {props.title}
      </button>
      <div className="accordion__content">{props.children}</div>
    </div>
  );
};

export default Accordion;
