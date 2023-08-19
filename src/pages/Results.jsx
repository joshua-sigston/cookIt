import{ React, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

function Results() {
    const [results, setResults] = useState([])
    let params = useParams()

    const getResults =  async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_KEY}&query=${name}`)
        const recipes = await data.json()
        setResults(recipes.results)
    }

    useEffect(() => {
        getResults(params.search)
    }, [params.search])

  return (
    <div className='results_container'>
      {results.map( (item) => {
        return (
          <Link to={'/recipe/' + item.id}>
            <div>{item.title}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Results
