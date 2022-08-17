import { HeroCard } from './HeroCard'

import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { useMemo } from 'react'

export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=> getHeroesByPublisher (publisher),[publisher]) 

  return (
    <>
    <h1 className="animate__animated animate__fadeInLeft mt-2">{publisher} Heroes</h1>
     <div className="row row-cols-1 row-cols-md-3 g-3 ">
        {
        heroes.map(hero => (
          <HeroCard 
          key={hero.id}
          {...hero} />
            )
          )
        }
    </div>
    </>
   
    
  )
}
