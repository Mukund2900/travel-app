import Link from 'next/link'
import React from 'react'

import tw from 'tailwind-styled-components'

const Search = () => {
    return (
        <Wrapper>
            <ButtonContainer>
                
            <Link href = '/'>   
                <BackButton src ='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>


            <InputContainer>
                <FromToIcons>

                </FromToIcons>

                <InputBoxes>
                    <Input placeholder= 'Enter Pickup Location'/>
                    <Input placeholder = 'Where To?'/>
                </InputBoxes>
            </InputContainer>

        </Wrapper>
    )
}

export default Search


const Wrapper = tw.div`
bg-gray-200 h-screen
`


const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
`

const InputContainer = tw.div`
 bg-white flex
`

const FromToIcons = tw.div`
w-10
`

const InputBoxes = tw.div`

`

const Input = tw.input`
h-10 bg-gray-200
`