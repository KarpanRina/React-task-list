import React from 'react';
import { useState } from "react";
import img from '../../icon/change.png';
import ModalWind from './Modal/ModalWind';

const Item = ({ id, title, time, status, isHidden, setTasks, tasks }) => {
  const [checked, setChecked] = useState(status);
  const [isModal, setIsModal] = useState(false)
  const classes = ["todo"];
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const style = isHidden ? {display: 'none'} : {};

  if (checked) {
    classes.push("status");
  }

  const updateStates = () => {
    setChecked(!checked);
    setTasks((prev) => {
      let newArr = [...prev];
      newArr.map((el) => {
        if (el.id === id) {
          el.status = !checked;
        }
      });
      return newArr;
    });
  };

  const changeTask = (e) => {
    if (e.key === 'Enter' && editedTitle) {
      setTasks((prev) => {
        return prev.map((el) => {
          if (el.id === id) {
            return { ...el, title: editedTitle };
          }
          return el;
        });
      });
      setIsEditing(false);
    }
  };

  const toggleEdit = () => {
    setIsEditing(true);
  };
  
  const removeTask = () => {
    setTasks(tasks.filter((el) => el.id !== id))
  }

  return (
    <li className={classes.join(" ")} style={style}>
      {isModal && <ModalWind call={isModal} setIsModal={setIsModal} removeTask={removeTask}/>}
      <label>
        <input type="checkbox" checked={checked} onChange={updateStates} />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={changeTask}
             className='input-field'
          />
        ) : (
          <span>{title}</span>
        )}
      </label>
      <i className="time">{time}</i>
      <img
        src={img}
        onClick={toggleEdit}
        alt="Edit"
        style={{ cursor: "pointer" }}
      />
      <i className="material-icons red-text" onClick={() => setIsModal(true)}>X</i>
    </li>
  );
};

export default Item;
