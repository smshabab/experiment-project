import React from 'react';
import { Button } from 'react-bootstrap';

const button = (props) => {
    return(<Button variant={props.variant}>{props.label}</Button>);
};

export default button;