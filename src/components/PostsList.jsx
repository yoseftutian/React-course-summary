import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList() {
  const [entereBody, setEntereBody] = useState("");
  const [enteredAuyhor, setEnteredAuyhor] = useState("");

  function bodyChangeHandler(event) {
    setEntereBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuyhor(event.target.value);
  }
  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuyhor} body={entereBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}
