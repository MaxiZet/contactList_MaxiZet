import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditContact = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const emptyContact = { name: "", email: "", phone: "", address: "" };
  const [contact, setContact] = useState(emptyContact);
  const { id } = useParams();
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      const existingContact = store.contacts.find(
        (contact) => contact.id === parseInt(id)
      );
      if (existingContact) {
        setContact(existingContact);
      }
    } else {
      setContact(emptyContact);
    }
  }, [id, store.contacts, isEditing]);

  const handler = async () => {
    // Validación: Si el nombre está vacío, muestra una alerta y no envía el formulario
    if (!contact.name.trim()) {
      alert("Full name cannot be empty");
      return;
    }

    if (isEditing) {
      await actions.editContact(id, contact);
    } else {
      await actions.createContact(contact);
    }
    navigate("/");
  };

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
              setContact({ ...contact, name: evento.target.value })
            }
            value={contact.name || ""}
            type="text"
            className="form-control"
          />
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
              setContact({ ...contact, email: evento.target.value })
            }
            value={contact.email || ""}
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
              setContact({ ...contact, phone: evento.target.value })
            }
            value={contact.phone || ""}
            type="phone"
            className="form-control"
          />
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
              setContact({ ...contact, address: evento.target.value })
            }
            value={contact.address || ""}
            type="text"
            className="form-control"
          />
        </div>

        <button
          onClick={async () => {
            await actions.editContact(contact, id);
            navigate("/");
          }}
          type="submit"
          className={`btn mr-5 ${isEditing ? "btn-warning" : "btn-success"}`}
        >
          {isEditing ? "Edit" : "Save"}
        </button>
        <Link to="/">
          <button className="btn btn-success m-2">Back home</button>
        </Link>
      </div>
    </div>
  );
};
