
import React from "react";
const Contact = () =>{
	return (
      
      	<form>
		  	<div class = "container">
			  <div class="form-group">
			  	<br></br>
			    <label for="exampleFormControlInput1">Email address</label>
			    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
			  </div>
			  
			  <div class="form-group">
			  	<br>
			  	</br>
			    <label for="exampleFormControlTextarea1">Example textarea</label>
			    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			  </div>

			</div> 
		</form>
    	 
	);
};

export default Contact;