import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
export default function Home() {

  // const map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //   center:, 
  //   zoom:  
  //   });
  return (
    <Wrapper>
      {/* Basic */}
      <Map />
      <ActionItmes>Dash</ActionItmes>
    </Wrapper>
  )
}



const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
  
`



const ActionItmes = tw.div`
flex-1

`