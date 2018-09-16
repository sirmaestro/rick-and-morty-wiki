// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

// import { CircularProgress } from '@material-ui/core';

// import * as equal from 'fast-deep-equal';
import * as React from 'react';

import './GameCard.css';

interface IState {
    error: string
    character: any
    loading: boolean
}

export default class CharacterCard extends React.Component<{ characterId: any }, IState>{
    public render() {
        const { characterId } = this.props
        // tslint:disable-next-line:no-console
        console.log(characterId);
        return (
            <div className="character">
                <button
                    type="button"
                    className="character_sprite"
                    style={{
                        backgroundImage: `url(${`https://rickandmortyapi.com/api/character/avatar/${
                            characterId.id
                            }.jpeg`})`
                    }}
                />
                <p className="character_name">{characterId.name}</p>
            </div>
        )

    }
}
