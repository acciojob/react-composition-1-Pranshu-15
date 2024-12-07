// import React from "react";
// import "./../styles/App.css";
// import List from "./List";
// import Composition from "./Composition";

// const App = () => {
//   return (
//     <>
//       <List/>
//       <Composition data = {liItems}/>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./../styles/App.css";
import List from "./List";
import Composition from "./Composition";

const App = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <List setSelectedItem={setSelectedItem} />
      <Composition data={selectedItem} />
    </>
  );
};

export default App;
