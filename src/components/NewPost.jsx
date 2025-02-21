import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [entereBody, setEntereBody] = useState("");
  function changeBodyHadler(event) {
    setEntereBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHadler} />
      </p>
      <p>{entereBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
