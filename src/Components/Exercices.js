import React from 'react'
import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import {Box, Stack, Typography} from '@mui/material'

import { exerciseoptions, fetchData } from '../Utils/fetchData'
import ExercisesCard from './ExercisesCard'

export default function Exercices({ exercises, setExcercises, bodyPart}) {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9

  const IndexOfLastExercise = currentPage * exercisePerPage

  const indexOfFirstExercise = IndexOfLastExercise -
  exercisePerPage

  const currentExercices = exercises.slice (
    indexOfFirstExercise, IndexOfLastExercise
  )

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top:"1800px", behavior: "smooth"})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      
      if(bodyPart === "all") {
        exercisesData = await fetchData("http://exercisedb.p.rapidapi.com/exercises", exerciseoptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseoptions)
      }

      setExcercises(exercisesData)
    }
  }, [bodyPart])
  
  return (
    <Box id="exercices"
    sx={{mt: { lg:"110px"}}}
    mt="50px"
    p="20px">

      <Typography variant="h3" mb="46px">
        montrer résultat
      </Typography>

      <Stack direction="row" sx={{ gap: {lg:"110px", xs:"50px"}}}
      flexWrap="wrap" justifyContent="center">
        {exercises.map ((exercise, index) => (
          <ExercisesCard key={index} exercise=
          {exercise} />
        ))}

      </Stack>

      <Stack mt="100px" alignItems="center">

        {exercises.length > 9 && (

          <Pagination color="standard" shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length/9)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />

        )}
        
      </Stack>

    </Box>
  )
}
