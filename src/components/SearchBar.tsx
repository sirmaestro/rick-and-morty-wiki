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
        return (
            <div>
                <Grid container={true} xs={12} justify={'center'}>
                    <Grid container={true} xs={12} justify={'center'}>
                        <Grid item={true} xs={4}>
                            <Input
                                placeholder="Enter game name"
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
                                            this.state.characters.length === 0 ? <p>Please type in a game and press enter.</p> :
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
                                this.state.characters.length === 0 ? "" :
                                    <Grid container={true} spacing={40}>
                                        {this.state.characters.map((gameId: any) => (
                                            <CharacterCard character={null}/>
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
            this.setState({
                error: "",
                characters: []
            });
            this.getGameIds(evt.target.value);
        }
    }

    private getGameIds(userInput: string) {
        fetch('https://rickandmortyapi.com/api/character/?name=' + userInput, {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.status}: ${response.statusText}`)
        })
        .then(data => {
            const characters = data.results.map((character: any) => {
                // tslint:disable-next-line:no-console
                console.log(character);
            })
            // tslint:disable-next-line:no-console
            console.log(characters);
        })
    }
}