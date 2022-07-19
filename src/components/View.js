import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import profile from "../images/profile.png";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

function View() {
  const [getproductdata, setproductdata] = useState([]);
  console.log(getproductdata);

  const { id } = useParams();
  console.log(id);

  const getproduct = async () => {
    const res = await fetch(`/getproduct/${id}`, {
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
    getproduct();
  }, []);

  const deleteproduct = async(id) => {
    const res2 = await fetch(`/deleteproduct/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("product deleted");
        }
  }

  return (
    <div className="container mt-3">
      <h2>Welcome {getproductdata.name}</h2>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <NavLink to={`/edit/${getproductdata._id}`}><button className="btn btn-primary mx-2"><EditIcon /></button></NavLink>
            <button className="btn btn-danger" onClick={() => deleteproduct(getproductdata._id)}><DeleteIcon /></button>
          </div>
          <div className="row">
            <div className="left col-lg-6 col-md-6 col-12">
              <img src={profile} style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">
                Name: <span>{getproductdata.name}</span>
              </h3>
              <p className="mt-3">
                Email: <span>{getproductdata.email}</span>
              </p>
              <p className="mt-3">
                Job: <span>{getproductdata.job}</span>
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                Number: <span>{getproductdata.phone}</span>
              </p>
              <p className="mt-3">
                Address: <span>{getproductdata.address}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default View;
