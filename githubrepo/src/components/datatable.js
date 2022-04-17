import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import Link  from '@mui/material/Link'
import './components.css'
const datagridSx = {
  height:510,
  backgroundColor: "#283D4A",
    border: 5,
    borderRadius:0,
    borderColor: '#243742',
    '& .MuiDataGrid-cell':{
          width:10
    },
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main'},

    "& .MuiDataGrid-row": {
     color:"white",
     backgroundColor:"#2D4250",
     maxHeight: '1 !important',
     fontSize: 16
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#283D4A",
    color: "white",
    fontSize: 12,
  },
  "& .MUiDataGrid-CheckBox":
  {
    backgroundColor:"white"
  }

};



const columns = [
  { headerName:'Repo Name', width:200,height:120,renderCell: (cellValues) => {
    return <Link href={`${cellValues.row.html_url}`} target="_blank">{cellValues.row.name}</Link>;}},
  { field: 'description',headerName:'Description',width:620,height:120},
  { field: "owner.login",headerName:'Owner',width:200,height:120,renderCell: (cellValues) => {return <div>{cellValues.row.owner.login}</div>}},
  { field: 'stargazers_count',headerName:'Star Count',width:120,height:120},
  { field: 'forks_count',headerName:'Forks Count',width:120,height:120},
  { field: 'language',headerName:'Langauge',width:120,height:120},
  
];
export default function Datatable({data}) {
  const [pageSize, setPageSize] = React.useState(10);
  
  return (
   <div className='table'>
      <DataGrid
       getRowId={(row) => row.id}
        rows={data}
        columns={columns}
        sx={datagridSx}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 30]}
        pagination
        density='compact'
      />
      </div>
  );
}