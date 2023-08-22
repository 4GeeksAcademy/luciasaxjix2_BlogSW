const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			urlBase:"https://www.swapi.tech/api",
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: async()=>{
				let store = getStore();
				let response = await fetch(`${store.urlBase}/people`);
				let data = await response.json();
				for (let character of data.results) {
				  let response = await fetch(`${store.urlBase}/people/${character.uid}`);
				  let data = await response.json();
				  setStore({ characters: [...store.characters, data.result] }); //Spread Operation
				}
			},
			getPlanets: async()=>{
				let store = getStore();
				let response = await fetch(`${store.urlBase}/planets`);
				let data = await response.json();
				for (let planet of data.results) {
				  let response = await fetch(`${store.urlBase}/planets/${planet.uid}`);
				  let data = await response.json();
				  setStore({ planets: [...store.planets, data.result] });
				}
			},
			getVehicles: async()=>{
				let store = getStore();
				let response = await fetch(`${store.urlBase}/vehicles`);
				let data = await response.json();
				for (let vehicle of data.results) {
				  let response = await fetch(`${store.urlBase}/vehicles/${vehicle.uid}`);
				  let data = await response.json();
				  setStore({ vehicles: [...store.vehicles, data.result] });
				}
			},
			addToFavorites: (element) => {
				let store = getStore();
				setStore({favorites: [...store.favorites, element]});
			},

			setFavorites:(newFavorites) => {
				setStore({favorites: newFavorites});
			}
		}
	};
};

export default getState;