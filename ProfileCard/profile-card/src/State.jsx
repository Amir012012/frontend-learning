import ChildrenState from "./ChildrenState";
import { useState } from "react";

function Render() {
  const [age, setAge] = useState(25);
  const RenderAge = () => {
    setAge(age + 1);
  };
  const [name, setName] = useState("UserName?");
  const RenderName = () => {
    setName("Amir");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "lightgreen",
          height: "100vh",
        }}
      >
        <div
          className="box"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            width: "400px",
            height: "500px",
            background: "lightblue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
           
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              background:'khaki',
              height:'100px',
              width:'200px',
              alignItems:'center',
              justifyContent:'space-evenly',
              borderRadius:'10px'
            }}
          >
            <button onClick={RenderAge}>Set Age</button>
            <button onClick={RenderName}>Set Name</button>
          </div>
          <ChildrenState name={name} age={age} />
        </div>
      </div>
    </>
  );
}

export default Render;
