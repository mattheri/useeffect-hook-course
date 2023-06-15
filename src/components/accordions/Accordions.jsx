import { useState } from "react";
import Accordion from "../accordion/Accordion";
import "./Accordions.css";

const NO_ACCORDION_SELECTED = 0;

const Accordions = () => {
  const [active, setActive] = useState(NO_ACCORDION_SELECTED);

  const handleClick = (index) => {
    if (index === active) {
      setActive(NO_ACCORDION_SELECTED);
      return;
    }
    setActive(index);
  };

  return (
    <div className="accordions">
      <Accordion
        value={1}
        active={active}
        onClick={handleClick}
        title="Accordion 1"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <Accordion
        value={2}
        active={active}
        onClick={handleClick}
        title="Accordion 2"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <Accordion
        value={3}
        active={active}
        onClick={handleClick}
        title="Accordion 3"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <Accordion
        value={4}
        active={active}
        onClick={handleClick}
        title="Accordion 4"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
      <Accordion
        value={5}
        active={active}
        onClick={handleClick}
        title="Accordion 5"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </Accordion>
    </div>
  );
};

export default Accordions;
