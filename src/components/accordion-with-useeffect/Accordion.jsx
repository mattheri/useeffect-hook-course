import React, { useEffect, useState } from "react";
import "./Accordion.css";

const AccordionWithUseEffect = (props) => {
  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const url = `https://swapi.dev/api/people/${props.value}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setName(data.name);
    } catch (error) {
      console.error(error.message);
    }
  };

  const classnames = ["accordion"];

  if (props.value === props.active) {
    classnames.push("active");
  }

  const onClick = () => {
    props.onClick(props.value);
  };

  useEffect(() => {
    if (props.active === props.value) {
      getName();
    } else {
      setName("");
    }
  }, [props.active]);

  return (
    <div onClick={onClick} className={classnames.join(" ")}>
      <button onClick={onClick} className="accordion__button">
        {props.title} - {name}
      </button>
      <div className="accordion__content">{props.children}</div>
    </div>
  );
};

export default AccordionWithUseEffect;
