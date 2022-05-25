import React, {ReactElement, FC, useEffect, useState} from "react";
import {Box, Button, Card, CardHeader, CardActions, LinearProgress} from "@mui/material";
import axios from "axios"
import { resourceLimits } from "worker_threads";

const Jokes: FC<any> = (): ReactElement => {
    const [joke, setJokes] = useState("")
    const [isLoading, doLoading] = useState(false)
    const [fetching, getJoke] = useState(false)
    useEffect(() => {
        doLoading(true)
        const fetchData = async () => {
            const result = await axios("http://api.icndb.com/jokes/random/1?escape=javascript&limitTo=[nerdy]")
            if (result.data)
                setJokes(result.data.value[0].joke)
            doLoading(false)
        }
        fetchData()
    }, [fetching])

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Card sx={{display: "flex", flexDirection: "column", width: '60%', textAlign: 'center'}}>
                { isLoading
                    ? <LinearProgress color="inherit" />
                    : <CardHeader title={`${joke}`} />
                }
                <CardActions sx={{display: "flex", flexDirection: "column"}}>
                    <Button
                    onClick = {() => getJoke(!fetching)}
                    variant="outlined"
                    >
                    Next Joke
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Jokes;
