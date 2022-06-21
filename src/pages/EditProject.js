import React from 'react'
import Header from '../components/layout/Header'
import FormEdit from '../components/project_form/FormEdit'
import { useParams } from "react-router-dom";
const EditProject = () => {

  const { ProjectName } = useParams();
  
  return (
    <div>
        <Header pathName={'Edit project'}/>
        <FormEdit project={ProjectName}/>
    </div>
  )
}

export default EditProject