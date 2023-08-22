import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import CardPeople from "../component/cardpeople.jsx";
import CardPlanet from "../component/cardplanet.jsx";
import CardVehicle from "../component/cardvehicle.jsx";

export const Home = () => {
	const{store} = useContext(Context);

	return(
		<>
			<div className="container-fluid mb-5 ms-2">
				<h1 className="text-danger my-5 ms-2">Characters</h1>
				<div className="overflow-auto ">
					<div className="row d-flex flex-row flex-nowrap ms-2">
						{store.characters.map((item,index) => { return (<CardPeople _id={item._id} uid={item.uid} name={item.properties.name} gender={item.properties.gender} hair_color={item.properties.hair_color} eye_color={item.properties.eye_color} />) })}
					</div>
				</div>
			</div>

			<div className="container-fluid mb-5 ms-2">
				<h1 className="text-danger my-5 ms-2">Planets</h1>
				<div className="overflow-auto">
					<div className="row d-flex flex-row flex-nowrap ms-2">
					{store.planets.map((item) => { return (<CardPlanet _id={item._id} uid={item.uid} name={item.properties.name} population={item.properties.population} terrain={item.properties.terrain} climate = {item.properties.climate}/>) })}
					</div>
				</div>
			</div>

			<div className="container-fluid mb-5 ms-2">
				<h1 className="text-danger my-5 ">Vehicles</h1>
				<div className="overflow-auto ">
					<div className="row d-flex flex-row flex-nowrap ms-2">
					{store.vehicles.map((item) => { return (<CardVehicle _id={item._id} uid={item.uid} name={item.properties.name} model={item.properties.model} passenger={item.properties.passengers} consumables={item.properties.consumables}/>) })}
					</div>
				</div>
			</div>
		</>
	);
}
