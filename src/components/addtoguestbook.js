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
      comment: '',
      message: '',
      result: false
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    // Send the form with AJAX
      $.ajax({
        data: this.state,
        type: 'POST',
        url: 'http://simple_react_php.localhost/api/add.php',
        success: function(data) {
          this.setState({
            message: data.message,
            result: data.result
          })
          // console.log(this.state);
          if (data.result) {
            this.setState ({
              username: '',
              comment: ''
            })
          }

        }.bind(this),
        error: function(xhr, status, err) {
          console.error(status, err.toString())
        }
      })
  }

  componentDidMount() {
    if (this.state.result) {
      console.log("here");
      this.setState ({
        username: '',
        comment: ''
      })
    }
  }

  render() {
    const message = this.state.message;
    const result = this.state.result;
    return (
      <form>
        { message &&
          <h3>
            {message}
          </h3>
        }
        <p>Enter your name:</p>
        <input
          className= 'field'
          title= 'Name'
          type='text'
          value={this.state.username}
          onChange={e => this.setState({ username: e.target.value })}
        />
        <p>Your comments:</p>
        <input
          className = 'field'
          title = 'Comment'
          type='text'
          value={this.state.comment}
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
