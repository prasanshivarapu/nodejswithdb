import React, { useState, useEffect } from 'react';

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:5000/getdata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='text-center'>Data List</h1>
     
      <table className="table">
  <thead>
    <tr className='table-dark'>
      
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    
    {data.map((item) => (
          <tr className='table-success' key={item.id}>
            <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.email}</td>
          
          </tr> 
        ))}
      
   
   
  </tbody>
</table>
    </div>

  );
}

export default DataList;
