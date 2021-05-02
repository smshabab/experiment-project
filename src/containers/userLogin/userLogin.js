import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/auth';

const UserLogin = () => {

    const dispatch = useDispatch();

    const logged = useSelector((state) => {return state.logged});

    const changeState = () => {
        dispatch(actions.changeStateIsRegistered());
    };
   
    return(
        <div>
            {(logged) ? <Redirect to="/layout"/> : null}
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
                    onSubmit={async (values, { setSubmitting }) => {
                        dispatch(actions.onLogin(values.email, values.password));
                    }}
                >
                    {({
                    isSubmitting,
                    /* and other goodies */
                    }) => (
                    <Form>
                        <Row>
                            <Col lg={4}>
                                <label htmlFor="email">Email</label>
                            </Col>
                            <Col lg={4}>
                            <Field type="email" name="email" />
                            </Col>
                            <Col lg={4}>
                            <ErrorMessage name="email" component="div" />
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <label htmlFor="passeord">Password</label>
                            </Col>
                            <Col>
                            <Field type="password" name="password" />
                            </Col>
                            <Col>
                            <ErrorMessage name="password" component="div" />
                            </Col>
                        </Row>
                        <Row>
                            <br/>
                            <Col>
                                <button type="submit" disabled={isSubmitting}>Submit</button>
                            </Col><br/>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/registration" onClick={changeState}>Don't have a account?</Link>
                            </Col>
                        </Row>
                        
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    );
    
};


export default UserLogin;