import React from 'react'
import PortadaFoto from '../portadafoto/PortadaFoto'
import PortadaInfo from '../portadainfo/PortadaInfo'
import "./Main.css"
const Main = () => {
  return (
    <main className='main'>
      <PortadaInfo/>
      <PortadaFoto/>
    </main>
  )
}

export default Main
