import React, { useEffect, useState } from "react";

const Form1 = () => {
    const [data, setData] = useState(null); // Set an initial state of null

    useEffect(() => {
        fetch('http://localhost:5000/api/storedata')
            .then(response => response.json())
            .then(data => setData(data))
            
    }, []);

    return (
        <div>
            {data !== null ? (
                <div>
                  
                    {console.log(data)}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Form1;
