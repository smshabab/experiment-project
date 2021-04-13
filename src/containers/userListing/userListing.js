import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';

const userListing = (props) => {
    let usersList;
    for(let i=0; i<props.ulp.length; i++){
        usersList+= <Row><Col>{props.ulp[i].email}</Col></Row>;
    }
    return(
        <Container>
            <Row>
                <Col>
                    USERS LIST
                </Col>
            </Row>
            {usersList}
        </Container>
    );
};

const mapStateToProps = state => {
    return{
        ulp : state.userListingPayload
    };
};

export default connect(mapStateToProps)(userListing);