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

        const dataB = this.state.DB

        return (
            <section>
                <div className="container">
                    <h1>Pokedex</h1>
                    <div className="grid">
                        {
                            dataB.map( e => (
                                <div key={e.id} className="col-lg-3 col-xs-6">
                                    <Pokeball name={e.name} url={e.url}/>
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