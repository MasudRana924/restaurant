import React from 'react';
import { Col, Container, Form, Row ,Button} from 'react-bootstrap';
import './Signup.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate }  from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Signup = () => {
    const { registerUser, error, handleName, handleEmail, handlePass, setUserName, setUser, name, email, pass, setError, setLoading } = useAuth() 
    const navigate = useNavigate()
    const saveUser = (email, diaplayName) => {
        const user = { email, diaplayName }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast.success('SignUp Successfull ', {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })


    }
    return (
        <Container fluid className="mt-5">
            <Row xs={1} md={3}>
                <Col md={4}></Col>
                <Col md={4}>
                    <div className="signup-card">
                        <div className="d-flex">
                            <button className="google-btn me-1 ms-1">Google</button>
                            <button className="facebook-btn me-1">Facebook</button>
                        </div>
                        <Form className="w-75 mx-auto mt-3" onSubmit={(event) => {
                        event.preventDefault()
                        registerUser(email, pass)
                            .then(result => {
                                navigate('/login');
                                setError('')
                                const newUser = { email, displayName: name }
                                setUser(newUser)
                                saveUser(email, name)
                                setUserName()
                            })
                            .catch(error => {
                                setError('Enter a valid email')
                            })
                            .finally(() =>
                                setLoading(false)
                            );
                    }}>
                            <Form.Group className="mb-1">
                            <p className="text-start text-white">Name </p>
                                <Form.Control type="text" placeholder="Enter Your Name" onBlur={handleName}/>
                            </Form.Group>
                            <Form.Group className="mb-1" >
                            <p className="text-start text-white">Email </p>
                                <Form.Control type="email" placeholder="Enter Your Email" onBlur={handleEmail}/>
                            </Form.Group>
                            <Form.Group className="mb-1" >
                            <p className="text-start text-white">Password </p>
                                <Form.Control type="password" placeholder="Enter a Password"onBlur={handlePass} />
                                <p className="text-start text-white"> Password should be more than 6 characters</p>
                                <p className="text-start text-danger">{error}</p>
                            </Form.Group>
                            <Button type="submit" className="w-100 text-center fs-6 mt-3 " size="sm" variant="dark">
                                    Sign-up
                                </Button> <br />
                            <p className="text-start text-white">Already have an account ? <Link to="/login" className="text-decoration-none text-white">Log-in  </Link></p>
                            <br />
                        </Form>
                    </div>
                </Col>
                <Col md={4}></Col>
            </Row>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
       
        </Container>
    );
};

export default Signup;