import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Edit(){
    const [val, setVal] = useState({
        name:"",
        email:"",
        password:"",
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

    return(
        <div className="container">
            <NavLink to='/'>Home2</NavLink>
            <form className="mt-5">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputName" 
                            name="name"
                            value={val.name}
                            onChange={setData}
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            name="email"
                            value={val.email}
                            onChange={setData}
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" 
                            name="password"
                            value={val.password}
                            onChange={setData}
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputContact" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="exampleInputContact" 
                            name="phone"
                            value={val.phone}
                            onChange={setData}
                        />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputAddress" class="form-label">Address</label>
                        <textarea className="form-control" cols={5} rows={5} 
                            name="address"
                            value={val.address}
                            onChange={setData}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;