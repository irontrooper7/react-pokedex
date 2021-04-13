import React from 'react'
import { TimelineLite, Back } from 'gsap/all'

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
        // CLICK ANIMATION
        this.showPokemon
            .to(this.pokeball, 0.5, { scale: 0, rotate: 360})
            .to(this.pokeInfo, 0.3, {scale: 1, ease: Back.easeOut})
            // .play()

        if(this.props.load) {
            this.showPokemon.play()
        }

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