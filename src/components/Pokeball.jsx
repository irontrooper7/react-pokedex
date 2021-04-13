import React from 'react'
import { TimelineLite } from 'gsap/all'

class Pokeball extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
            name: '',
            image: '',
        }
        this.pokeball = null;
        this.pokeInfo = null;

        this.showPokemon = new TimelineLite({ paused:true });
    }

    componentDidMount() {
        // FETCH POKEMON DATA
        fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.name,
                image: data.sprites.front_default,
            })
        })

        this.showPokemon
            .to(this.pokeball, 0.3, { scale: 0 , display: 'none'})
            .to(this.pokeInfo, 0.3, {opacity: 1, scale: 1, display: 'block'})

    }


    render() {
        return (
            <div className="pokeball-cont">
                <div ref={div => this.pokeball = div} className="pokeball" onClick={() => this.showPokemon.play()}></div>
                <div ref={div => this.pokeInfo = div} className="multimedia" onClick={() => this.showPokemon.reverse()} >
                    <img src={this.state.image} alt={this.state.name}/>
                </div>
            </div>
        )
    }

}

export default Pokeball