import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useSelector } from 'react-redux';
import { catFilter } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import { setBreed } from '../redux/actions';
import { setFavorite } from '../redux/actions';

export default function AdoptCard({ cat }) {
    const dispatch = useDispatch()
    const catCard = useSelector((state) => {
        return state.catFilter.breed
    })
    const favoritCat = useSelector((state) => {
        return state.catFilter.favorit
    })
    const image = ``
    console.log('in the cat card', catCard)


    return (
        <div>
            <>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src={cat.reference_image_id}
                            height={160}
                            alt={cat.name}
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>

                        </Text>
                        <Badge color="pink" variant="light">
                            {cat.origin}
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {cat.description}
                    </Text>

                    <Button onClick={() => { dispatch(setFavorite(cat)) }} variant="light" color="blue" fullWidth mt="md" radius="md">
                        favorit
                    </Button>
                </Card>

            </>
        </div>
    )
}
