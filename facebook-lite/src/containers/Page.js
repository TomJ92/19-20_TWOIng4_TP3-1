import React from 'react';
import './Page.css';
import Switch from './Switch'
import Profil from './Profil'

export default class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state =
		{
			profils : [
			{
				prenom: "Elliot",
				nom: "Alderson",
				date:  "17/09/1986",
				img: "../images/eliot.jpg",
				post: "Hello friend.",
				like: 404,
				background : "#2A558C",
				id :0



			},
			{
				prenom: "Dolores",
				nom : "Abernathy",
				date : "03/10/2038",
				img: "../images/dolores.jpg",
				post: "These violent delights have violent ends.",
				like: 1984,
				background : "#2A558C",
				id:1


			},
			{
				prenom: "Eleanor",
				nom : "Shellstrop",
				date: "14/10/1982",
				img: "../images/eleanor.jpg",
				post:"Holy motherforking shirtballs!",
				like: 12358,
				background : "#2A558C",
				id:2
			}
			],
			personne_select : 0
		};
			// Cette liaison est nécéssaire afin de permettre
		    // l'utilisation de `this` dans la fonction de rappel.
		    this.handleClick = this.handleClick.bind(this);
		    this.addLike = this.addLike.bind(this)
		}
		handleClick(p_number) {
			this.setState({personne_select: p_number})
		}
		addLike(p_num)
		  {
		  	this.state.profils[p_num].like = this.state.profils[p_num].like + 1;
		  }
		  
		 /*  changeStyle() {
    if(this.props.personne.background=="#2A558C") {
      this.props.personne.background="#49B1F2";
    }
    else {
      this.props.personne.background="#2A558C";
    }
  }*/

		render() {
			return (
				<div className="Page">
				<Switch 
				p1 = {this.state.profils[0]}
				p2 = {this.state.profils[1]}
				p3 = {this.state.profils[2]}
				handleClick = {this.handleClick}
				/>
				<Profil 
				personne = {this.state.profils[this.state.personne_select]}
				addLike = {this.addLike}
				/>
				</div>
				);
		}
	}
