import React, { useState } from "react";

function UserRegisteration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let isValid = true;

    // Validate Name
    if (name.length < 3) {
      isValid = false;
      setNameError('Invalid Input name should be minimum 3 characters');
    } else {
      setNameError('');
    }

    // Validate Password
    if(password.length < 6) {
      isValid = false;
      setPasswordError('Invalid Input password should be minimum 6 characters');
    } else {
      setPasswordError('');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      isValid = false;
      setEmailError('Invalid input enter valid email');
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setName("");
      setPassword("");
      setEmail("");
      setSuccessMessage("Registeration Successful");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {nameError && <p>{nameError}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {passwordError && <p>{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailError && <p>{emailError}</p>}
          </div>
        </div>
        <div>
          <button type="submit" disabled={!name || !password || !email}>
            Register
          </button>
        </div>
        <div>{successMessage && <p>{successMessage}</p>}</div>
      </form>
    </>
  );
}

export default UserRegisteration;
