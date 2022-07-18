import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@mui/material';
import profile from "../images/profile.png";

function View() {
    return (
        <div className='container mt-3'>
            <h2>Welcome Karishma</h2>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='add_btn'>
                        <button className="btn btn-primary mx-2"><EditIcon /></button>
                        <button className="btn btn-danger"><DeleteIcon /></button>
                    </div>
                    <div className='row'>
                        <div className='left col-lg-6 col-md-6 col-12'>
                            <img src={profile} style={{ width: 50 }} alt='profile' />
                            <h3 className='mt-3'>Name: <span>Karishma</span></h3>
                            <p className='mt-3'>Email: <span>karshi@gmail.com</span></p>
                            <p className='mt-3'>Job: <span>Web developer</span></p>
                        </div>
                        <div className='right col-lg-6 col-md-6 col-12'>
                            <p className='mt-5'>Number: <span>+92-3123456789</span></p>
                            <p className='mt-3'>Address: <span>Defence phase-2</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default View;