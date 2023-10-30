import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('jwt_token', data.token);
      navigate('/welcome');
    } else {
      setEmail('');
      setPassword('');
      setError('Login failed. Please check your credentials.');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  
  useEffect(() => {
    if (localStorage.getItem("jwt_token") !== null) {
      navigate("/welcome");
    }
  }, []);

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
            <p>{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;











// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
// if(localStorage.getItem("jwt_token")!= undefined){
//     navigate("/welcome")
// }
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
     
//       const data = await response.json();

     
//       localStorage.setItem('jwt_token', data.token);
// console.log(localStorage.getItem("jwt_token"))
      
//       navigate('/welcome');
//     } else {
//       setEmail('');
//       setPassword('');
//       setError('Login failed. Please check your credentials.');
//       setTimeout(() => {
//         setError('');
//       }, 3000);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary mt-3">
//               Login
//             </button>
//             <p>{error}</p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;









// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [error, setError] = useState('');
// // const navigate =  useNavigate()
// //   const handleEmailChange = (e) => {
// //     setEmail(e.target.value);
// //   };

// //   const handlePasswordChange = (e) => {
// //     setPassword(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

    
      
// //       const response = await fetch('http://localhost:5000/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       if (response.ok) {
// //         navigate("/welcome")
// //         // setSuccessMessage('Login successful');
// //         // setEmail('');
// //         // setPassword('');
// //         // setTimeout(()=>{
// //         //     setSuccessMessage("")
// //         // },3000)
// //       } else {
// //         setEmail('');
// //         setPassword('');
// //         setError('Login failed. Please check your credentials.');
// //         setTimeout(()=>{
// //             setError("")
// //         },3000)
// //       }
   
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Login</h2>
// //       <div className='row'>

// //       <div className='col-md-6'>

     
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             id="email"
// //             value={email}
// //             onChange={handleEmailChange}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="password">Password:</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             id="password"
// //             value={password}
// //             onChange={handlePasswordChange}
// //           />
// //         </div>
// //         <button type="submit" className="btn btn-primary mt-3">Login</button>
// //         <p>{successMessage}</p>
// //         <p>{error}</p>
// //       </form>
// //       </div>
// //        </div>
// //     </div>
// //   );
// // }

// // export default Login;
