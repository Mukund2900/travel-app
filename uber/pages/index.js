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
      <ActionItmes>
        {/* header */}
        <Header>
          <UberLogo src =  'https://i.ibb.co/cyvcpfF/uberx.png'/>
        </Header>

        {/* actionbuttons */}
        <ActionButtons>a</ActionButtons>
        {/* inputButton */}
        <InputButton>i</InputButton>

      </ActionItmes>
    </Wrapper>
  )
}



const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
  
`



const ActionItmes = tw.div`
flex-1

`


const Header = tw.div`
flex-1

`

const ActionButtons = tw.div`
flex-1

`


const InputButton = tw.div`
flex-1

`
const UberLogo = tw.img`
flex-1

`