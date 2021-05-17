import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';

const UserDetails = (props) => {
    return(
        <div align="center">
            
            <table border="1" cellSpacing="0">
                <tr>
                    <th colSpan="2">USER DETAILS</th>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>{props.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{props.lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{props.password}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{props.phone}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{props.address}</td>
                </tr>
            </table>
                   
        </div>
    );
};

const mapStateToProps = state => {
    return{
        firstName: state.userDetailsPayload.firstName,
        lastName: state.userDetailsPayload.lastName,
        email: state.userDetailsPayload.email,
        password: state.userDetailsPayload.password,
        phone: state.userDetailsPayload.phone,
        address: state.userDetailsPayload.address
    };
};

export default connect(mapStateToProps)(UserDetails);
