import React from 'react';
import { useFormik } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
 

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
    
    return errors;
};
 
 const UserRegistration = () => {
    
    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        },
        validate,
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });
   return (
    <Container>
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <Col lg={2}>
                    <label htmlFor="firstName">First Name</label>
                </Col>
                <Col lg={4}>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
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
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </Col>
            </Row>
            <Row>
                <Col>
                
                </Col>
                <Col>
                    <button type="submit">Submit</button>
                </Col>
            </Row>
            
    
            
            
    
            
    
            
        </form>
    </Container>
    
   );
 };

 export default UserRegistration;