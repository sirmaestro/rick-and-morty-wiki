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

export default class CharacterCard extends React.Component<{ character: any }, IState>{
    public render() {
        const { character } = this.props

        return (
            <div className="character">
                <button
                    type="button"
                    className="character_sprite"
                    style={{
                        backgroundImage: `url(${`https://rickandmortyapi.com/api/character/avatar/${
                            character.id
                            }.jpeg`})`
                    }}
                />
                <p className="character_name">{character.name}</p>
            </div>
        )

    }
}
