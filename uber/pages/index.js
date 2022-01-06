import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from './components/Map';
import Link from 'next/link';    

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
          <UberLogo src =  'https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg'/>
          <Profile>
            <Name>Uber Profile
            </Name>
            <UserImage src ='https://lh3.googleusercontent.com/a-/AOh14GiD9MBH2IcIdXX8uw40dBSdCkjbAbabGqJPsXaE=s96-c'/>
          </Profile>
        </Header>

        {/* actionbuttons */}
        <ActionButtons>
          <Link href = '/search'>
          <ActionButton>

            <ActionButtonImage src= 'https://i.ibb.co/cyvcpfF/uberx.png'/>Ride</ActionButton>
          </Link>
          <ActionButton>
          <ActionButtonImage  src = 'https://i.ibb.co/n776JLm/bike.png'/>Wheels</ActionButton>

          <ActionButton>
          <ActionButtonImage  src = 'https://i.ibb.co/5RjchBg/uberschedule.png'/>Reserve</ActionButton>

          
        </ActionButtons>
        {/* inputButton */}
        <InputButton>Where to?</InputButton>

      </ActionItmes>
    </Wrapper>
  )
}



const Wrapper = tw.div`
  flex flex-col h-screen
  
`



const ActionItmes = tw.div`
flex-1 p-4

`


const Header = tw.div`
flex justify-between items-center

`




const UberLogo = tw.img`
h-28

`

const Profile = tw.div`
flex items-center

`

const Name = tw.div`
mr-4 w-20 text-sm

`

const UserImage = tw.img`
h-14 w-14 rounded-full border border-gray-200 p-px

`


const ActionButtons = tw.div`
flex

`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`