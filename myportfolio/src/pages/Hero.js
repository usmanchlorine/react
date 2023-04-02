import { SimpleGrid,Box,Flex,Text,Stack ,Image, Container} from '@chakra-ui/react'
import { mix } from 'framer-motion'
import React from 'react'

export default function Hero(props) {
    const themeStyle = {
      color: props.mode === 'light' ? 'black' : 'white',
     
      textDecoration: 'none',


  }

  const text_decor = {
      textDecoration: 'none',
  }
  return (
    <SimpleGrid columns={[1,2,2]} spacing='40px' margin={0} >
        <Box  height='80vh' style={{backgroundColor:'black'}} >
            <Flex justifyContent={'center'} alignItems={'center'} height={'100%'} >
                    <Image
                    
                      w={[300,400]}
                      src='/chlorine.png'
                      alt='Dan Abramov'
                    />
            
            </Flex>
        </Box>
        <Box height='80vh' style={themeStyle}>

            
            <Flex direction={'column'} justifyContent={'center'} height={'80%'} mx={4} >
            <Container maxW={'container.md'}>
                <Stack rowGap={[4,2,2]}>
                  <Text fontSize={['5xl','5xl','6xl']} letterSpacing={'1px'} fontFamily='fasthand'>Welcome To My World ! </Text>
                  <Text fontSize={['3xl','4xl']} letterSpacing={'1px'}>Lets Build Something Great</Text>
                  <Text fontSize={['2xl','lg','xl'] }>Sometimes it's the very people who no one imagines   anything of who do the things no one can imagine...</Text>
                </Stack>
                
              </Container>

            </Flex>
          

        </Box>
    </SimpleGrid>
  )
}
