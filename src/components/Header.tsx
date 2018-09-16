import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import * as React from 'react';


export const Header: React.StatelessComponent<{}> = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit" style={{fontSize:21, fontFamily:"Helvetica", fontWeight:500}}>
                    Rick and Morty Database
                </Typography>
            </Toolbar>
        </AppBar>
    );
}