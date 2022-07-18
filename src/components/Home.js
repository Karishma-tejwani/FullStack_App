import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {NavLink} from "react-router-dom";

function Home() {
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
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col">Address</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Karishma</td>
                            <td>karishma@gmail.com</td>
                            <td>Front-end developer</td>
                            <td>+923144678123</td>
                            <td>Defence Phase-2</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success"><VisibilityIcon /></button>
                                <button className="btn btn-primary"><EditIcon /></button>
                                <button className="btn btn-danger"><DeleteIcon /></button>
                            </td>
                        </tr>
                        {/* <tr>
                            <th scope="row">2</th>
                            <td>Sadia</td>
                            <td>sadia@gmail.com</td>
                            <td>MERN Stack Developer</td>
                            <td>+923223123456</td>
                            <td>
                                <button>Update</button>
                                <button>View</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Zoya</td>
                            <td>zoya@gmail.com</td>
                            <td>Backend developer</td>
                            <td>+923223236754</td>
                            <td>
                                <button>Update</button>
                                <button>View</button>
                                <button>Delete</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;