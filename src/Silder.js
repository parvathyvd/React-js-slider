import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Slider = ({ people, select, onSelectedPeople, onSelectedPeopleNext }) => {
  const disp = people.map((person, index) => {
    if (index === select) {
      console.log("select is", index);
      return (
        <div className="section-center">
          <article key={person.id}>
            <img src={person.image} alt={person.name} className="person-img" />
            <h4>{person.name}</h4>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
            <button className="prev">
              <FiChevronLeft onClick={() => onSelectedPeople(index)} />
            </button>
            <button className="next">
              <FiChevronRight onClick={() => onSelectedPeopleNext(index)} />
            </button>
          </article>
        </div>
      );
    }
  });
  return <div>{disp}</div>;
};

export default Slider;
