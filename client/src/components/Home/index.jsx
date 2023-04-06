import React, { useState, useContext, useEffect, useCallback } from "react";
import { DaoFactoryContext, setNewDaoAddress } from "../contexts/DaoFactoryContext";
import useNewDaoContext from "../contexts/NewDaoContext/useNewDaoContext";

function Home() {
  const { state, dispatch } = useContext(DaoFactoryContext);
  const { state: newDaoState } = useNewDaoContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateDao = useCallback(async (event) => {
    event.preventDefault();
    try {
      const accounts = await state.web3.eth.getAccounts();
      const createDaoResult = await state.contract.methods
        .createDao(name, description)
        .send({ from: accounts[0] });
      console.log("New DAO created at address:", createDaoResult.events.DaoCreated.returnValues.dao);
      const dao = {
        address: createDaoResult.events.DaoCreated.returnValues.dao,
        name: name,
        description: description,
      };
      dispatch({ type: "addDao", dao: dao });
    } catch (error) {
      console.error(error);
    }
  }, [name, description, state.contract, state.web3.eth, dispatch]);

  useEffect(() => {
    const listenDaoCreatedEvent = async () => {
      try {
        state.contract.events.DaoCreated({}, (error, event) => {
          if (error) console.error(error);
          else {
            console.log(`New DAO created: ${event.returnValues.dao} by ${event.returnValues.creator}`);
            dispatch(setNewDaoAddress(event.returnValues.dao));
          }
        });
      } catch (err) {
        console.error(err);
      }
    };
    listenDaoCreatedEvent();
  }, [state.contract, dispatch]);

  return (
    <div>
      <form onSubmit={handleCreateDao}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create DAO</button>
      </form>
      <ul>
        {state.daos.map((dao) => (
          <li key={dao.address}>
            <p>Name: {dao.name}</p>
            <p>Description: {dao.description}</p>
            <p>Address: {dao.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

