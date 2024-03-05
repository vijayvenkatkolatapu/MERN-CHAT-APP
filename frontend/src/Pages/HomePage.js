import React from 'react'
import { Container,Box,Text ,Tabs,Tab,TabList,TabPanels,TabPanel} from '@chakra-ui/react';


import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';


const HomePage = () => {

  const navigate=useNavigate();

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"));

    if(user) navigate("/chats");
  },[navigate]);

  return (
    <Container maxW='xl' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign='center'
        padding={3}
        fontWeight="bold"
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">Talk-A-Tive</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color='black'>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login/> 
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage
