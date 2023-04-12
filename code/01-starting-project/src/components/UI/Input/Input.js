import React, { useRef, useEffect, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const focusComp = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focusComp,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
