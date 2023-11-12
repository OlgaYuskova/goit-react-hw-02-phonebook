import { Component } from 'react';


class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = (evt) => {
    this.setState({ name: evt.target.value });
  };

  handleChangeNuber = (evt) => {
    this.setState({ number: evt.target.value });
  };

  handleSubmitContact = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state)

       this.setState({
      name: '',
         number: '',

    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmitContact}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={this.handleChangeName}
          name="name"
          placeholder="Name"
        />

        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="tel"
          value={number}
          onChange={this.handleChangeNuber}
          name="number"
          placeholder="123-123-1234"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default InputForm;