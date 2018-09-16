import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import { CircularProgress } from '@material-ui/core';

// import * as equal from 'fast-deep-equal';
import * as React from 'react';

import './GameCard.css';

interface IState {
    error: string
    character: any
    loading: boolean
}

export default class CharacterCard extends React.Component<{ characterId: any, characterName: any }, IState>{
    public render() {
        const { characterId, characterName } = this.props
        // tslint:disable-next-line:no-console
        console.log(characterId);
        return (
            <Grid item={true} sm={6} md={4} lg={3}>
                <Card className="card" style={{ height: 'auto', overflow: 'auto' }}>
                    <CardMedia
                        style={{ height: 300 }}
                        image={`https://rickandmortyapi.com/api/character/avatar/${characterId}.jpeg`}
                    />
                    <CardContent>
                        <Typography gutterBottom={true} variant="headline" component="h2">
                            {characterName}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            // <div className="character">
            //     <button
            //         type="button"
            //         className="character_sprite"
            //         style={{
            //             backgroundImage: `url(${`https://rickandmortyapi.com/api/character/avatar/${
            //                 characterId
            //                 }.jpeg`})`
            //         }}
            //     />
            //     <p className="character_name">{characterName}</p>
            // </div>
        )

    }
}
