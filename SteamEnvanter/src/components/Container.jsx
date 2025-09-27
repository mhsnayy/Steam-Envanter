import React from 'react'
import Container from '@mui/material/Container';

function container({children}) {
  return (
    <div>
        <Container maxWidth="lg">
        {children}
        </Container>
    </div>
  )
}

export default container