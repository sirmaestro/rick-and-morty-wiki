import { Input } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';

import * as React from 'react';
import CharacterCard from './CharacterCard';

interface IState {
    characters: any,
    loading: boolean
}

export default class SearchBar extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            characters: [],
            loading: false
        }
        this.updateInput = this.updateInput.bind(this);
    }

    public render() {
        return (
            <div>
                <Grid container={true} xs={12} justify={'center'}>
                    <Grid container={true} xs={12} justify={'center'}>
                        <Grid item={true} xs={4} style={{padding: 20}}>
                            <Input
                                autoFocus={true}
                                style={{height:50, fontSize: 20}}
                                placeholder="Enter character name"
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                                fullWidth={true}
                                onKeyPress={this.updateInput}
                            />
                        </Grid>
                    </Grid>

                    <Grid item={true} xs={12}>
                        {this.state.loading ? "" : (
                                (this.state.characters.characters === null || typeof this.state.characters.characters === 'undefined') ? "" :
                                    <Grid container={true} spacing={40}>
                                        {this.state.characters.characters.map((character: any) => (
                                            <CharacterCard key={character.index} characterId={character.id} characterName={character.name}/>
                                        ))}
                                    </Grid>
                        )}
                    </Grid>
                </Grid>
            </div>
        );
    }

    private updateInput(evt: any) {
        if (evt.key === 'Enter') {
            this.setState({ loading: true });
            this.getCharacters(evt.target.value);
        }
    }

    private getCharacters(userInput: string) {
        return fetch('https://rickandmortyapi.com/api/character/?name=' + userInput, {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.status}: ${response.statusText}`)
        })
        .then(data => {
            const characters = data.results.map((character: any) => {
                return character;
            })
            this.setState({
                characters: {characters},
                loading: false,
            });
            return characters;
            
        })
    }
}