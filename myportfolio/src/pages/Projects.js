import Card from "./Card";
import { SimpleGrid,Box,Container,Text } from "@chakra-ui/react";
import React from 'react'

export default function Projects(props) {
  return (
    <>
<Box width={'100vw'} p={'6'} py={'12rem'}   backgroundImage={'/polygon1.png'} bgRepeat={'repeat'} >
  <Text fontSize={['3xl','4xl','64px']} fontWeight={'semi bold'} color={props.mode==='light'?'black':'white'} align='center'>Projects</Text>
  <br />
<Container maxW={{'sm':'640px','md':'1024px','lg':'1200px'}}>
<SimpleGrid columns={[1,null, 3]} spacing='40px'>
  <Card mode={props.mode}></Card>
  <Card mode={props.mode}/>
  <Card mode={props.mode}/>
</SimpleGrid>
</Container>
</Box>
    
    
    
    
    </>
  )
}
