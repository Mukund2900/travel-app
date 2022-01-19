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
                <PlusIcon src ="https://img.icons8.com/ios/50/000000/plus-math.png" />
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
 bg-white flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full ml-3
`