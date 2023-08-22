import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Detail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [detail, setDetail] = useState({});

  const search = () => {
    let searchDetail = store.characters
      .concat(store.planets).concat(store.vehicles)
      .find((item) => item._id === params.id);
    setDetail(searchDetail);
  };

  useEffect(() => {
    search();
  }, [store.characters, store.planets, store.vehicles]);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 border-warning d-flex justify-content-center">
          <img className="my-3 image " src={`https://starwars-visualguide.com/assets/img/characters/${detail?.uid}.jpg`} />
        </div>


        <div className="col-5 text-center border-primary ">
          
          <h1> {detail?.properties?.name}</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
             sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          
        </div>
      </div>
      <div className="row border-top border-danger mt-2">
        <div className="col-1">
        </div>
        <div className="col-2 my-3 ">
          <h5 className="text-danger  text-center">Birth Year</h5>
          <p className="text-danger text-center fs-5">
            {detail?.properties?.birth_year}
          </p>
        </div>
        <div className="col-2 my-3">
          <h5 className="text-danger text-center">Gender</h5>
          <p className="text-danger text-center fs-5">
            {detail?.properties?.gender}
          </p>
        </div>
        <div className="col-2 my-3">
          <h5 className="text-danger text-center">Height</h5>
          <p className="text-danger text-center fs-5">
            {detail?.properties?.height}
          </p>
        </div>
        <div className="col-2 my-3">
          <h5 className="text-danger text-center">Skin Color</h5>
          <p className="text-danger text-center fs-5">
            {detail?.properties?.skin_color}
          </p>
        </div>
        <div className="col-2 my-3">
          <h5 className="text-danger text-center">Eyes Color</h5>
          <p className="text-danger text-center fs-5">
            {detail?.properties?.eye_color}
          </p>
        </div>
        <div className="col-1">
        </div>
      </div>

      <Link to="/">
        <button className="btn btn-dark btn-sm" >
          Back home
        </button>
      </Link>
    </div>
  );
};

export default Detail;