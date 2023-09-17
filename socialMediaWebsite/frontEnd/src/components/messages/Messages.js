import React, { useState } from 'react'
import './Message.css'
import {Stack,Box, Typography,Button,Input, Dialog} from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import {Link} from 'react-router-dom';
// import NewMessage from '../Common/NewMessage';
// import AddPhotoAlternateOutlinedIcon from '@mui/icons-material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ClearIcon from '@mui/icons-material/Clear';
// import UserShortProfile from '../Common/UserShortProfile';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import UserShortProfile from '../common/UserShortProfile';

import CheatListSend from './CheatListSend';
import CheatList from './CheatList';
import PopNewMessage from './PopNewMessage';



const Messages = () => {
  const [open,setDialog] = useState('');
  console.log(open);
  return (
       <Box sx={{marginLeft:'2%'}}>
        <Stack m='20px auto' justifyContent='center' alignItems='center'>
            <Stack width='960px' height='90vh' flexDirection='row'  sx={{border:'1px solid #3d3d3d'}}>
                <CheatList/>
                <CheatListSend open={open} setDialog={setDialog} />
            </Stack>
        </Stack>
        <PopNewMessage open={open} setDialog={setDialog} />
       {/* <NewMessage/> */}
      </Box>
  )
}


// function CheatListSend()
// {
//   return (
//     <>
//         <Stack width='100%' height='100%' alignItems="center" justifyContent='space-around'   sx={{backgroundColor:'#3d3d3d'}}>
//           <Stack width='100%' p='25px' direction="column" justifyContent='center' alignItems="center" spacing={2}>
//             <ArrowOutwardIcon fontSize='large'/>
//             <Stack flexDirection='column' sx={{textAlign:'center',display:'flex'}}>
//               <Typography variant='h4'>Your message</Typography>
//               <Typography variant='body2'>Send private photos and messages to a friend or group.</Typography>
//             </Stack>
//             <Button variant="contained" component="label" >
//                 {/* <input hidden accept="image/*" type="file" />      this button open New message component */}
//                 <Link to="/Messages/NewMessages" > Send Message</Link>
//            </Button>
//           </Stack>
//        </Stack>
//     </>
//   )
// }


export default Messages;
