import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Add() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [job, setJob] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

       const addData = async(e) =>{
        e.preventDefault();
        
        const val = {name, email, job, phone, address};
        console.log(val);

        const res = await fetch("/add", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(val)
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 404 || !data){
            alert("Data not inserted!");
            console.log("Data not inserted!");
        }else{
            alert("Data Inserted!");
            console.log("Data Inserted!");
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                            name="password"
                            value={password}
                            onChange={setData}
                        />
                    </div> */}
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputJob" className="form-label">Job</label>
                        <input type="text" className="form-control" id="exampleInputJob" 
                            name="job"
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputContact" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="exampleInputContact" 
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={addData} className="btn btn-primary">Add</button>
                </div>
                
            </form>
        </div>
    )
}

export default Add;