import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const input = (props) => {
    return(
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
    );
};

export default input;
