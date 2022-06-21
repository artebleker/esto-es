 import React from 'react'
import Header from '../components/layout/Header'
import ProjectTable from '../components/project_table/ProjectTable'
import SearchArea from '../components/search/SearchArea'
 
 const MyProjects = () => {
   return (
     <main>
        <Header pathName={'My projects'}/>
      <SearchArea/>
        <ProjectTable/>
     </main>
   )
 }
 
 export default MyProjects