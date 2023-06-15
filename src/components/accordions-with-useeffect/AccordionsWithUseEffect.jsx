import { useState, useEffect } from "react";
import AccordionWithUseEffect from "../accordion-with-useeffect/Accordion";
import "./Accordions.css";

const NO_ACCORDION_SELECTED = 0;

const AccordionsWithUseEffect = () => {
  const [active, setActive] = useState(NO_ACCORDION_SELECTED);

  const handleClick = (index) => {
    if (index === active) {
      setActive(NO_ACCORDION_SELECTED);
      return;
    }
    setActive(index);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".accordion")) {
      return;
    }
    setActive(NO_ACCORDION_SELECTED);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="accordions">
      <AccordionWithUseEffect
        value={1}
        active={active}
        onClick={handleClick}
        title="Accordion 1"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </AccordionWithUseEffect>
      <AccordionWithUseEffect
        value={2}
        active={active}
        onClick={handleClick}
        title="Accordion 2"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </AccordionWithUseEffect>
      <AccordionWithUseEffect
        value={3}
        active={active}
        onClick={handleClick}
        title="Accordion 3"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </AccordionWithUseEffect>
      <AccordionWithUseEffect
        value={4}
        active={active}
        onClick={handleClick}
        title="Accordion 4"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </AccordionWithUseEffect>
      <AccordionWithUseEffect
        value={5}
        active={active}
        onClick={handleClick}
        title="Accordion 5"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aliquam
        alias voluptatem blanditiis omnis, dolor repellat tempora labore beatae
        itaque dolores consequuntur quae quo cum minus? Earum reprehenderit ipsa
        cum.
      </AccordionWithUseEffect>
    </div>
  );
};

export default AccordionsWithUseEffect;
