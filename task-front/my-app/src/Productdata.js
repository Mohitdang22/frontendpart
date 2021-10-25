import React, {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";


const Productdata =()=>{

  
  const history = useHistory();

  const redirect = () => {
      history.push('/product')
    }

         
    const [name, setName] = useState("");

      useEffect(()=>{


    function getData(){

            fetch("http://localhost:7000/productpage",{
                method:'GET',
                headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
                }
            })

            .then((res) => res.json())
            .then((json) => {
               setName(json);
            })

    
  }

  
  getData();

  },[])

  

return (
  <div>
     
     <div className="home"> 
      <button  onClick={redirect}  class="btn btn-outline-primary" type="button">Go To Product Page</button>
      </div>
    <h1>Product data from an api in react </h1>

    {/* display data from the API */}
    {name && (
      <div className="books">

        {/* loop over the data */}
        {name.map((Product, index) => (
          <div key={index}>
            <ol>
            <label for="Input2" class="form-label">Name</label>
            <input type="text" value={Product.name} class="form-control" required />
            <button  class="btn btn-outline-primary" type="button">Edit the product data</button>
            <button  id="del" class="btn btn-outline-primary" type="button">Delete</button>
            </ol>
          </div>
        ))}

      </div>
    )}

  </div>
)

  }

export default Productdata;
