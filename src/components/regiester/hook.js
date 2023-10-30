import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './index.css'
function App1() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h1>Employee Form</h1>
      
       
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
            

           <div className='col-12 col-md-4'>
            
          <label className="form-group" htmlFor="firstName">First Name:</label> <br />
          <input
            type="text"
            id="firstName"
            name="firstname"
            className="form-control"
            {...register('firstname', {
              required: 'First name is required',
              minLength: {
                value: 3,
                message: 'First name should contain a minimum of 3 characters',
              },
            })}
          />
          <p className="error">{errors.firstname?.message}</p>
        </div> 

        <div className='col-12 col-md-4'>
          <label className="form-group" htmlFor="lastName">Last Name:</label><br />
          <input
            type="text"
            id="lastName"
            name="lastname"
            className="form-control"
            {...register('lastname', {
              required: 'Last name is required',
              minLength: {
                value: 3,
                message: 'Last name should contain a minimum of 3 characters',
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Last name should contain only letters',
              },
            })}
          />
          <p className="error">{errors.lastname?.message}</p>
        </div>
        <div className='col-12 col-md-4'>
          <label className="form-group" htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            {...register('email', {
              required: 'Email is required ',
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className='col-12 col-md-4'>
          <label className="form-group" htmlFor="word">Disignation:</label><br />
          <input
            type="text"
            id="word"
            name="disignation"
            className="form-control"
            {...register('disignation', {
              required: 'disignation is required',
            
            })}
          />
          <p className="error">{errors.disignation?.message}</p>
        </div>
        <div className='col-12 col-md-4'>
            
            <label className="form-group" htmlFor="ssn">SSN:</label> <br />
            <input
              type="text"
              id="ssn"
              name="ssn"
              className="form-control"
              {...register('ssn', {
                required: 'ssn is required',
               
              })}
            />
            <p className="error">{errors.ssn?.message}</p>
          </div> 
  
          <div className='col-12 col-md-4'>
            <label className="form-group" htmlFor="dob">DOB:</label><br />
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              {...register('dob', {
                required: 'dob is required',
               
                
              })}
            />
            <p className="error">{errors.dob?.message}</p>
          </div>
          <div className='col-12 col-md-4'>
            <label className="form-group" htmlFor="state">State:</label><br />
            <input
              type="text"
              id="state"
              name="state"
              className="form-control"
              {...register('state', {
                required: 'state is required ',
              })}
            />
            <p className="error">{errors.state?.message}</p>
          </div>
          <div className='col-12 col-md-4'>
            <label className="form-group" htmlFor="town">Town:</label><br />
            <input
              type="text"
              id="town"
              name="town"
              className="form-control"
              {...register('town', {
                required: 'town is required',
              
              })}
            />
            <p className="error">{errors.town?.message}</p>
          </div>
          <div className='col-12 col-md-4'>
          <label className="first">Gender:</label><br />
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                {...register('gender', {
                  required: 'Please select your gender',
                })}
              /> Male
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                {...register('gender', {
                  required: 'Please select your gender',
                })}
              /> Female
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                {...register('gender', {
                  required: 'Please select your gender',
                })}
              /> Other
            </label>
          </div>
          <p className="error">{errors.gender?.message}</p>
        </div>
        <div className='col-12 col-md-12'>
          <label className="form-group" htmlFor="address">Address:</label><br />
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            {...register('address', {
              required: 'address is required ',
            })}
          />
          <p className="error">{errors.address?.message}</p>
        </div>
        <div className="button">
          <button className="but" type="submit">Submit</button>
        </div>  
        </div>
      </form>
      </div>
      
   
  );
}

export default App1;
