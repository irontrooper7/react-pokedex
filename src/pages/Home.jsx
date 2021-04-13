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
                    <div className="grid">
                        {
                            dataB.map( (element) => (
                                <div key={element.id} className="col-lg-3 col-xs-6">
                                    <Pokeball url={element.url}/>
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