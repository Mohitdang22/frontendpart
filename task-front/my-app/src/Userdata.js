import React, {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";


const Userdata =()=>{

  
  const history = useHistory();

  const redirect = () => {
      history.push('/')
    }

         

    const [name, setName] = useState("");

      useEffect(()=>{


    function getData(){

            fetch("http://localhost:7000/",{
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
      <button  onClick={redirect}  class="btn btn-outline-primary" type="button">Go To User  Page</button>
      </div>
    <h1>User data from an api in react </h1>

    {/* display data from the API */}
    {name && (
      <div className="books">

        {/* loop over the data */}
        {name.map((User, index) => (
          <div key={index}>
            <ol>
            <label for="Input2" class="form-label">Name</label>
            <input type="text" value={User.name} class="form-control" required />
            <button  class="btn btn-outline-primary" type="button">Edit the user data</button>
            <button  id="del" class="btn btn-outline-primary" type="button">Delete</button>
            </ol>
          </div>
        ))}

      </div>
    )}

  </div>
)

  }

export default Userdata;
