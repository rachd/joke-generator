import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: true,
			showPunchline: false
		};
		this.revealPunchline = this.revealPunchline.bind(this);
		this.showAnotherJoke = this.showAnotherJoke.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			loaded: true
		});
	}

	revealPunchline() {
		this.setState({
			showPunchline: true
		});
	}

	showAnotherJoke() {
		this.setState({
			showPunchline: false,
			loaded: false
		});
		this.props.fetchJoke();
	}

	render() {
		const bottomContent = this.state.showPunchline ? 
			<div>
				<h2 className="punchline">{this.props.punchline}</h2>
				<button className="button" onClick={this.showAnotherJoke}>I want another joke!</button>
			</div>
			: <button className="button" onClick={this.revealPunchline}>What's the punchline?</button>
		return(
			<div className="joke">
				{this.state.loaded && (<div><h1 className="setup">{this.props.setup}</h1>
				{bottomContent}</div>)}
			</div>
		);
	}
}

export default Joke;