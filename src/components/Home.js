import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const [getproductdata, setproductdata] = useState([]);
  console.log(getproductdata);

  const getData = async (e) => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("Error");
    } else {
      setproductdata(data);
      console.log("Get Data!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteproduct = async(id) => {
    const res2 = await fetch(`/deleteproduct/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(res=> res.json()).then((data)=> { console.log(data)});
    // const deletedata = await res2.json();
    //     console.log(deletedata);

    //     if (res2.status === 422 || !deletedata) {
    //         console.log("error");
    //     } else {
    //         console.log("product deleted");
    //         getData();
    //     }
  }

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <NavLink to="/add" className="btn btn-primary">Add Data</NavLink>
        </div>
        <table className="table mt-2">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getproductdata.map((val, key) => {
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
                      <NavLink to={`view/${val._id}`}><button className="btn btn-success"><VisibilityIcon /></button></NavLink>
                      <NavLink to={`edit/${val._id}`}><button className="btn btn-primary"><EditIcon /></button></NavLink>
                      <button className="btn btn-danger" onClick={() => deleteproduct(val._id)}><DeleteIcon /></button>
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
