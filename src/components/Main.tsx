import React from "react";
import CreatePost from "./CreatePost";
import Feed from "./Feed";

export default function Main() {
  return (
    <main className="wrapper">
      <CreatePost />
      <Feed />
    </main>
  );
}
