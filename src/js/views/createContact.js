import React, { createContext, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const CreateContact = () => {
  const { actions } = useContext(Context);
  const [newContact, setNewContact] = useState({});

  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <label
            for="exampleInputEmail1"
            className="form-label fw-bold"
            aria-placeholder="Enter name"
          >
            Full name
          </label>
          <input
            onChange={(evento) =>
              setNewContact({ ...newContact, name: evento.target.value })
            }
            value={newContact.name || ""}
            type="text"
            className="form-control"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleInputEmail1"
            className="form-label fw-bold"
            aria-placeholder="Enter email"
          >
            Email
          </label>
          <input
            onChange={(evento) =>
              setNewContact({ ...newContact, email: evento.target.value })
            }
            value={newContact.email || ""}
            type="email"
            className="form-control"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleInputEmail1"
            className="form-label fw-bold"
            aria-placeholder="Enter phone"
          >
            Phone
          </label>
          <input
            onChange={(evento) =>
              setNewContact({ ...newContact, phone: evento.target.value })
            }
            value={newContact.phone || ""}
            type="phone"
            className="form-control"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleInputEmail1"
            className="form-label fw-bold"
            aria-placeholder="Enter adress"
          >
            Address
          </label>
          <input
            onChange={(evento) =>
              setNewContact({ ...newContact, adress: evento.target.value })
            }
            value={newContact.adress || ""}
            type="text"
            className="form-control"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button
          onClick={() => {
            actions.CreateContact(newContact);
          }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
