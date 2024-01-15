import React, { useContext, useState } from 'react'

import rows from '../data/samplen.json'
import CustomTable from '../components/CustomTable';
import { ChartContext } from '../context/ChartContext';
import Plots from '../components/Plot'; 

const Chart = () => {
      const [context, setContext] = useState({
        name:[],
        age:[]
        });

  return (
    
    <div style={{textAlign:"center",  margin:"10px"}}>
        <ChartContext.Provider value={[context,setContext]}> 
		<h3>Analytics Demo</h3>
        <CustomTable rows={rows}/>
        <Plots/>
        </ChartContext.Provider>
    </div>
  )
}

export default Chart