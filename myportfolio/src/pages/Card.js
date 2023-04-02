import React from 'react'
import { VStack,Text,Image, border } from '@chakra-ui/react'
export default function Card(props) {
const themeStyle = {
    color: props.mode === 'light' ? 'black' : '#ACACACF8',
    backgroundColor: props.mode=='light' ? 'white' : '#181D27',
    borderColor: props.mode=='light' ? '3px solid black':'none'


    }


  return (
    <>
    <VStack spacing={5} style={themeStyle} rounded={'md'} boxShadow={'xl'}  >
    
    <Image height={['12rem','18rem']}  width={['100%',null,'100%']} fit={'cover'} src="/usman.jpg"/>

    <Text fontSize={['lg','lg']} alignSelf={'start'} paddingLeft={'1rem'} color={'green.500'} fontWeight={'bold'} > sub Heading</Text>

    <Text fontSize={['xl','2xl']} alignSelf={'start'} paddingLeft={'1rem'} fontWeight={'semibold'} >Heading</Text>

    <Text fontSize={['xl','xl']} alignSelf={'start'}   p={'1rem'} rounded={'lg'} color="gray.500" >some text that i will write for my demostrations</Text>


    </VStack>

    
    </>
      

    
  )
}
