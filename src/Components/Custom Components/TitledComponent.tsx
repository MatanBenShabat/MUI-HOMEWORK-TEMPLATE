import React from 'react'
import { Grid, Paper } from "@mui/material";
import Title from './Title';


interface TitledComponentProps {
    xs: number
    title:string
    children: any
    height?: string
}


const TitledComponent: React.FC<TitledComponentProps> = ({xs, title, children, height}) => {
  return (
    <Grid item xs={xs}>
      <Paper sx={{height: height}}>
        <Title title={title}/>
        {children}
      </Paper>
    </Grid>
  )
}

export default TitledComponent