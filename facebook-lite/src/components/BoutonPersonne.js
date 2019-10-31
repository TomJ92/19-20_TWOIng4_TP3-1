import React from 'react';
import "./BoutonPersonne.css"

export default class BoutonPersonne extends React.Component {
	render() {
		return (
			<div>
				<button className="BoutonPersonne" onClick={() => this.props.handleClick(this.props.p.id)}>
        <p>{this.props.p.prenom} {this.props.p.nom}</p>
      </button>
			</div>
		);
	}
}