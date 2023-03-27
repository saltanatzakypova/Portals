import React from "react";

import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverLay = ({title, message, onConfirm}) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay
          title={title}
          message={message}
          onConfirm={onConfirm}
        ></ModalOverLay>,
        document.getElementById("overlary-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
