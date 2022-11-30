import {VStack, FormControl, FormLabel, Textarea  } from "@chakra-ui/react"
import { AppContext } from "./components/Context"
import TextInformation from "./components/TextInformation";



function App() {
const{ text, setText} = AppContext()
console.log(text);

 
   return ( 
    <VStack p={'3rem'}>
      <FormControl >
        <FormLabel>Add your text here</FormLabel>
        <Textarea   name={text}
        onChange={(e)=>setText(e.target.value)}
        />
      </FormControl>
      <TextInformation />
    </VStack>
  )
}

export default App
