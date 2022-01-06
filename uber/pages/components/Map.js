import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoibXVrdW5kbXVuZGhyYSIsImEiOiJja3kxZWF4Z3cwYW8yMnZxdHlqZzB0cHp3In0.nI30uNOFyV2hU5ge9QGq_A';

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [78 , 15],
          zoom: 4
        });
      });
    return (
        <Wrapper id = 'map'></Wrapper>
    )
}

export default Map


const Wrapper = tw.div`
flex-1

`