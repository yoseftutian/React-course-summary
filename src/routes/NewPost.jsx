import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }) {
  const [entereBody, setEntereBody] = useState("");
  const [enteredAuyhor, setEnteredAuyhor] = useState("");

  function bodyChangeHandler(event) {
    setEntereBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuyhor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: entereBody,
      author: enteredAuyhor,
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
