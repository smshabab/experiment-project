import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {connect, useSelector} from 'react-redux';
import * as Actions from '../../store/actions/auth';
import {userSelector, useDispatch} from 'react-redux';
import { v4 as uuid_v4 } from "uuid";

const UserListing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {dispatch({type: "FETCH_DATA"});}

    const data = useSelector((state)=> {
        return state.userListingPayload;
    });


    const userlist = Object.keys(data).map((key) => (<Row key={uuid_v4()}><Col>{data[key].email}</Col></Row>));
   
    return(
        <Container>
            <Row>
                <Col>
                    USERS LIST
                </Col><br/>
            </Row>
            {userlist}
        </Container>
    );
   
};



export default UserListing;