import React from 'react';
import { useFormik } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/auth';

const validate = values => {
    
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }
    
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }
    
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }
    
    return errors;
};

 
const UserRegistration = (props) => {

    const dispatch = useDispatch();

    const isReg = useSelector((state) => {return state.isRegistered});
    
    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        },
        validate,
        onSubmit: values => {
            if(values.firstName !== '' && values.lastName !== '' && values.email !== '' && values.password !== ''){
                dispatch(actions.uploadUser({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    phone: "",
                    address: ""
                }));
            }
        },
    });
 
   return (
   
    <Container>
        {(isReg) ? <Redirect to="/login"/> : null}   
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <Col>
                    USER REGISTRATION
                </Col><br/>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="firstName">First Name</label>
                </Col>
                <Col>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </Col>
                <Col>
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="lastName">Last Name</label>
                </Col>
                <Col>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                </Col>
                <Col>
                    {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="email">Email Address</label>
                </Col>
                <Col>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </Col>
                <Col>
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="password">Password</label>
                </Col>
                <Col>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </Col>
                <Col>
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </Col>
            </Row>
            <Row>
                <br/>
                <Col>
                    <button type="submit">Submit</button>
                </Col><br/>
            </Row>
            <Row>
                <Col>
                    <Link to="/login">Already have a account?</Link>
                </Col>
            </Row>
            
        </form>
    </Container>
    
   );
 };



export default UserRegistration;