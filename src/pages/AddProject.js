import React from 'react'
import Header from '../components/layout/Header'
import FormAdd from '../components/project_form/FormAdd'

const AddProject = () => {
  return (
    <div>
        <Header pathName={'Add project'}/>
        <FormAdd/>
    </div>
  )
}

export default AddProject