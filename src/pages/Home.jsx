import React from 'react'
import Pokeball from '../components/Pokeball'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            DB: []
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            this.setState({
                DB: data.results
            })
        })
    }

    render() {

        return (
            <section>
                <div className="container">
                    <div className="grid">
                        <div className="col-lg-12 col-xs-12 algText">
                            <h1>Kanto - Pokedex</h1>
                            <p>
                                A simple pokedex app whith React js
                                <br/>
                                I consume the <a href="https://pokeapi.co/">PokeAPI</a> and make a lazy loading.
                            </p>
                        </div>
                        {
                            this.state.DB.map( e => (

                                <div key={e.name} className="col-lg-2 col-xs-6">
                                    <Pokeball url={e.url} load={true}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Home