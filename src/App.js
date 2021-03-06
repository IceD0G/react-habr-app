import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import FirstNameField from './FirstNameField'
import LastNameField from './LastNameField'


class SimpleForm extends React.Component {

  state = {
    firsName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: ''
  }

  validateName = (name) => {
    const regex = /[A-Za-z]{3,}/
    return !regex.test(name)
      ? "The name and last name must contain at least three letters. Numbers and special characters are not allowed."
      : "";
  }

  onFirstNameBlur = () => {
    const { firstName } = this.state
    const firstNameError = this.validateName(firstName)
    return this.setState({ firstNameError })
  }

  onLastNameBlur = () => {
    const { lastName } = this.state
    const lastNameError = this.validateName(lastName)
    return this.setState({ lastNameError })
  }

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    })

  onLastNameChange = event =>
    this.setState({
      lastName: event.target.value
    })

  render() {

    const { firstNameError, firstName, lastName, lastNameError } = this.state;

    return (
      <div>
        <FirstNameField onChange={this.onFirstNameChange}
          onBlur={this.onFirstNameBlur}
          error={firstNameError} />

        <LastNameField onChange={this.onLastNameChange}
          onBlur={this.onLastNameBlur}
          error={lastNameError} />
        <Greetings firstName={firstName} lastName={lastName} />
      </div>
    );
  }
}

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="welcome">
        <Greetings firstName="Roma" lastName="Loshak" age='21' />
      </div>
      <div className="">
        <SimpleForm />
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </header>
  </div>
)

export default App;
