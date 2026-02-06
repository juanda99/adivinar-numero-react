  
  useEffect (
    // primer parámetro una función 
    // que se ejecuta cada vez que se 
    // actualiza el estado del array de dependencias (segundo parámetro)
    // se ejecuta la primera vez que se renderiza el componente, 
    // y cada vez que se actualiza el estado de alguna de las dependencias

    () => { },

    ['dependencia1', 'dependencia2',...]



  )
  
  
  useEffect(() => {
    console.log('Me han ejecutado por el cambio de guessNumber')
    if (secretNumber !== guessNumber && guessNumber !== null) {
      console.log(secretNumber, guessNumber)
      // disminuimos el score
      setScore(score - 1)
    }
  }, [guessNumber])