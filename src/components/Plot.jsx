import React, { useContext } from 'react'
import Plot from 'react-plotly.js';
import { ChartContext } from '../context/ChartContext';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Plots = () => {
      const [context, setContext] = useContext(ChartContext);

      const data = [
        {
          type: 'bar',
          x: context.name,
          y: context.age,
        },
      ];
    
      const layout = {
        title: 'Age comparison',
        xaxis: { title: 'name' },
        yaxis: { title: 'age' },
      }; 

  return (
	  <Box md={{ flexGrow: 1 }}>
		  <Grid container spacing={2}>
			<Grid item xs={12} md={6}> 
			<div>
				{(context.name?.length !== 0 || context.age?.length !== 0 ) ? <Plot
				data={data}
				layout={layout}
				config={{ displayModeBar: false }}
				style={{width: "100%", height: "100%"}}
				/>: null }
			</div>
			</Grid>
		  </Grid>
		</Box>
  )
}

export default Plots