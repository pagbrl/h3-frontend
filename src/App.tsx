import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pages from "./components/Pages";
import { getNotionPages } from "./api";
import { NotionPages, User } from "./decl";
import Login from "./components/Login";
import "antd/dist/antd.css";

export type AppState = {
  pages: NotionPages;
  user: User | undefined;
};

class App extends React.Component<{}, AppState> {
  state = {
    pages: [],
    user: undefined,
  };

  fetchPages = async () => {
    const notionPages = await getNotionPages();
    this.setState({ pages: notionPages });
  };

  componentDidMount() {
    this.fetchPages();
  }

  render() {
    const { pages, user } = this.state;
    return (
      <div className="App">
        <Login
          onSuccess={(user) => {
            this.setState({ user: user });
          }}
        />
        <Pages pages={pages} user={user} />
      </div>
    );
  }
}

export default App;
