import React, { Component } from 'react'
import { Container, Col, InputGroup, Form, Row, Dropdown } from "react-bootstrap";
import { Editor } from '@tinymce/tinymce-react';

class PageEditor extends Component {
    constructor(props) {
        super(props);
    }

    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }
    render() {
        return (
            <Col>
                <Editor
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount importcss'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | link | preview | insertfile | image | imageoptions | editimage | insertfile |help '
                    }}
                    onEditorChange={this.handleEditorChange}
                />

            </Col>
        );
    }
}
export default PageEditor