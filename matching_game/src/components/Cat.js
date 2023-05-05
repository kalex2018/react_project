import { React, useState, useEffect } from 'react'
import '../css/cat.css'

export default function Cat() {
    const [picture, setPicture] = useState('')

    const catPicture = async () => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search")
            const data = await response.json()
            setPicture(data[0].url)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        catPicture()
    }, [])

    return (
        <div className="cat-container">
            <img className="cat-image" src={picture} alt="Picture Incoming" />
            <button onClick={ catPicture }>Get a new cat picture!</button>
        </div>
    )
}