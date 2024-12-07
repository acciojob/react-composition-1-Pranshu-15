import React from "react";

const List = ({ setSelectedItem }) => {
  const arr = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <ul>
      {arr.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            console.log(item);
            setSelectedItem(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;