import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


function grid() {
  return (
    
    <>
    
    <Box sx={{ flexGrow: 1}}>
      <Grid container
            direction="row"
            sx={{
                justifyContent: "space-around",
                alignItems: "stretch",
            }}>
        <Grid size={{ xs: 6, md: 12 }} >
          <Item>Steam Envanter Listeleme</Item>
        </Grid>

        
        
      </Grid>
    </Box>
    </>

  )
}

export default grid