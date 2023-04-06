import React, { useContext } from "react";
import { DaoFactoryContext } from "../contexts/DaoFactoryContext";
import { EthContext } from "../contexts/EthContext";

function AdminDashboard() {
  const { state: daoFactoryState } = useContext(DaoFactoryContext);
  const { state: ethState } = useContext(EthContext);

  // DAOS CREES PAR ADMIN
  const adminDaos = daoFactoryState.daos.filter(
    (dao) => dao.creator === ethState.accounts[0]
  );

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {adminDaos.map((dao) => (
        <div key={dao.address}>
          <p>Name: {dao.name}</p>
          <p>Description: {dao.description}</p>
          <p>Address: {dao.address}</p>
          {/* +++ */}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
