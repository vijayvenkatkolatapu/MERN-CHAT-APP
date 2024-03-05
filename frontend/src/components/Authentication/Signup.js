import { InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { FormControl,FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Signup = () => {
const [show, setShow] = useState(false)
const [show1,setShow1]=useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [loading,setLoading]=useState(false);
  const toast=useToast();
  const navigate=useNavigate()

  const handleClick=()=>setShow(!show);
  const handleClick1=()=>setShow1(!show1);

  const handleChange=async(e)=>{
    
  };

  const submitHandler=async()=>{
    setLoading(true);
    if(!name || !email || !password || !confirmpassword){
      toast({
        title:"Please Fill all the Fields",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"bottom",
      });
      setLoading(false);
      return;
    }
    if(password!==confirmpassword){
      toast({
        title:"Passwords Do Not Match",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"bottom",
      });
      return;
    }
    try{
      const config={
        headers:{
          "Content-type":"application/json",
        },
      };
      const { data } = await axios.post("/api/user",{name,email,password},config);
      toast({
        title:"Registration Successful",
        status:"success",
        duration:5000,
        isClosable:true,
        position:"bottom",
      });
      localStorage.setItem('userInfo',JSON.stringify(data));
      setLoading(false);
      navigate('/chats')
      }catch(error){
      toast({
        title:"Error Occured!",
        description:error.response.data.message,
        status:"error",
        duration:5000,
        isClosable:true,
        position:"bottom",
      });
      setLoading(false);
      }
  };

  return (
    <VStack spacing='5px'>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
            placeholder="Enter Your Name"
            onChange={(e)=>setName(e.target.value)}
        />
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
            placeholder="Enter Your Email"
            onChange={(e)=>setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <Input 
            type={show?"text":"password"}
            placeholder="Enter Your Password"
            onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show?"Hide":"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='cpassword' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
            <Input 
            type={show?"text":"password"}
            placeholder="Confirm Password"
            onChange={(e)=>setConfirmpassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick1}>
                {show1?"Hide":"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='pic'>
        <FormLabel>Upload your Picture</FormLabel>
            <Input 
            type="file" p={1.5} accept="image/*"
            onChange={(e)=>handleChange(e)}
        />
      </FormControl>
      <Button 
      colorScheme="blue"
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}
      isLoading={loading}>
        Sign Up
      </Button>

    </VStack>
  )
}

export default Signup
