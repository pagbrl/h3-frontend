import { userInfo } from "os";
import React from "react";
import { NotionPage, NotionPages, User } from "../decl";

export type PagesProps = {
  pages: NotionPages;
  user: User | undefined;
};

class Pages extends React.Component<PagesProps> {
  render() {
    const { pages, user } = this.props;
    return (
      <div>
        <div> {user?.username} </div>
        {pages.map((page: NotionPage) => (
          <div key={page.id}>{page.title}</div>
        ))}
      </div>
    );
  }
}

export default Pages;
