import Modal from "antd/lib/modal/Modal";
import React from "react";
import { postLogin } from "../api";
import { User } from "../decl";

export type LoginProps = {
  onSuccess: (user: User) => void;
};

export type LoginState = {
  username: string;
  email: string;
  isModalVisible: boolean;
};

class Login extends React.Component<LoginProps, LoginState> {
  state = {
    username: "",
    email: "",
    isModalVisible: true,
  };

  handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, username } = this.state;

    try {
      const loggedUser = await postLogin({ email, username });
      this.props.onSuccess(loggedUser);
      this.setState({ isModalVisible: false });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { username, email, isModalVisible } = this.state;

    return (
      <Modal title="Login" visible={isModalVisible} footer={null}>
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
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />

          <input type="submit" value="Envoyer" />
        </form>
      </Modal>
    );
  }
}

export default Login;
