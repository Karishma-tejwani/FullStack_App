import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Add() {

    const [val, setVal] = useState({
        name:"",
        email:"",
        job:"",
        phone:"",
        address:"",
    })

    const setData = (e) =>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setVal((preval) => {
            return{
                ...preval, [name]:value
            }
        })
    }

    const addData = async(e) =>{
        e.preventDefault();
        const {name, email, job, phone, address} = val;
        const res = await fetch("/add", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name, email, job, phone, address})
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 404 || !data){
            alert("error");
            console.log("err");
        }else{
            alert("data added");
            console.log("data added");
        }
    }

    return (
        <div className="container">
            <NavLink to='/'>Home</NavLink>
            <form className="mt-5">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" 
                            name="name"
                            value={val.name}
                            onChange={setData}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            name="email"
                            value={val.email}
                            onChange={setData}
                        />
                    </div>
                    {/* <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                            name="password"
                            value={val.password}
                            onChange={setData}
                        />
                    </div> */}
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputJob" className="form-label">Job</label>
                        <input type="text" className="form-control" id="exampleInputJob" 
                            name="job"
                            value={val.job}
                            onChange={setData}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputContact" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="exampleInputContact" 
                            name="phone"
                            value={val.phone}
                            onChange={setData}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control"
                            name="address"
                            value={val.address}
                            onChange={setData}
                        />
                    </div>
                    <button type="submit" onClick={addData} className="btn btn-primary">Add</button>
                </div>
                
            </form>
        </div>
    )
}

export default Add;