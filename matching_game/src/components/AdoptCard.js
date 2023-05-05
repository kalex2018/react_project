import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useSelector } from 'react-redux';
import { catFilter } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import { setBreed } from '../redux/actions';
import { cast } from 'sequelize';

export default function AdoptCard() {
    const dispatch = useDispatch()
    const catCard = useSelector((state) => {
        return state.catFilter.breed
    })
    const adoptCat = useSelector((state) => {
        return state.catFilter
    })


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
                        <Text weight={500}></Text>
                        <Badge color="pink" variant="light">
                            On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                        activities on and around the fjords of Norway
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Book classic tour now
                    </Button>
                </Card>

            </>
        </div>
    )
}
