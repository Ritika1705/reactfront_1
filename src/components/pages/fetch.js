import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Homie = () => {
  const [features, setFeature] = useState([]);

  useEffect(() => {
    loadFeatures();
  }, []);

  const loadFeatures = async () => {
    const result = await axios.get("http://localhost:3003/features");
    setFeature(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/features/${id}`);
    loadFeatures();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Feature List Page</h1>
        <table className="table table-striped  text border shadow">
          <thead className ="thead-dark">
            <tr>
              <th scope="col" >#</th>
              <th scope="col" >Feature Name</th>
              <th scope="col">Custom Key</th>
              <th scope="col">Custom Value</th>
              <th scope="col">True or False</th>
              <th scope="col"></th>
              <th scope="col">Action</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{feature.name}</td>
                <td>{feature.customkey}</td>
                <td>{feature.customval}</td>
                <td>{feature.fval}</td>
                <td><Link class="btn btn-primary" to={`/viewuser/${feature.id}`}>View</Link></td>
                <td><Link class="btn btn-warning" to={`/edituser/${feature.id}`}>Edit</Link></td>
                <td><Link class="btn btn-danger" onClick={() => deleteUser(feature.id)}>Delete</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homie;