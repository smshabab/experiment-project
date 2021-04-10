import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import './userLogin.css';

const userLogin = () => {
    return(
        <Container fluid >
            <Row>
                <Col lg={4} className="containerDiv"><p>USER LOGIN</p></Col>
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
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
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
                            <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </Col>
                        <Col lg={4}>
                            <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                        </Col>
                    </Row>
                    <Row>
                        <button type="submit" disabled={isSubmitting}>
                        Submit
                        </button>
                    </Row>
                    
                </form>
                )}
            </Formik>
        </Container>
    );
};

export default userLogin;