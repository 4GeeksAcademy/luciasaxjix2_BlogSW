import React, { useContext } from "react";
import {AiFillDelete} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const deletefav = (index) => {
		let favorites = store.favorites.slice();
		favorites = favorites.filter((item, index2) => {
		  return index2 !== index;
		});
		actions.setFavorites(favorites); // Utiliza la función setFavorites para actualizar los favoritos
	  };
	return (
		<nav className="navbar navbar-light bg-light mb-3 py-3 px-5 ">
			
			<span className="navbar-brand ms-5 mb-0 h1">
			<a href="/"><img src="https://i.ibb.co/khNRBYC/star-wars-logo.png" alt="star-wars-logo" border="0"/></a>
			</span>
		
			<div className="ml-auto">
				<div class="dropdown me-5">
					<button className="btn btn-primary dropdown-toggle p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg bg-secondary rounded text-white px-1"> <b>{store.favorites.length}</b></span>
					</button>
					<ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">

					{store.favorites && store.favorites.length > 0 ? 
						<>{
							store.favorites.map((item,index)=>{
							return (
								<li key={index}><a className="dropdown-item"  ><Link to={item[1]}> {item[0]}</Link><button className="btn btn-outline-dark border-0 ms-1"onClick={(e) => deletefav(index)} ><AiFillDelete/></button> </a></li>
							);
							})
						}</> : 
						<li><a className="dropdown-item"> Empty</a></li>
					}
					</ul>
				</div>
				
			</div>
		</nav>
	);
};