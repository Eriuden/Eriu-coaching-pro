import React from 'react'
import { Stack, Typography } from '@mui/material'
import {ScrollMenu, VisibilityContext} from "react-horizontal-scroll"

import Icon from'../assets/icons/gym.png'

export default function BodyPart() {
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className='bodyPart-card' sx={bodyPart === item ? 
    {borderTop: "4px solid #ff2625", backgroundColor:"#fff", borderBottomLeftRadius:"20px" ,width:"270px", height: "280px", cursor:"pointer",gap:"47px"} 
    : {backGround: "#fff", borderBottomLeftRadius:"20px" ,width:"270px", height: "280px", cursor:"pointer",gap:"47px"}}
    onClick={() => {
        setBodyPart(item)
        window.scrollTo({top:1800, left:100, behavior:"smooth"})
    }}
    >
        
        <img src={Icon} alt="Haltères à main"  style={{ width: "40px", height:"40px"}}/>
    
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}
