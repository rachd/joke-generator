import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPunchline: false
		};
		this.revealPunchline = this.revealPunchline.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			showPunchline: false
		});
	}

	revealPunchline() {
		this.setState({
			showPunchline: true
		});
	}


	render() {
		return (
			<div className="joke">
				<h1 className="setup">{this.props.setup}</h1>
				{this.state.showPunchline ? (
					<div>
						<h2 className="punchline">{this.props.punchline}</h2>
						<button className="button" onClick={this.props.fetchJoke}>I want another joke!</button>
					</div> 
				) : (
					<button className="button" onClick={this.revealPunchline}>What's the punchline?</button>
				)}
			</div>
		);
	}
}

export default Joke;