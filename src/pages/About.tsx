import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const About: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{display: "flex", flexDirection: "column", width: '100%', textAlign: 'center'}}>
            <Typography variant="h3">About</Typography>
                <Typography color="secondary.black" variant="subtitle1">
                    A simple react act that utilizes routes, material and fetching data from an api.
                </Typography>
            </Box>
        </Box>
    );
};

export default About;