import React, { useEffect } from 'react'
import { Card } from '@mui/material'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

function Inventory({inventory}) {
  useEffect(()=>{

      console.log("Dönen Data: ",inventory)

  },[inventory])


  return (
    <>
    <Card>
      <CardMedia/>
      
    </Card>
    
    </>
  )
}

export default Inventory