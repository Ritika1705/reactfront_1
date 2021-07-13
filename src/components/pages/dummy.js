import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function shoot(){
  alert("Your Function was created");
 //window.location.reload(false);
}
const Dummy = () => {
  let history = useHistory();
  const [feature, setFeature] = useState({
    id: "",
    name: "",
    customkey: "",
    customval: "",  
    fval: ""
   
  });

  const { name, customkey, customval, fval } = feature;
  const onInputChange = e => {
    setFeature({ ...feature, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/features", feature);
    history.push("/");
  };
  return (
    <div className="container" className="a">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Feature</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Feature Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Custom Key (Enter Null for no key)"
              name="customkey"
              value={customkey}
              onChange={e => onInputChange(e)}
            />
          </div>

          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Custom Value"
              name="customval"
              value={customval}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter True or False"
              name="fval"
              value={fval}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <button className="btn btn-primary btn-block" onClick={shoot}>Add Feature</button>
        </form>
      </div>
    </div>
  );
};

export default Dummy;