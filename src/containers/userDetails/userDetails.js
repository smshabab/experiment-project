import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';

const userDetails = (props) => {
    return(
        <Container>
            <Row>
                <Col>
                    USER DETAILS
                </Col><br/>
            </Row>
            <Row>
                <Col>
                    First Name
                </Col>
                <Col>
                    {props.firstName}
                </Col>
            </Row>
            <Row>
                <Col>
                    Last Name
                </Col>
                <Col>
                    {props.lastName}
                </Col>
            </Row>
            <Row>
                <Col>
                    Email
                </Col>
                <Col>
                    {props.email}
                </Col>
            </Row>
            <Row>
                <Col>
                    Password
                </Col>
                <Col>
                    {props.password}
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = state => {
    return{
        firstName: state.userDetailsPayload.firstName,
        lastName: state.userDetailsPayload.lastName,
        email: state.userDetailsPayload.email,
        password: state.userDetailsPayload.password
    };
};

export default connect(mapStateToProps)(userDetails);