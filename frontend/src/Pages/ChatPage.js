import { Box } from "@chakra-ui/layout";
import {ChatState} from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import {useState} from "react";

const ChatPage = () => {
  const { user }= ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  
  return <div stype={{width:"100%"}}>
    {user && <SideDrawer />}
    <Box
     width="100vw" height="91.5vh" padding="20px"
    display="flex" justifyContent="space-between"
    >
      {user && <MyChats fetchAgain={fetchAgain} />}
      {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
    </Box>
  </div>

};

export default ChatPage;
