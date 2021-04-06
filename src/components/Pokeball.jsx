import React from 'react'

class Pokeball extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
            name: '',
            image: '',

        }
    }

    componentDidMount() {
        fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.name,
                image: data.sprites.front_default,
            })
        })
    }



    render() {
        return (
            <div className="pokeball-cont">
                <div className="pokeball"></div>
                <div className="multimedia">
                    <img src={this.state.image} alt={this.state.name}/>
                </div>
                <h3><strong>{this.state.name}</strong></h3>
            </div>
        )
    }

}

export default Pokeball