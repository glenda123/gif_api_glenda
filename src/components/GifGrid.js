import React from 'react'
import { useFetch } from '../hooks/useFetch'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const { data, loading} = useFetch(category)
    return (
        <>
            <h2>{category}</h2>
            {loading && <p>Cargando ...</p>}
            <div className= 'card-grid'>
            {
                data.map(imagenes =>(
                    <GifGridItem
                    key={imagenes.id}
                    {...imagenes}
                    />
                )
                    
                )
            }
            
            </div>
            
        </>
    )
}

export default GifGrid
