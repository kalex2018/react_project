import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useSelector } from 'react-redux';
import { catFilter } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import { setBreed } from '../redux/actions';

export default function AdoptCard({ cat }) {
    const dispatch = useDispatch()
    const catCard = useSelector((state) => {
        return state.catFilter.breed
    })
    const adoptCat = useSelector((state) => {
        return state.catFilter
    })
    console.log('in the cat card', catCard)


    return (
        <div>
            <>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src=""
                            height={160}
                            alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>
                            {cat.name}
                        </Text>
                        <Badge color="pink" variant="light">
                            {cat.origin}
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {cat.description}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Book classic tour now
                    </Button>
                </Card>

            </>
        </div>
    )
}
