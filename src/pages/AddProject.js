import React from 'react'
import Header from '../components/layout/Header'
import Form from '../components/project_form/Form'

const AddProject = () => {
  return (
    <div>
        <Header pathName={'Add project'}/>
        <Form project={null}/>
    </div>
  )
}

export default AddProject