import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';


export default class CharacterCard extends React.Component<{ characterId: any, characterName: any }>{
    public render() {
        const { characterId, characterName } = this.props
        return (
            <Grid item={true} sm={6} md={4} lg={3}>
                <Card className="card" style={{ height: 'auto', overflow: 'auto' }}>
                    <CardMedia
                        style={{ height: 400 }}
                        image={`https://rickandmortyapi.com/api/character/avatar/${characterId}.jpeg`}
                    />
                    <CardContent>
                        <Typography gutterBottom={true} variant="headline" component="h2">
                            {characterName}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )

    }
}
