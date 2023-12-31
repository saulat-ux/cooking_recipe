import React, { useEffect,useState } from 'react'
import './home.css'
import { projectFirestore } from '../../firebase/config'
import RecipeList from '../../components/navbar/RecipeList'


const Home = () => {

  
const [data, setData] = useState(null)
const [isPending, setIsPending] = useState(false)
const [error, setError] = useState(false)


  useEffect(() => {
 setIsPending(true)
 const unsub =  projectFirestore.collection('recipes').onSnapshot((snapshot) => {
        if(snapshot.empty){
          setError('No recipes to load')
          setIsPending(false)
        }else {
          let results = []
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
          })
          setData(results)
          setIsPending(false)
        }
 },(err) => {
  setError(err.message)
  setIsPending(false)
 })
 return () => unsub()
  }, [])
  
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p> }
      {isPending && <p className='loading'> loading... </p>}
      {data && <RecipeList recipes ={data}/>}
     
    </div>
  )
}

export default Home
