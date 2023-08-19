import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'

function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine =  async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type)
        // console.log(cuisine)
        // console.log(cuisine)
        // console.log(params)
        // console.log(params.type)
    }, [params.type])

  return (
    <motion.div className='cuisine'
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        {cuisine.map((recipe) => {
            return(
                <Link to={'/recipe/' + recipe.id} key={recipe.id}>
                    <div className='card' key={recipe.id}>
                        <img src={recipe.image} alt="" />
                        <p>{recipe.title}</p>
                    </div>
                </Link>
            )
        })}
    </motion.div>
  )
}

export default Cuisine
