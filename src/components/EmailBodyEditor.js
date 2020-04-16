import React, { Component } from 'react'
import { Container, Col, InputGroup, Form, Row, Dropdown } from "react-bootstrap";
import EmailEditor from 'react-email-editor'

class EmailBodyEditor extends Component {
    constructor(props) {
        super(props);
    }

    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }
    render() {
        return (
            <Col>
                <EmailEditor
                    ref={editor => this.editor = editor}
                />

            </Col>
        );
    }
}
export default EmailBodyEditor