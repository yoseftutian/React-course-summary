import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList() {
  const [modeIsVisible, setModeIsVisible] = useState(true);
  const [entereBody, setEntereBody] = useState("");
  const [enteredAuyhor, setEnteredAuyhor] = useState("");

  function hideModalHandler() {
    setModeIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEntereBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuyhor(event.target.value);
  }
  return (
    <>
      {modeIsVisible &&(
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) }

      <ul className={classes.posts}>
        <Post author={enteredAuyhor} body={entereBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}
