import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { ChartContext } from "../context/ChartContext";

import Header from './Header';
import { Pagination } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'balance',
    headerName: 'balance',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'name',
    width: 110,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'age',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'eyeColor',
    headerName: 'eyeColor',
    width: 110,
    editable: true,
  },
  {
    field: 'gender',
    headerName: 'gender',
    width: 110,
    editable: true,
  }
];



export default function CustomTable({rows}) {
  const [context, setContext] = useContext(ChartContext);
  const [selectionModel, setSelectionModel] =  useState([]);

  const pageSize = 50; 

  const onRowsSelectionHandler = (ids) => {
    setSelectionModel(ids);
    let selectedname= [];
    let selectedage=[];
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    selectedRowsData.forEach((element, index) => {
        selectedage.push(element.age);
       selectedname.push(element.name);
    });

    setContext({
      name:selectedname,
      age:selectedage
    })
  };

  useEffect(()=>{
    let name= [];
    let age=[];
    let defaultSelected = [];
    
	const slicedArray = rows.slice(0, 5);
	
    slicedArray.forEach((element, index) => {  
         if(index<5){
          defaultSelected.push(element.id);
          age.push(element.age);
          name.push(element.name);
         }
    });

    // console.log('defaultSelected--', defaultSelected);
    // console.log('age', age);
    // console.log('name',name);

    setSelectionModel(defaultSelected);
    setContext({
      name:name,
      age:age
    })
  },[])



  return (
    <>
    <Box sx={{ height: 400,  marginTop:"10px", marginX:"auto" }}>
    <DataGrid
        rowHeight={40}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20, 50,100]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        rowSelectionModel={selectionModel}
      />
    </Box>
    </>
  );
}