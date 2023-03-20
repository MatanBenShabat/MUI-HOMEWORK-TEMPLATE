import { Box, useTheme } from '@mui/material'
import React from 'react'

interface ContainerProps {
    children: any
}

const Container: React.FC<ContainerProps> = ({children}) => {
    const theme = useTheme()
  return (
    <Box sx={{ backgroundColor: theme.colors.background, pb:"2vh"}}>{children}</Box>
  )
}

export default Container