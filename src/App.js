import React from 'react';
import './App.css'
// import CollectionCard from './Components/CollectionCard'
import Header from './Components/Header.js'
import { useState, useEffect } from 'react'
import Punklist from './Components/Punklist.js'
import Main from './Components/Main.js'
import axios from 'axios';


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(3)


  useEffect(() => {
    const getMyNfts = async () => {
     const openseaData = await axios.get(
     'https://testnets-api.opensea.io/assets?asset_contract_address=0xB5E5803e373EE1102dd9ee4CE10b701c96328018&order_direction=asc'
     )
    console.log(openseaData.data.assets)
    setPunkListData(openseaData.data.assets)
    } 

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
        <Header />        
        {punkListData.length > 0 && (
        <>  
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist 
            punkListData={punkListData} 
            setSelectedPunk={setSelectedPunk} 
          />
        </>
        )}                
    </div>
  )
}

export default App;