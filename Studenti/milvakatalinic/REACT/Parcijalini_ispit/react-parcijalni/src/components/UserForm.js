import React from "react";
import PropTypes from "prop-types";
class UserForm extends React.Component {
  state = { userName: "" };

  handleUserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName }); //azuriranje lokalnog stanje
  };

  handleUserSelected = (event) => {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;

    if (!userName.trim()) {
      alert("Please enter user name");
    }
    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <form onSubmit={this.handleUserSelected}>
        <div style={styles.container}>
          <label htmlFor="name" style={styles.label}>
            Github username:
          </label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="e.g. facebook"
            value={userName}
            onChange={this.handleUserChange}
            autoFocus
            style={styles.input}
          />
          <button
            style={styles.button}
            onClick={this.handleUserSelected}
            type="submit"
          >
            GO!
          </button>
        </div>
      </form>
    );
  }
}
export default UserForm;

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    margineTop: 10,
    width: "100%",
    boxSizing: "border-box", //poravnao je input sa go boksom
  },
  button: {
    margineTop: 20,
    width: "100%",
  },
};
