import React from 'react'
import { Box, Stack,Typography } from '@mui/material'

export default function ExercisesVideos({ExercisesVideos, name}) {
    if(!ExercisesVideos.length) return "...loading"
  return (
    <Box sx={{marginTop: {lg:'200px', xs:'20px'}}} p='20px'>
        <Typography variant="h4" mb="33px">
            Regarder <span>{name}</span> vidéos d'exercices
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{flexDirection: {lg: 'row'}, gap:{ lg:'110px', xs:'0'}}}>
            {ExercisesVideos?.slice(0,3).map((item,index) => (
                <a key= {index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography variant="h5" color="#000">
                            {item.video.title}
                        </Typography>
                        <Typography variant="h6" color="#000">
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}
