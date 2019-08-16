import React from 'react';
import { observer } from "mobx-react";
import { Accordion, Card, Form, FormGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { Label, Input } from "reactstrap";

const EditHobby = observer((props) => {

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
                Hobby
                                </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
                <Card.Body className="card-body">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
        </Card>
    )

});

export default EditHobby;