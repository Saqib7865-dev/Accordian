import React, { useState } from "react";
import "./style.css";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(id) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);
    findIndexOfCurrentId === -1
      ? copyMultiple.push(id)
      : copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection ? (
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : (
                    null
                  )
                ) : selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : (
                  null
                )}
              </div>
            );
          })
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
