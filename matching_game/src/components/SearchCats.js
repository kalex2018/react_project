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
                    let cats = data

                    dispatch(setBreed(cats))
                    console.log('in the cat serach', cats.cat)

                    return cats

                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button onClick={(event) => catBreed(event)}>Find a Cat</button>

    )
}
