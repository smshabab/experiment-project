import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

let payload = {};

const userLogin = (props) => {
    if(props.logged===true){
        console.log("Logged: True");
    }else{
        console.log("Logged: False");
    }
    return(
        
        (props.logged)?<Redirect to="/layout"/>:
        <Container fluid >
            <Row>
                <Col lg={4} className="containerDiv"><p>USER LOGIN</p><br/></Col>
            </Row>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length > 20) {
                        errors.password = 'Must be 20 characters or less';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    payload = values;
                    if(payload.email !== '' && payload.password !== ''){
                        props.onSubmit(payload);
                    }
                }}
            >
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
                }) => (
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <label htmlFor="email">Email</label>
                        </Col>
                        <Col lg={4}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </Col>
                        <Col lg={4}>
                            {errors.email && touched.email && errors.email}
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <label htmlFor="passeord">Password</label>
                        </Col>
                        <Col>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </Col>
                        <Col>
                            {errors.password && touched.password && errors.password}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </Col><br/>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/registration">Don't have a account?</Link>
                        </Col>
                    </Row>
                    
                </form>
                )}
            </Formik>
            
        </Container>
        
    );
};

const mapStateToProps = state => {
   return{
        logged: state.logged
   };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (payload) => dispatch({type:'SUBMIT_ON_LOGIN', payload})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(userLogin);