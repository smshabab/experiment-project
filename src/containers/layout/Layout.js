import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserDetails from '../userDetails/UserDetails';
import UserListing from '../userListing/UserListing';
import EditUserDetails from '../editUserDetails/EditUserDetails';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Layout = (props) => {
    return(
        <Container>
            {(props.logged) ? <Redirect to="/layout"/> : null}
            <Row>
                <Col>HOME PAGE</Col><br/>
            </Row>
            <Row>
                <Col><Button onClick={props.logout}>Logout</Button></Col><br/>
                <Col><Button onClick={props.displayAllUsers}>All Users</Button><Button onClick={props.displayDetails}>My Details</Button><Button onClick={props.displayEditDetails}>Edit Details</Button></Col>
                <br/>
                
            </Row>
            <Row>
                <Col>
                {(props.disDetails) ? <UserDetails/> : null}
                {(props.disListing) ? <UserListing/> : null}
                {(props.disEditDetails) ? <EditUserDetails/> : null}
                </Col>
            </Row>
        </Container>
    );
};


const mapStateToProps = state => {
    return {
        disDetails: state.displayDetails,
        disListing: state.displayListing,
        logged: state.logged,
        disEditDetails: state.displayEditDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        displayDetails: () => dispatch({type:'ON_CLICK_DETAILS'}),
        displayAllUsers: () => dispatch({type:'ON_CLICK_LISTING'}),
        logout: ()=> dispatch({type:'ON_CLICK_LOGOUT'}),
        displayEditDetails: () => dispatch({type: 'ON_CLICK_EDIT_DETAILS'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Layout);