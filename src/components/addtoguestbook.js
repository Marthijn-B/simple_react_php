import React from 'react';
// material ui components
import Button from '@material-ui/core/Button';

// Import jQuery
import $ from 'jquery'


class AddToGuestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comment: ''
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // Send the form with AJAX
      $.ajax({
        data: this.state,
        type: 'POST',
        url: 'http://simple_react_php.localhost/api/add.php',
          success: function(data) {
          console.info(data)
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString())
        }
      })

  }

  render() {
    return (
      <form>
        <p>Enter your name:</p>
        <input
          className= 'field'
          title= 'Name'
          type='text'
          onChange={e => this.setState({ username: e.target.value })}
        />
        <p>Your comments:</p>
        <input
          className = 'field'
          title = 'Comment'
          type='text'
          onChange={e => this.setState({ comment: e.target.value })}
        />
        <br /><br />
        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}

export default AddToGuestBook;
