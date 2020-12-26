import React, {useState} from 'react'
import AddCategory from "./components/AddCategory"
import GifGrid from './components/GifGrid'

const GifExpertCopiaApp = () => {

    const [categories, setCategories] = useState(["Inuyasha"])
    return (
        <>
            <h1 className='title'>Gif Expert App</h1>
            <AddCategory setCategories= {setCategories} />

            <ol>
            {
                categories.map(category =>(
                    <GifGrid
                    
                    key={category}
                    category={category}
                    />
                )
                )
            }
            </ol>
        </>
    )
}

export default GifExpertCopiaApp
