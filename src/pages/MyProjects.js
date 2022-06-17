 import React from 'react'
import Header from '../components/layout/Header'
import ProjectTable from '../components/project_table/ProjectTable'
 
 const MyProjects = () => {
   return (
     <main>
        <Header pathName={'My projects'}/>
        <ProjectTable/>
     </main>
   )
 }
 
 export default MyProjects