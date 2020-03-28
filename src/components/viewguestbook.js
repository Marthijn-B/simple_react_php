import React from 'react';
// material ui components
import Button from '@material-ui/core/Button';

// Import jQuery
import $ from 'jquery'


class ViewGuestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: ''
    };
  }

  handleFormView = (event) => {
    event.preventDefault();
    // console.log(this.state);
    // Send the form with AJAX
      $.ajax({
        data: this.state,
        type: 'POST',
        url: 'http://simple_react_php.localhost/api/view.php',
        success: function(data) {
          console.info(data)
          // TODO: save the data into the current state
          // this.setState({data: data})
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString())
        }
      })

  }

  render() {
    return (
      <form>
        <p>View the guest book:</p>
        <Button variant="contained" color="primary" onClick={this.handleFormView}>
          View
        </Button>
      </form>
    );
  }
}

export default ViewGuestBook;
