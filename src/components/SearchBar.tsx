import { Input } from '@material-ui/core/';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import * as React from 'react';
import CharacterCard from './CharacterCard';

interface IState {
    error: any,
    characters: any,
    loading: boolean
}

export default class SearchBar extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            error: "",
            characters: [],
            loading: false
        }
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    public render() {
        // (this.state.characters === null || typeof this.state.characters === 'undefined') ? {const newCharacters = this.state.characters.map((character: any) => {
        //     return (
        //       <li className="pokemons__item" key={character.id}>
        //         <CharacterCard character={character}/>
        //       </li>
        //     )
        // })} : null

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
                                onKeyPress={this.updateInputValue}
                            />
                            <Grid container={true} justify={'center'} xs={12}>
                                <Grid item={true}>
                                    {this.state.loading ? <CircularProgress thickness={3} /> : (
                                        this.state.error !== "" ? <p>An error occured, please try again later.</p> : (
                                            (this.state.characters.characters === null || typeof this.state.characters.characters === 'undefined') ? <p>Enter a character to want to find</p> :
                                                ""
                                        )
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item={true} xs={12}>
                        {this.state.loading ? "" : (
                            this.state.error !== "" ? "" : (
                                (this.state.characters.characters === null || typeof this.state.characters.characters === 'undefined') ? "" :
                                    <Grid container={true} spacing={40}>
                                        {this.state.characters.characters.map((character: any) => (
                                            <CharacterCard key={character.index} characterId={character.id} characterName={character.name}/>
                                        ))}
                                    </Grid>
                            )
                        )}
                    </Grid>
                </Grid>
            </div>
        );
    }

    private updateInputValue(evt: any) {
        if (evt.key === 'Enter') {
            this.setState({ loading: true });
            this.getCharacters(evt.target.value);

            // tslint:disable-next-line:no-console
            console.log(this.state.characters);
            // tslint:disable-next-line:no-console
            console.log(typeof(this.state.characters));
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
                error: "",
                characters: {characters},
                loading: false,
            });
            // tslint:disable-next-line:no-console
            console.log(characters);
            return characters;
            
        })
    }
}