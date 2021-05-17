import React from 'react';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/auth';

const EditUserDetails = (props) => {
    const dispatch = useDispatch();
    return(
        <div align="center">
            
            <table border="1" cellSpacing="0" width="50%">
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
                    <td><input type="text" id="phone" defaultValue={props.phone} size="45" /></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td><input type="text" id="address" defaultValue={props.address} size="45" /></td>
                </tr>
                <tr>
                    <td align="center" colSpan="2">
                        <Button onClick={()=>dispatch(actions.updateUserDetails({
                            id: props.id,
                            firstName: props.firstName,
                            lastName: props.lastName,
                            email: props.email,
                            password: props.password,
                            phone: document.getElementById('phone').value, 
                            address: document.getElementById('address').value}))} >Update</Button>
                    </td>
                </tr>
            </table>
                   
        </div>
    );
};

const mapStateToProps = state => {
    return{
        id: state.userDetailsPayload.id,
        firstName: state.userDetailsPayload.firstName,
        lastName: state.userDetailsPayload.lastName,
        email: state.userDetailsPayload.email,
        password: state.userDetailsPayload.password,
        phone: state.userDetailsPayload.phone,
        address: state.userDetailsPayload.address
    };
};

export default connect(mapStateToProps)(EditUserDetails);
