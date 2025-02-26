import classes from "./Modal.module.css";

export default function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}
