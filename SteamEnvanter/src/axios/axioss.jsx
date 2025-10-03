// axioss.jsx
import React, { useEffect } from 'react'
import axios from 'axios'

function Axioss() {   // PascalCase!
  const url = '/steam/inventory/76561198209974377/730/2?l=english&count=100'

  const getInventory = async () => {
    const res = await axios.get(url)
    console.log(res.data)
  }

  useEffect(() => { getInventory() }, [])
  return <div>axioss</div>
}

export default Axioss
