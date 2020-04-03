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
      message: '',
      result: false
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
          //console.info(data)
          // TODO: save the data into the current state
          this.setState({
            message: data.message,
            result: data.result,
            data: data.data
          });
          console.log(this.state);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(status, err.toString())
        }
      })
  }

  handleDelete = (event) => {
    event.preventDefault();
    // console.log(this.state);
    // Send the form with AJAX
      $.ajax({
        // data: this.state,
        type: 'POST',
        url: 'http://simple_react_php.localhost/api/delete.php?id=30',
        success: function(data) {
          this.setState({
            message: data.message,
            result: data.result,
            error: data.error
          })
          // console.log(data);
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

  render() {
    const entries = this.state.data;
    return (
      <form>
        <p>View the guest book:</p>
        <Button variant="contained" color="primary" onClick={this.handleFormView}>
          View
        </Button>
        { entries &&
          <table>
            <tbody>
            <tr>
              <th>Username</th>
              <th>Comment</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {
              entries.map((item,i) =>
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.comment}</td>
                  <td>{item.created}</td>
                  <td><button title="Delete" onClick={this.handleDelete}>Delete</button></td>
                </tr>
              )
            }
            </tbody>
          </table>
        }
      </form>
    );
  }
}

export default ViewGuestBook;
