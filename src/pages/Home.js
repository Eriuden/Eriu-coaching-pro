import { useState } from "react"
import React from 'react'
import { Box } from "@mui/material"
import Exercices from "../Components/Exercices"
import SearchExercices from "../Components/SearchExercices"
import HeroBanner from "../Components/HeroBanner"


export default function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
        <HeroBanner />
        <SearchExercices setExervices={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}/>
        <Exercices
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        />

    </Box>
  )
}
