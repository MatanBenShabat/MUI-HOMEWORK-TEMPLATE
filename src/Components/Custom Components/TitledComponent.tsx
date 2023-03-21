import React from 'react'
import { Grid, Paper } from "@mui/material";
import Title from './Title';
import { TitledComponentProps } from '../../types';



const TitledComponent: React.FC<TitledComponentProps> = ({xs, title, children, minHeight}) => {
  return (
    <Grid item xs={xs}>
      <Paper sx={{minHeight: minHeight}}>
        <Title title={title}/>
        {children}
      </Paper>
    </Grid>
  )
}

export default TitledComponent