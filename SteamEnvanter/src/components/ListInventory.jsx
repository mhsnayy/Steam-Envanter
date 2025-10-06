import React, { useEffect } from 'react'
import Inventory from './Inventory'

function ListInventory({inventory}) {
   useEffect(()=>{

      console.log("Dönen Data: ",inventory)

  },[inventory])


  return (
    <>
      <div>

        {
          inventory && inventory.map((inventor) => (
            <Inventory key={inventor.assetid} inventor={inventor}/>
          ))
        }

      </div>
    </>
  )
}

export default ListInventory