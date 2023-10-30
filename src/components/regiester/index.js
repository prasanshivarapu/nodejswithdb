import React, { useState } from 'react';

function Welcome() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setpassword] = useState("")
  const [success,setsuccess]=  useState("")

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
const handleChangePassword = (e)=>{
  setpassword(e.target.value)
}
  const submit = async (e) => {
    console.log("submit");
    e.preventDefault();

    if (firstName && lastName && email && password) {
      const formData = {
        firstName,
        lastName,
        email,
        password
      };
      console.log(formData);

      
        const response = await fetch('http://localhost:5000/storedata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log(response);

        if (response.ok) {
           setsuccess("Data added to the database")
          setTimeout(()=> {
            setsuccess("")
          }, 3000);
         
          
          setFirstName('');
          setLastName('');
          setEmail('');
          setpassword('')
        } else {
          console.error('Failed to add data to the database');
        }
      
    } else {
      console.error('Please fill out all fields');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={handleChangeLastName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
            <p>{success}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;











// import React, { useState } from 'react';

// function Welcome() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleChangeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleChangeLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const submit = async (e) => {
//     console.log("submit")
//     e.preventDefault(); 

//     if (firstName && lastName && email) {
//       const formData = {
//         firstName,
//         lastName,
//         email,
//       };
// console.log(formData)
//       try {
//         const response = await fetch('http://localhost:5000/storedata', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });
// console.log(response)
//         if (response.ok) {
//           console.log('Data added to the database');
//           setFirstName('');
//         setLastName('');
//         setEmail('');
          
//         } else {
//           console.error('Failed to add data to the database');
//         }
//       } catch (error) {
//         console.error('An error occurred:', error);
//       }
//     } else {
//       console.error('Please fill out all fields');
//     }
//   };

//   return (
//     <div>
//       <h2>Store Data</h2>
//       <form onSubmit={submit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={handleChangeFirstName}
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             value={lastName}
//             onChange={handleChangeLastName}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={handleChangeEmail}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Welcome;
