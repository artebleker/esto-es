 import React from 'react'
import Header from '../components/layout/Header'
import ProjectTableSearch from '../components/search/ProjectTableSearch'
 
 const SearchPage = () => {
   return (
     <main>
        <Header pathName={'Search results'}/>
        <ProjectTableSearch/>
     </main>
   )
 }
 
 export default SearchPage