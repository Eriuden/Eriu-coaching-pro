

export const exerciseoptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPIKEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPIKEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  


export const fetchData = async(url,options) =>{
  //on recherchera toujours selon deux paramètres une réponse
  //puis on demande de mettre le résultat au format JSON
  //avant de le renvoyer
    const response= await fetch(url,options)
    const data = await response.json()

    return data
}