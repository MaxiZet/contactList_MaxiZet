import { CreateContact } from "../views/createContact";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
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

      getContacts: async () => {
        const resp = await fetch(process.env.BACKEND_URL + "agendas/maxizet");
        if (!resp.ok) {
          const actions = getActions();
          await actions.createAgenda();
          return;
        }
        const data = await resp.json();
        console.log(data);
        setStore({ contacts: data.contacts });
      },

      createContact: async (newContact) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const resp = await fetch(
          process.env.BACKEND_URL + "agendas/maxizet/contacts",
          {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(newContact),
          }
        );
        if (resp.ok) {
          await getActions().getContacts();
        }
      },

      createAgenda: async () => {
        try {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const resp = await fetch(
            process.env.BACKEND_URL + "agendas/maxizet",
            {
              method: "POST",
              headers: myHeaders,
            }
          );
          if (resp.status == 201) {
            await getActions().getContacts();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      editContact: async (contact, id) => {
        try {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const resp = await fetch(
            `${process.env.BACKEND_URL}agendas/maxizet/contacts/${id}`,
            {
              method: "PUT",
              headers: myHeaders,
              body: JSON.stringify(contact),
            }
          );
          if (resp.ok) {
            await getActions().getContacts();
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      deleteContact: async (newContact_id) => {
        try {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const resp = await fetch(
            `${process.env.BACKEND_URL}agendas/maxizet/contacts/${newContact_id}`,
            {
              method: "DELETE",
              // headers: myHeaders,
              // body: JSON.stringify(newContact),
            }
          );
          if (resp.ok) {
            await getActions().getContacts();
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    },
  };
};

export default getState;
