import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function Edit() {

    const navigate = useNavigate();

  const [val, setVal] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setVal((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams();
  console.log(id);

  const getData = async (e) => {
    const res = await fetch(`/getproduct/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("Error");
    } else {
      setVal(data);
      console.log("Get Data!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateproduct = async(e) => {
    e.preventDefault();

    const {name, email, job, phone, address} = val;

    const resp = await fetch(`/updateproduct/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, email, job, phone, address})
    });
    const anotherdata = await resp.json();
    console.log(anotherdata);

    if (resp.status === 422 || !anotherdata) {
      alert("Fill Data");
    } else{
        setVal(anotherdata);
        alert("Data Updated!");
        navigate("/")
    }
  }

  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-5">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputName" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              name="name"
              value={val.name}
              onChange={setData}
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={val.email}
              onChange={setData}
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputJob" class="form-label">
              Job
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputJob"
              name="job"
              value={val.job}
              onChange={setData}
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputContact" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputContact"
              name="phone"
              value={val.phone}
              onChange={setData}
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputAddress" class="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              cols={5}
              rows={5}
              name="address"
              value={val.address}
              onChange={setData}
            />
          </div>
        </div>
      </form>
      <button type="submit" onClick={updateproduct} class="btn btn-primary">Update</button>
    </div>
  );
}

export default Edit;
