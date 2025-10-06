import React from 'react'
import { Card } from '@mui/material'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

function Inventory({inventor}) {
 console.log("Envanter:" ,inventor)
  return (
    <>
    <Card>
      <CardMedia/>
      <CardContent>
        <Typography>{inventor.assetid}</Typography>
      </CardContent>
    </Card>
    
    </>
  )
}

export default Inventory