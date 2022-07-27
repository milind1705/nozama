import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BillingComponent from '../packages/components/BillingComponent'
import BillingOutput from '../packages/components/BillingOutput'
export default function Home() {
  const [items, setItems] = useState([])
  console.log(items)
  return (
    <div className=' h-full w-full' >
    <div className='w-full text-center mt-8'>
      <h1 className='text-green text-7xl'>NOZOMA</h1>
    </div>
     <BillingComponent items={items} setItems={setItems}/>
     <BillingOutput items={items}/>
    </div>
  )
}
