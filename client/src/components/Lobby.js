import React, { Component } from 'react'
import NewPlayerForm from './forms/NewPlayerForm'
import Player from './Player'

class Lobby extends Component {
	// Start subscription after successfully joining game
	componentDidMount() {}

	setCurrentPlayer = (player) => {
		// localStorage.setItem('currPlayer': player)
		this.setState({ currPlayer: player })
	}

	renderJoinedPlayers() {
		return <div>{this.state.players.map((player) => <Player {...player} />)}</div>
	}

	render() {
		const { currPlayer } = this.state

		return <div>{currPlayer ? this.renderJoinedPlayers : <NewPlayerForm />}</div>
	}
}

export default Lobby