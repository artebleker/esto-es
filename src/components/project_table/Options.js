import React, { useState, useContext } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiEditBoxLine, RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
const Options = (props) => {
  const dataContext = useContext(DataContext);

  const [option, setOption] = useState(false);

  const handleButton = () => {
    setOption(!option);
  };
 

  const deleteOk = () => {
   
    alert("hola");
    // dataContext.deleteProject('hola')
  };
  return (
    <>
      <button className="action" onClick={handleButton}>
        <HiDotsVertical />
      </button>
      {option === true && (
        <div className="project-options">
          <Link to={`/edit-project/${props.name}`} project={props.name}>
            <RiEditBoxLine />
            &nbsp; Edit
          </Link>
          <button onClick={deleteOk}>
            <RiDeleteBin7Line />
            &nbsp; Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Options;
