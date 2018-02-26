import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WrappedForm extends React.Component {
    state = {    
        title: '',
        author: '',
        content: ''
    }

  render() {
    return (
      <Form>
        <FormGroup>
          
            <Input 
                type="title" 
                name="title" 
                id="title" 
                placeholder="Title" 
                onChange={ (e) => this.setState( { title: e.target.value } ) }
            />
            <Label 
                for="title"
            >Title</Label>

            <Input 
                type="author" 
                name="author" 
                id="author" 
                placeholder="Author" 
            />
            <Label 
                for="author"
            >Author</Label>

            <Input 
                type="content" 
                name="content" 
                id="content" 
                placeholder="Type here..." 
            />
            <Label 
                for="content"
            >Write your message</Label>

        </FormGroup>
        <Button onClick={ () => this.logit() }>Submit</Button>
      </Form>
    );
  }
}

export default WrappedForm