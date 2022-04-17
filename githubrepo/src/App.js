import Table from './components/datatable'
import Footer from './components/footer'
import Header from './components/header.js'
import React  from 'react';
import {useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setTableData] = useState([]);
  console.log(data)
  const [q, setQ] = useState('');
  function getq(q)
  {
    console.log(q)
    setQ(q);
  }
  function search(rows) {
    return rows.filter((row) =>
            row.name.toLowerCase().indexOf(q) > -1)
  }
  useEffect(() => {
    axios
       .get('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc')
       .then(response=>{
         setTableData(response.data.items)
        console.log(response.data)
       
       })
       .catch(error=>{
         console.log(error)
       })
      
     
  
  }, [])
  
  return (
    <div >
    <Header fun={getq}/>
     <Table data={search(data)}/>
     <Footer/>
    </div>
  );
}

export default App;
