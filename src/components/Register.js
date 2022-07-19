// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// function Register() {

//     const navigate = useNavigate();

//     const [username, setName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
    
//        const registerUser = async(e) =>{
//         e.preventDefault();
        
//         const val = {username, email, password};
//         console.log(val);

//         const res = await fetch("/register", {
//             method: "POST",
//             headers: {"Content-Type":"application/json"},
//             body: JSON.stringify(val)
//         });

//         const data = await res.json();
//         console.log(data);

//         if(res.status === 404 || !data){
//             alert("User not register");
//             console.log("User not register");
//         }else{
//             alert("User registered Successfully!");
//             console.log("User registered Successfully!");
//             navigate("/login")
//         }
//     }

//     return (
//         <div className="container">
//             <form className="mt-5">
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputName" className="form-label">Name</label>
//                         <input type="text" className="form-control" id="exampleInputName" 
//                             name="name"
//                             value={username}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputEmail1" className="form-label">Email address</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassord" className="form-label">Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword" 
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//             </form>
//             <button type="submit" onClick={registerUser} className="btn btn-primary">Register</button>
//         </div>
//     )
// }

// export default Register;

import React from 'react'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup'


function Register() {

const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      'username':'',
      'email':'',
      'password':''
    },

    validationSchema: Yup.object({
      username: Yup.string()
      .max(15, "Name should be less than 15 characters")
      .required("Name is required"),

      email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

      password:Yup.string()
      .required("Password can not be empty")

    }),

    onSubmit: values =>{
        alert("Register Successfully!")
        navigate("/login");
    //   alert(JSON.stringify(values, null, 2))
    }
  })


  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={formik.handleSubmit}>

        <input 
        name="username"
        placeholder='username'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        />

        <br/>

        {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}

        <input
        placeholder='email'
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />

        <br/>

        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

        <input
        name="password"
        placeholder='password'
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />
        <br/>

        {formik.touched.password && formik.errors.password? (<div>{formik.errors.password}</div>) : null}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register;