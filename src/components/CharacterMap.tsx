import { AppContext } from './Context'
import { BtnProps } from './CharacterCount'
import { Box, } from '@chakra-ui/react';
import { memo } from 'react';



function items(text:string){
    const letters = text.split('')
    .filter(c => c !==' ')
    .reduce((collection:any, item:string) => {
        const letter = item.toLocaleLowerCase();
        return{
            ...collection,
            [item]: (collection[letter] ||0) + 1
        }
    }, {})
    return Object.entries(letters)
    .sort((a:any,b:any) => b[1] - a[1])
}

const CharacterMap:React.FC<BtnProps> = ({show}) => {
    const {text} = AppContext()
    if(!show){
        return null
    }
  return (
   <Box>
    Character Map:{
        items(text).map(txt => (
            <Box key={txt[0]}>
                <>
                {txt[0]}:{txt[1]}
                </>
            </Box>
        ))}
   </Box>
  )
}

export default memo( CharacterMap)
