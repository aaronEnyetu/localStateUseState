import React, { useState } from 'react';
import './App.css';
localStorage.setItem('name', 'react hooks');

/*****useState ******/
// useState lets you use local state within a function component. You pass the initial state to this function
//and it returns a variable with the current state value(not necessarily the initial state) and another function to update this value.

//Syntax
// const [stateValue, updaterFn] = useState(initialStateValue);

function App() {
  const [name, setName] = useState(); //String
  const [age, setAge] = useState(9); //Number
  const [isMale, setMale] = useState(false); //Boolean
  const [formData, setFormData] = useState({ email: '', password: '' }); //Object
  const [student, setStudent] = useState([]); //Array
  const [localName, setLocalName] = useState(() => localStorage.getItem('name')); //function
  const [count, setCount] = useState(0); //PrevState

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = () => {
    setAge(age + 1);
  };

  const genderHandler = () => {
    setMale(!isMale);
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const studentHandler = () => {
    setStudent([...student, student + 1]);
    console.log(student);
  };

  const countHandler = () => {
    //without prevState console will print when count become 6 because it take old state
    // setCount(count + 1);
    // if (count === 5) {
    //   console.log('Count reaches 5');
    // }

    // Below is the solution to this problem
    setCount((prevState) => {
      const newCount = prevState + 1;
      console.log(newCount);
      if (newCount === 5) {
        console.log('Count has reached 5');
      }
      return newCount;
    });
  };

  return (
    <div>
      <h1>useState Hooks</h1>
      {/* Name Demo */}
      <section>
        <div>My Name is {name}</div>
        <input onChange={nameHandler} />
      </section>

      {/* Age Demo */}
      <section>
        <div>My Age is {age}</div>
        <button onClick={ageHandler}>Increase Age</button>
      </section>

      {/* Gender Demo */}
      <section>
        <div>My Gender is {isMale ? 'Male' : 'Female'} </div>
        <button onClick={genderHandler}>Toggle Gender</button>
      </section>

      {/* Form Demo */}
      <section>
        <form onSubmit={formSubmit}>
          <label> Email</label>
          <input onChange={formHandler} name="email" type="text" />
          <label>Password</label>
          <input onChange={formHandler} name="password" type="password" />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Student Array Demo */}
      <section>
        <div>Number of Students in the Class {student.length}</div>
        <button onClick={studentHandler}>Add Student</button>
      </section>

      {/* Value initialized by function */}
      <section>
        <div>Value from local storage {localName}</div>
      </section>

      {/* preState Demo */}
      <section>
        <div>count {count}</div>
        <button onClick={countHandler}>Increment Count</button>
      </section>
    </div>
  );
}

export default App;
