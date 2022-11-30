import { Box } from '@chakra-ui/react'
import React from 'react'
import { AppContext } from './Context'

export interface BtnProps {
    show: boolean
}

const CharacterCount:React.FC<BtnProps> = ({show}) => {
    const {text} = AppContext()

    if(!show){
        return null
    }
  return (
    <Box>
      Character Count: {text.length}
    </Box>
  )
}

export default CharacterCount
