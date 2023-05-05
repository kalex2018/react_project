import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setBreed } from '../redux/actions'

export default function SearchCats() {
    const dispatch = useDispatch()
    const catCard = useSelector((state) => {
        return state.catFilter.breed
    })
    const catBreed = async (e) => {
        e.preventDefault()
        try {
            fetch("https://api.thecatapi.com/v1/breeds")
                .then(response => response.json())
                .then(data => {
                    let cats = {
                        cat: data
                    }
                    dispatch(setBreed(cats))
                    console.log(cats)
                    return cats

                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button onClick={catBreed}>Find a Cat</button>

    )
}
