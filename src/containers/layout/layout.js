import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserDetails from '../userDetails/userDetails';
import UserListing from '../userListing/userListing';
import {connect} from 'react-redux';

const layout = (props) => {
    return(
        <Container>
            <Row>
                <Col>HOME PAGE</Col><br/>
            </Row>
            <Row>
                <Col><Button onClick={props.displayDetails}>My Details</Button></Col>
                <Col><Button onClick={props.displayAllUsers}>All Users</Button></Col><br/>
            </Row>
            <Row>
                <Col>
                    {(props.disDetails) ? <UserDetails/> : null}
                    {(props.disListing) ? <UserListing/> : null}
                </Col>
            </Row>
        </Container>
    );
};


const mapStateToProps = state => {
    return {
        disDetails: state.displayDetails,
        disListing: state.displayListing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        displayDetails: () => dispatch({type:'ON_CLICK_DETAILS'}),
        displayAllUsers: () => dispatch({type:'ON_CLICK_LISTING'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(layout);