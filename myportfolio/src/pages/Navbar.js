import React from 'react'
import './page_css/navbar.css'
import { Circle, useDisclosure, VStack } from '@chakra-ui/react'
import { DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader } from '@chakra-ui/react'
import { Box, Drawer, Link, Flex, HStack, Center } from '@chakra-ui/react'
import { IconButton, Avatar } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons'
export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const themeStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : '#181D27',
        textDecoration: 'none',


    }

    const text_decor = {
        textDecoration: 'none',
    }



    return (
        <>
            <Box w='100%' p={5} style={themeStyle}>


                <Link to="/" className='hover-effect' float={'left'} mt={'1.5'} fontSize={{ 'md': '20px', 'sm': '16px' }} fontWeight={'bold'} style={text_decor}  > Usman Ahmed </Link>



                <Flex justifyContent={'right'} gap={8}>

                    <HStack display={['none', 'flex']} float={'right'} gap={{ 'md': '3', 'lg': '6', 'sm': '3' }} >
                        <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >Home</Link>
                        <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >About</Link>
                        <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >Portfolio</Link>
                        <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >Contact</Link>
                    </HStack>
                    <IconButton float={'right'} aria-label='change Mode' bg={'none'} icon={<MoonIcon onClick={props.toggleMode} />} />
                    <IconButton display={['flex', 'none']} aria-label='change Mode' bg={'none'} icon={<HamburgerIcon onClick={onOpen} />} />
                </Flex>







            </Box>

            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent style={themeStyle}>
                    <DrawerHeader borderBottomWidth='1px' mx={2}>
                        <Avatar size='sm' name='Dan Abrahmov' mr={'10px'} src='https://lh3.googleusercontent.com/a/AGNmyxYloQbQHUYY9r64Gd0f63mempr3ZUPWw9ZB3WEo=s260' />
                        Usman ahmed</DrawerHeader>
                    <DrawerBody height={'100%'} display='flex' >

                        <Flex direction={'column'} gap={'30px'} flexGrow={1} justifyContent={'center'} alignItems={'center'}>

                            <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >Home</Link>
                            <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >About</Link>
                            <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >Portfolio</Link>
                            <Link to="/" className='hover-effect' fontSize={{ 'md': '18px', 'sm': '12px' }} fontWeight='semibold' style={text_decor} >Contact</Link>

                        </Flex>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
