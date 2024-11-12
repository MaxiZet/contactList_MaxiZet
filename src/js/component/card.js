import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card mb-3" style={{ "max-width": "540px;" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={"https://i.pravatar.cc/300" + "?u=" + props.name}
            className="img-fluid rounded-circle"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              <i className="fa-solid fa-location-dot m-1"></i>
              {props.address}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-envelope m-1"></i>
              {props.email}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-phone m-1"></i>
              {props.phone}
            </p>
            <Link to={"/editContact/" + props.id}>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
            </Link>
            <button type="button" className="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Eliminar
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Desea eliminar a {props.name} de tu lista de contactos?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button onClick={() => actions.deleteContact(props.id)} data-bs-dismiss="modal" type="button" className="btn btn-danger ">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
};
