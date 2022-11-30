import { Box, Button, HStack, Tabs } from '@chakra-ui/react'
import { useReducer } from 'react'
import CharacterCount from './CharacterCount'
import CharacterMap from './CharacterMap'
import WordCount from './WordCount'


interface ActionProps{
    characterCount: boolean
    wordCount: boolean
    characterMap:boolean
}
const reducer = (state:any, action:any) => {
    return {
        ...state,
        [action]: !state[action]
    }
}

const TextInformation = () => {
    const [state, dispatch] = useReducer(reducer, {
        characterCount:true,
        wordCount:true,
        characterMap: true
    } as ActionProps)
  return (
    <Box>
        <HStack w={'100%'} wrap='wrap'>
        <Button onClick={() => dispatch("characterCount")}>Character Count</Button>
        <Button onClick={() => dispatch("wordCount")}>Word Count</Button>
        <Button onClick={() => dispatch("characterMap")}>Character Map</Button>
        </HStack>
        <CharacterCount show={state.characterCount} />
        <WordCount show={state.wordCount} />
        <CharacterMap show={state.characterMap} />
    </Box>
  )
}

export default TextInformation
