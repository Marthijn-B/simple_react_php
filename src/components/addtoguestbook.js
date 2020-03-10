import React from 'react';
// material ui components
import Button from '@material-ui/core/Button';


class AddToGuestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comment: ''
    };
  }
  myChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  myChangeComment = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  render() {
    return (
      <form>
        <p>Enter your name: {this.state.username}</p>
        <input
          type='text'
          onChange={this.myChangeUsername}
        />
        <p>Your comments: {this.state.comment}</p>
        <input
          type='text'
          onChange={this.myChangeComment}
        />
        <br /><br />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
  }
}

export default AddToGuestBook;
