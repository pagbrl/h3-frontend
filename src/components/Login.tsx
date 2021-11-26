import React from "react";
import { postLogin } from "../api";
import { User } from "../decl";

export type LoginProps = {
  onSuccess: (user: User) => void;
}

class Login extends React.Component<LoginProps, User> {
  state = {
    username: "",
    email: "",
  };

  handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const loggedUser = await postLogin(this.state);
      this.props.onSuccess(loggedUser);
    } catch (error) {
      alert(error);
    }

  }

  render() {
    const { username, email } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => this.setState({ username: event.target.value })}
        />

        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default Login;
