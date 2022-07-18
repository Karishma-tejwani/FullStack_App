import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

function Home() {

  const [getuserdata, setuserdata] = useState([]);
  console.log(getuserdata);

  const getData = async (e) => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("Error");
    } else {
      setuserdata(data);
      console.log("Get Data!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <NavLink to="/add" className="btn btn-primary">
            Add Data
          </NavLink>
        </div>
        <table className="table mt-2">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((val, key) => {
              return (
                <>
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.job}</td>
                    <td>{val.phone}</td>
                    <td>{val.address}</td>
                    <td className="d-flex justify-content-between">
                      <button className="btn btn-success">
                        <VisibilityIcon />
                      </button>
                      <button className="btn btn-primary">
                        <EditIcon />
                      </button>
                      <button className="btn btn-danger">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
