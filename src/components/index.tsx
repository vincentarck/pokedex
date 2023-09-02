import dynamic from 'next/dynamic'
 import React from 'react'

 
export const LazyHeader = dynamic(() => import('./Header'), {
  loading: () => <p>Loading...</p>,
})
 
export const LazyPokemons = dynamic(() => import('./Pokemons'), {
  loading: () => <p>Loading...</p>,
})
 
