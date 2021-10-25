import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Product =()=>{

    const history = useHistory();

    const redirect = () => {
        history.push('/productdata')
      }

            
    const [name,setName]=useState("");
    const [cost,setNumber]=useState("");

    function Product(){

    let data={name,cost}

    fetch("http://localhost:7000/product",{
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
      

         <h1 className="text-center">CRUD - Product</h1>
    
         <div className="container contact_div">
          <div className="row">
              <div className="col-md-6">
    
                <div class="md-3">
                <label for="Input1" class="form-label">Name</label>
                <input type="text"  value={name}  onChange={(e)=>{setName(e.target.value)}} name="name" class="form-control" id="Input1" placeholder="name" required />
                </div>
                <div class="md-3">
                <label for="Input2" class="form-label">Cost</label>
                <input type="number" value={cost}  onChange={(e)=>{setNumber(e.target.value)}} name="cost" class="form-control" id="Input2" placeholder="cost" required />
                </div>
       
                <div class="col-12">
                <button onClick={Product} class="btn btn-outline-primary" type="button">Submit</button>
                </div> 

                
                <div class="col-12">
                <button onClick={redirect} class="btn btn-outline-primary" type="button">View the product data</button>
                </div> 

                


           
               </div>
          </div>
         </ div>
    
        </ div>
        
    );
    
    
    

}


export default Product;