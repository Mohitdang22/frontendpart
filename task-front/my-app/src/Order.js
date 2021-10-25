import React from "react";
import './App.css';

const Order =()=>{

return(
    <div className="my-5">
    <h1 className="text-center">This is Order page</h1>
    
    <div className="container contact_div">
     <div className="row">
         <div className="col-md-6">
             <form>
             <div class="md-3">
           <label for="Input1" class="form-label">Name</label>
           <input type="text" class="form-control" id="Input1" placeholder="name" required />
           </div>
           <div class="md-3">
           <label for="Input2" class="form-label">Phone number</label>
           <input type="number" class="form-control" id="Input2" placeholder="phone number" required />
           </div>
    
           <div class="col-12">
           <button class="btn btn-outline-primary" type="submit">Submit</button>
           </div> 
           </form>
          </div>
     </div>
    </ div>
    
    </ div>
        );

}

export default Order;