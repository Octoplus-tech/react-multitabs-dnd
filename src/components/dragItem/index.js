import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import useDrag from "../hooks/useDrag";
import "../../App.css";

const DragItem = ({ dragEffect, data, id }) => {
  const dragRef = useRef();
  const [classValue, setClassValue] = useState("grab");
  useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => setClassValue("grabbing"),
    onDragEnd: () => {
      setClassValue("grab");
    },
  });
  return (
    <div className={`item ${classValue}`} ref={dragRef}>
      {data.text}
    </div>
  );
};

DragItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  dragEffect: PropTypes.func,
};

export default DragItem;
