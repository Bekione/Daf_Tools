import {useEffect, useState} from 'react'
import api from '../../api'

export default function ImageFetcher(path){
    const [images, setImages] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const imageResponse = await api.get(`/api/asset/${path}`)
                setImages(imageResponse.data)
            }
            catch(error){
                console.error(error)
            }
        }
 
        fetchData()
    }, [path])

    return images
}

export function getImagePath(images, name) {
    const image = images.find(image => image.name === name);

    if (image) {
      return image.path;
    }
}
