import React, { useRef } from "react";
import PropTypes from "prop-types";
import useDrop from "../hooks/useDrop";

const DragItem = ({ children, heading, onDrop }) => {
  const dropRef = useRef();
  useDrop({
    ref: dropRef,
    onDrop,
  });
  return (
    <div className="container" ref={dropRef}>
      <h3 style={{ userSelect: "none" }}>{heading}</h3>
      <div className="body">{children}</div>
    </div>
  );
};

DragItem.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default DragItem;
