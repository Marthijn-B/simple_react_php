import React from 'react';

// Import jQuery
import $ from 'jquery'

import AddToGuestBook from './addtoguestbook';
import ViewGuestBook from './viewguestbook';

 class Main extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       main_result : true,
       data: [],
       message: '',
       result: false
     };
   }

  updateMainResult = (toggle) => {
    console.log(toggle);
    this.setState ({
      main_result: toggle
    });
  }

  componentDidUpdate(prevProp) {
  if ((this.state.main_result === true)) {
    this.handleFormView();
    this.updateMainResult(false);
  }
}

  handleFormView = (event) => {
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

  handleDelete = (id) => {
    //event.preventDefault();
    console.log(id);
    // console.log(this.state);
    // Send the form with AJAX
      $.ajax({
        // data: this.state,
        type: 'POST',
        url: 'http://simple_react_php.localhost/api/delete.php?id='+id,
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

  render () {
    console.log("Main_result: ");
    console.log(this.state.main_result);
    return (
      <div>
        <AddToGuestBook
          result={this.state.main_result}
          update={this.updateMainResult}
        />
        <ViewGuestBook
          data={this.state.data}
          result={this.state.main_result}
          update={this.updateMainResult}
          handleFormView={this.handleFormView}
          delete={this.handleDelete}
        />
      </div>
    )
  }

}

export default Main;
