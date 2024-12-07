  // import React from 'react'

  // const Composition = ({data}) => {
  //     console.log(props)
  //   return (
  //     <div>
  //         <p>This is the content for {data}</p>
  //     </div>
  //   )
  // }

  // export default Composition

  // import React from "react";

  // const Composition = ({ data }) => {
  //   return (
  //     <div>
  //       <p>This is the content for {data || "no selection"}</p>
  //     </div>
  //   );
  // };

  // export default Composition;

  import React from "react";

const Composition = ({ data }) => {
  return (
    <div>
      <p>This is the content for {data || "no selection"}</p>
    </div>
  );
};

export default Composition;
