import React from 'react';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// styling
import '../App.css';

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // let history = useHistory();

  const handleEmailChange = (e) => {
    setemail(e.target.value);
};

  const handleNameChange = (e) => {
    setname(e.target.value);
};
const handlePasswordChange = (e) => {
  setpassword(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();
  const details = { email, password }
  }

  const details = {name, email, password }
  return (
    <div className="form-comp cfb">
      <h1>Create an new Account</h1>
      <form className="sign-up-form cfb" onSubmit={handleSubmit}>

        <label>
          Name:
          <br/>
          <input type="name" placeholder='Enter your Name'  onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <br/>
          <input type="email" placeholder='Enter your Email'  onChange={handleEmailChange}/>
        </label>
        <label>
          Create Password:
          <br/>
          <input type="password" placeholder='Enter your Password' onChange={handlePasswordChange}/>
        </label>
        <br/>
        <label>
          Confirm Password:
          <br/>
          <input type="password" placeholder='ReEnter your Password'/>
        </label>
        
        <button>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;