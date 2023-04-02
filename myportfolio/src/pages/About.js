import { SimpleGrid, Box, Flex, Text, Stack, Image,Center,CircularProgress, VStack,List,ListItem, Container} from '@chakra-ui/react'
import React from 'react'

export default function About(props) {
  const themeStyle = {
    color: props.mode === 'light' ? 'black' : 'white',

    textDecoration: 'none',


  }

  const circularLayout ={
    backgroundColor:props.mode === 'light' ? 'white' : 'black',
    color:'orange'
  }

  const text_decor = {
    textDecoration: 'none',
  }
  return (
    <Box backgroundImage={'/.png'}>
    <Container  maxW={['800px','1200px','1360px']} p={['6','12']}  >
    <SimpleGrid columns={[1, 1, 2]} spacing='40px' margin={2} >
      <Box height='80vh' style={themeStyle}>

        <Flex direction={'column'} justifyContent={'center'} height={'80%'} pl={['10px', '16px']} mx={10} >

          <Stack rowGap={[4, 2, 2]}>
            <Text fontSize={['5xl', '4xl', '5xl']} letterSpacing={'1px'} fontFamily='fasthand'>ABOUT ME </Text>
            <Text fontSize={['3xl', '3xl']} letterSpacing={'1px'}>I help business to Grow </Text>
            <Text fontSize={['2xl', 'lg', 'xl']}>Using My Web Development Skills My skill Set Includes </Text>
        
              <List>
                <ListItem>React JS</ListItem>
                <ListItem>Javascript</ListItem> 
                <ListItem>Python</ListItem> 
                <ListItem>Html 5</ListItem> 
                <ListItem>CSS 3 </ListItem> 
                <ListItem>Django </ListItem> 
                </List>
            
          </Stack>



        </Flex>

      </Box>
      <Box border={'black'} minHeight={'fit-content'} style={themeStyle} >
        <Text fontSize={['3xl', '3xl', '5xl']} align={'center'} display={'absolute'}>Skills</Text>
      
          
          <SimpleGrid columns={3} spacing={10} margin={4} minHeight={'fit-content'}>
            <Box >
              <VStack height={'100%'}>
              <Image src='/science.png' sizes={['20px','28px']} />
              <Text fontSize={['lg','xl']}>React</Text>
              <CircularProgress value={30} color='red.400' thickness={[12]} size={[20,28]} />
              </VStack>
            </Box>
            <Box >
            <VStack height={'100%'}>
              <Image src='/html-5.png' sizes={['20px','28px']} />
              <Text fontSize={['lg','xl']}>HTML</Text>
              <CircularProgress value={80} color='green.400' thickness={[12]} size={[20,28]} />
              </VStack>
            </Box>  <Box >
            <VStack height={'100%'}>
              <Image src='/css-3.png' sizes={['20px','28px']} />
              <Text fontSize={['lg','xl']}>CSS</Text>
              <CircularProgress value={70} color='teal.400' thickness={[12]} size={[20,28]} />
              </VStack>
            </Box>  <Box>
            <VStack height={'100%'}>
              <Image src='/js.png' sizes={['20px','28px']} />
              <Text fontSize={['lg','xl']}>JavaScipt</Text>
              <CircularProgress value={60} color='orange.400' thickness={[12]} size={[20,28]} />
              </VStack>
            </Box>  
            <Box >
            <VStack height={'100%'}>
              <Image src='/python.png' sizes={['20px','28px']} />
              <Text fontSize={['lg','xl']}>Python</Text>
              <CircularProgress value={70} color='blue.400' thickness={[12]} size={[20,28]} />
              </VStack>
            </Box>
            <VStack height={'100%'}>
              <Image src='/django.png' sizes={['20px','28px']} />
              <Text fontSize={['lg','xl']}>Django</Text>
              <CircularProgress value={50} color='pink.400' thickness={[12]} size={[20,28]} />
              </VStack>
            
          </SimpleGrid>
        

       
      </Box>

    </SimpleGrid>
    </Container>
    </Box>
  )
}
