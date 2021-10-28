import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please enter a valid title');
    }
  }

  render() {
    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
        <input
        className='input-text'
        type='text'
        placeholder='Add Todo...'
        value={this.state.title}
        name={'title'}
        onChange={this.onChange}
        />
        <button className='input-submit'>Submit</button>
      </form>
    );
  }
}

export default InputTodo;