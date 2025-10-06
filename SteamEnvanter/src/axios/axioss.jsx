import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListInventory from '../components/ListInventory';

function Axioss({ submittedData }) {
  const [inventory, setInventory] = useState(null); 
  const url = '/steam/inventory/76561198209974377/730/2?l=english&count=100';

  const getInventory = async () => {
      try {
        const res = await axios.get(url);
        console.log('submittedData:', submittedData);
        
        setInventory(res.data.assets); 
        console.log('response:', res.data.assets);
      } catch (err) {
        console.error('Axioss error:', err);
      }
    };
    
  useEffect(() => {
    if (!submittedData) return; // ❗ butona basılmadan çalışmasın

    

    getInventory();
  }, [submittedData]); // ✨ sadece submittedData değişince çağır

  return (
    <>
      {inventory && <ListInventory inventory={inventory} />}
    </>
  );
}

export default Axioss;
