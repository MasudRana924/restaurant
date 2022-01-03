import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Reservation.css'
import client from '../images/client.jpg'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Swal from 'sweetalert2'

const Reservation = () => {
    const [Adate, setADate] = React.useState(null);
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    let timerInterval
    const onSubmit = data => {
        data.adate = Adate.toDateString()
        data.status = 'pending'
        fetch('http://localhost:5000/reservation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    Swal.fire({
                        title: 'Resevation Successful !',
                        html: 'close in <b></b> milliseconds.',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                          Swal.showLoading()
                          const b = Swal.getHtmlContainer().querySelector('b')
                          timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                          }, 100)
                        },
                        willClose: () => {
                          clearInterval(timerInterval)
                        }
                      }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                          console.log('I was closed by the timer')
                        }
                      }) 
                    reset()
                }
            })
    }
    
    return (
        <div id="reserve">
        <Container fluid className="mt-5 pt-5">
        <h3 className="text-center fw-bold pb-3">Reservation</h3>
            <Row xs={1} md={2} className="w-75 mx-auto">
                <Col md={8}>
                    <img src={client} className="client-img" alt="" />
                </Col>
                <Col md={4}>
                    <h3>Book a Table</h3>
                    <p className="text-start ">Making a reservation is very easy and takes some few minutes.</p>
                    <div className="table">
                    <form className="shipping-formm w-100" onSubmit={handleSubmit(onSubmit)} >
                        <input defaultValue="" {...register("name")} className="form-input" placeholder="Your name" />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input defaultValue="" {...register("phone", { required: true })} placeholder="Your phone number" className="form-input" />
                        <input defaultValue="" {...register("guest", { required: true })} placeholder="Number of Guest" className="form-input" />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className="error">This field is required</span>}
                        <div className="">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date"
                                    value={Adate}
                                    onChange={(newValue) => {
                                        setADate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            
                        </div>
            
                        <input type="submit" className="confirm-btn mt-1" />
                    </form>

                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Reservation;