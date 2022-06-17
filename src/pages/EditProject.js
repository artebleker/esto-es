import React from 'react'
import Header from '../components/layout/Header'
import Form from '../components/project_form/Form'
import { useParams } from "react-router-dom";
const EditProject = () => {

  const { projectName } = useParams();
  
  return (
    <div>
        <Header pathName={'Edit project'}/>
        <Form project={projectName}/>
    </div>
  )
}

export default EditProject