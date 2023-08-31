import React, { useEffect ,useState } from 'react'
import { projectFirestore } from '../../firebase/config';
import './recipe.css'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme';

const Recipe = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub =  projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=> {
      if(doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }else {
        setIsPending(false)
        setError('Could not find the recipe')
      }
    })
    return () => unsub()

  }, [id])
  
  const {mode} = useTheme()
  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title:'something different'
    })
  }
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'> {error}</p>}
      {isPending && <p className='loading'> loading... </p>}
    {recipe && (
      <>
       <h2 className='page-title'>{recipe.title}</h2>
       <p>Takes {recipe.cookingTime} to cook.</p>
       <ul>
        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
       </ul>
      <p className='method'>{recipe.method}</p>
      <button onClick={handleClick}>Update me</button>
      </>
    )}
    </div>
  )
}

export default Recipe
