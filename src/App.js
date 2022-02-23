import React, { useState, useEffect } from "react";
import data from "./data";
import Slider from "./Silder";
function App() {
  const [people, setPeople] = useState(data);
  const [select, setSelect] = useState(0);

  // useEffect(() => {
  //   const lastSelect = people.length - 1;
  //   if (select > lastSelect) {
  //     setSelect(0);
  //   }
  //   if (select < 0) {
  //     setSelect(lastSelect);
  //   }
  // }, [select, people]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setSelect(select + 1);
  //   }, 4000);
  // }, [select]);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const onSelectPeople = (id) => {
    console.log("prev", id);
    let newIndex = id - 1;
    setSelect(checkNumber(newIndex));
    console.log("selected is", select);
  };
  const onSelectedPeopleNext = (id) => {
    console.log("next", id);
    let newIndex = id + 1;
    setSelect(checkNumber(newIndex));
  };
  return (
    <section className="section">
      <h2>slider project setup</h2>
      <Slider
        people={people}
        select={select}
        onSelectedPeople={onSelectPeople}
        onSelectedPeopleNext={onSelectedPeopleNext}
      />
    </section>
  );
}

export default App;
