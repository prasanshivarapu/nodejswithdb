import React, { useState } from 'react';

function Welcome() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const submit = async (e) => {
    console.log("submit")
    e.preventDefault(); 

    if (firstName && lastName && email) {
      const formData = {
        firstName,
        lastName,
        email,
      };
console.log(formData)
      try {
        const response = await fetch('http://localhost:5000/api/storedata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
console.log(response)
        if (response.ok) {
          console.log('Data added to the database');
          setFirstName('');
        setLastName('');
        setEmail('');
          
        } else {
          console.error('Failed to add data to the database');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    } else {
      console.error('Please fill out all fields');
    }
  };

  return (
    <div>
      <h2>Store Data</h2>
      <form onSubmit={submit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleChangeFirstName}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleChangeLastName}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Welcome;
