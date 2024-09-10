import React from 'react'
import GraphCanvas from './components/GraphCanvas'
import FlowChart from './components/FlowChart'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import CartCampaign from './components/CartCampaign'

const App = () => {
  return (
    <>
    
    <Sidebar />
    <Header />
    <CartCampaign/>
    <FlowChart/>
    </>
  )
}

export default App