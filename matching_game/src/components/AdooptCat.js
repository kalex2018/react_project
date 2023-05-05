import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBreed } from '../redux/actions'
import Provider from 'react-redux'
import { catFilter } from '../redux/reducers'
import AdoptCard from './AdoptCard'
import { Grid } from '@mantine/core';
import SearchCats from './SearchCats'

export default function AdooptCat() {
    const dispatch = useDispatch()
    const cats = useSelector((state) => {
        return state.catFilter.breed[0]
    })
    console.log('in the AdoptCat Container', cats)

    return (
        <>
            <div>AdoptCat</div>
            <SearchCats />

            <Grid>
                {/* The map function is being excuted only if cats is defined */}
                {cats?.map((cat) => (
                    <Grid.Col span={4}  >
                        <AdoptCard cat={cat} />
                    </Grid.Col>
                ))
                }
            </Grid>



        </>

    )
}
