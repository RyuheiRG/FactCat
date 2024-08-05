import { useEffect, useState } from "react"

export function useCatImg({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        // https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red --> **NO SIRVE**
        fetch(`https://api.thecatapi.com/v1/images/search`)
            .then(res => res.json())
            .then(response => {
                const urlG = response[0].url
                setImageUrl(urlG)
            })
    }, [fact])

    return { imageUrl }
}