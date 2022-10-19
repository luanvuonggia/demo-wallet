// import React, { Component } from "react";
// import { Button } from "../Button";

// export default class RandomNumberComponent extends Component {
//   constructor(props) {
//     super(props);
//     //Khởi tạo state
//     this.state = {
//       number: 0,
//     };
//     this.randomNumber = this.randomNumber.bind(this);
//   }
//   randomNumber = () => {
//     const number = Math.round(Math.random() * 100);
//     //Cập  nhật state mới
//     this.setState({
//       number,
//     });
//   };
//   render() {
//     return (
//       <div style={{ padding: "10%" }}>
//         <b>{this.state.number}</b> <hr />
//         <Button
//           bgColor="green"
//           width={200}
//           height={100}
//           onClick={this.randomNumber}
//         >
//           Random
//         </Button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import { Button } from "../Button";
export default function RandomNumberComponent(props) {
  const [number, setNumber] = useState(0);

  return (
    <div style={{ padding: "10%" }}>
      <b>{number}</b> <hr />
      <Button
        bgColor="blue"
        width={150}
        height={80}
        onClick={() => {
          setNumber(Math.round(Math.random() * 100));
        }}
      >
        Random
      </Button>
    </div>
  );
}
