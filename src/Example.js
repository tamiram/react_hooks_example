import React, { useState, useEffect } from "react";


function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(()=> {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    } catch (e) {
      value = defaultValue;
    }
    return value
  });
  useEffect(() => {
    window.localStorage.setItem(key, state)
  },[state,key])
  return [state, setState]
}

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // const [count, setCount] = useLocalStorageState("counter",0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  useEffect(() => {
    document.title = `nothing clicked!!`;
  }, []); // componentDidMount

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <form>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder='First name'
          type='text'
          name='firstName'
          required
        />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder='Last name'
          type='text'
          name='lastName'
          required
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email address'
          type='email'
          name='email'
          required
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
          name='password'
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
