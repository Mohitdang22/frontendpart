import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const User =()=>{

    const history = useHistory();

    const redirect = () => {
        history.push('/userdata')
      }

            
    const [name,setName]=useState("");
    const [phone_number,setNumber]=useState("");

    function Users(){

    let data={name,phone_number}

    fetch("http://localhost:7000/user",{
        method:'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
        },
       body:JSON.stringify(data)
    })

    alert("Data has been sent");

   }

    return(
        <div className="my-5">
      

         <h1 className="text-center">CRUD - User</h1>
    
         <div className="container contact_div">
          <div className="row">
              <div className="col-md-6">
    
                <div class="md-3">
                <label for="Input1" class="form-label">Name</label>
                <input type="text"  value={name}  onChange={(e)=>{setName(e.target.value)}} name="name" class="form-control" id="Input1" placeholder="name" required />
                </div>
                <div class="md-3">
                <label for="Input2" class="form-label">Phone number</label>
                <input type="number" value={phone_number}  onChange={(e)=>{setNumber(e.target.value)}} name="phone_number" class="form-control" id="Input2" placeholder="phone number" required />
                </div>
       
                <div class="col-12">
                <button onClick={Users} class="btn btn-outline-primary" type="button">Submit</button>
                </div> 

                
                <div class="col-12">
                <button onClick={redirect} class="btn btn-outline-primary" type="button">View the user data</button>
                </div> 

                


           
               </div>
          </div>
         </ div>
    
        </ div>
        
    );
    
    
    

}


export default User;