import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setBreed } from '../redux/actions'
import '../css/SearchCats.css'
import { Container } from '@mantine/core'

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
        <Container className="flex">
        <button id="catInfo" onClick={(event) => catBreed(event)}>Get Cat Info!</button>
        </Container>
    )
}
