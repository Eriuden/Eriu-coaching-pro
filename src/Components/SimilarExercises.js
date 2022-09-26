import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import HorizontallScrollbar from'./HorizontallScrollbar'
import Loader from './Loader'

export default function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: {lg: "100px", xs:"0"}}}>
      <Typography variant="h3">Exercices avec les mêmes muscles</Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
        {targetMuscleExercises.length ?
        <HorizontallScrollbar data={targetMuscleExercises} /> 
        : <Loader />}
      </Stack>

      <Typography variant="h3">Exercices avec le même équipement</Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
        {equipmentExercises.length ?
        <HorizontallScrollbar data={equipmentExercises} /> 
        : <Loader />}
      </Stack>

    </Box>
  )
}
