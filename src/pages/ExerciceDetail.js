import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import { exerciseoptions, fetchData, youtubeOptions} from'../Utils/fetchData'
import Detail from '../Components/Detail'
import ExercisesVideos from '../Components/ExercisesVideos'
import SimilarExercises from '../Components/SimilarExercises'

export default function ExerciceDetail() {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExercisesVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises]= useState([])
  const [equipmentExercises, setEquipmentExercises]= useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}
      ` ,exerciseoptions)

      setExerciseDetail(exerciseDetailData.contents)

      /* On a crée des variables pour déjà automatiser,
      puis pour raccourcir les interminables urls !
      on retrouve les paramètres de la const response de fetchData
      ainsi on a l'url et après la virgule, l'option*/ 
      const ExercisesVideosData = await fetchData
      (`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`
      , youtubeOptions)

      /* on donne comme valeur au hooks celle 
      qu'a fetch la const au dessus*/
      setExercisesVideos(ExercisesVideosData)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`
      , exerciseoptions)
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`
      , exerciseoptions)
      setEquipmentExercises(equipmentExercisesData)
    }
    //On demande finalement au useEffect de charger
    //au lancement de la page
    // le résultat final de fetchExerciseData
    fetchExerciseData
  }, [id])

  /* les composants peuvent avoir des paramètres
  qui prendront tout leur sens lors de l'appel, où on
  leur octroie alors une valeur, c'est carrémment plus
  clair qu'en js classique (ici, la valeur des hooks)*/ 
  return (
    <Box>
      
      <Detail ExerciceDetail={exerciseDetail}/>
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}
