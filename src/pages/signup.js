import React from 'react';
  
const SignUp = () => {
  return (
    <div className="App">
      <div classname="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text"/>
        <label>Password</label>
        <input type="text"/>
        <button> Register </button>
      </div>
    </div>
  );
};
  
export default SignUp;