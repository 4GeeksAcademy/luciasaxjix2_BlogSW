import React, { useContext, useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPeople = (props) => {
  const { store, actions } = useContext(Context);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    // Verifica si el elemento está en la lista de favoritos y actualiza el estado 'favorite'
    const isFavorite = store.favorites.some((item) => item[0] === props.name);
    setFavorite(isFavorite);
  }, [store.favorites, props.name]);

  const toggleFavorite = () => {
    if (favorite) {
      const indexToRemove = store.favorites.findIndex(
        (item) => item[0] === props.name
      );
      if (indexToRemove !== -1) {
        deletefav(indexToRemove);
      }
    } else {
      addFav();
    }
    setFavorite(!favorite);
  };

  const addFav = async () => {
    let linkp = `/characters/${props._id}`;
    let element = [props.name, linkp];
    await actions.addToFavorites(element);
  };

  const deletefav = (index) => {
    let favorites = store.favorites.slice();
    favorites = favorites.filter((item, index2) => {
      return index2 !== index;
    });
    actions.setFavorites(favorites);
  };

  return (
    <div className="card mx-2" style={{ width: "18rem" }} key={props._id}>
      <img
        className="card-img-top mt-2"
        src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Gender: {props.gender}</p>
        <p className="card-text">Hair Color: {props.hair_color}</p>
        <p className="card-text">Eye-Color: {props.eye_color}</p>
      </div>
      <div className="card-body d-inline-flex justify-content-center border-top">
        <Link to={`/characters/${props._id}`}>
          <button className="btn btn-outline-primary me-2">Learn more!</button>
        </Link>
        <button
          href="#"
          className="btn btn-outline-warning ms-5 fs-5 d-flex align-items-center"
          onClick={toggleFavorite}
        >
          {!favorite ? <AiOutlineHeart /> : <AiFillHeart />}
        </button>
      </div>
    </div>
  );
};

export default CardPeople;