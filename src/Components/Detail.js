import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from'../assets/icons/body-part.png'
import TargetImage from'../assets/icons/target.png'
import EquipmentImage from'../assets/icons/zquipment.png'

export default function Detail({ exercisesDetail}) {
    const { bodyPart, gifUrl, name, target, equipment} = exercisesDetail
  
    const extraDetail =  [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },

        {
            icon: TargetImage,
            name: target,
        },

        {
            icon: EquipmentImage,
            name: equipment,
        },

    ]
    return (
    <Stack gap="60px" sx={{flexDirection: {lg:"row"}, p:"20px", alignItems:"center"}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
        <Stack sx={{ gap: { lg:"35px", xs:"20px"}}}>
            <Typography variant="h3">
                {name}
            </Typography>

            <Typography variant="h6">
                Les exercices vous garderont en excellente santé. 
                {name} {``}
                font partie des meilleurs exercices pour cibler vos abdos. Ca vous aidera à améliorer votre moral et énergie.
            </Typography>
            {extraDetail.map((item) => (
                <Stack key= {item.name} direction="row" gap="24px" alignItems="center">
                   <Button sx={{background:"#fff2db", borderRadius:"50%", width:"100px", height:"100px"}}> 
                   <img src={item.icon} alt={bodyPart} />
                   </Button> 
                   <Typography variant="h6">
                    {item.name}
                   </Typography>
                </Stack>
            ))}
        </Stack>
    
    </Stack>
  )
}
