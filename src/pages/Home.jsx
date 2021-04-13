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