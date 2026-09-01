import { useState } from "react";
import ChildrenState from "./ChildrenState";

function SetupAge() {
  const [age, setAge] = useState(25);
  const setUp = () => {
    setAge(age + 1);
  };
  const [name,setName] = useState('Amir');
  const setDown =()=>{
    setName('FAEQ')
  }
  return (
    <>
      <h1>Welcome to my website</h1>
      <button onClick={setUp}>+</button>
      <ChildrenState age = {age} name = {name} />
      <button onClick={setDown}>set name</button>
    </>
  );
}

export default SetupAge;
