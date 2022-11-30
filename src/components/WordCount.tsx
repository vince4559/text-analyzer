import React from 'react'
import { AppContext } from './Context'
import { BtnProps } from './CharacterCount'
import { Box } from '@chakra-ui/react'

const WordCount:React.FC<BtnProps> = ({show}) => {
    const { text } = AppContext()
    if(!show){
      return null
    }
  return (
    <Box>
     Word Count:   {text.split(' ').length}
    </Box>
  )
}

export default WordCount
