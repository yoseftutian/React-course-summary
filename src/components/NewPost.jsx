import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
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
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="submit">Add Post</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
