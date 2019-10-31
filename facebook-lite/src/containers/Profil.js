import React from 'react';
import './Profil.css';

export default class Profil extends React.Component {
	constructor(props) {
    super(props);
  }
  	render() {
		return (
			<div className="Profil">

			<div className="Personne" style={{backgroundColor: this.props.personne.background}}>
				<img className="PP" src={this.props.personne.img} alt="Profile Picture"/>
				<h2>Nom : {this.props.personne.prenom} {this.props.personne.nom}</h2>
				<p>Date de Naissance : <b>{this.props.personne.date}</b></p>
				<p className="BgButtonContainer">
				<button className="BgButton" onClick={() => this.props.changeStyle(this.props.personne.id)} >Change style</button>
				</p>
			</div>
			<div className="Post">
				<h2 className="titre_post">Dernier post</h2>
				<p>"{this.props.personne.post}"</p>
				<button className="LikeButton" onClick={() => this.props.addLike(this.props.personne.id)}>{this.props.personne.like}👍 C'est super !</button>
			</div>
			</div>
			)
	}
}