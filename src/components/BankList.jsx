import React from "react";
import { useEffect, useState } from "react";

function BankList() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(transactions);
  return (
    <table className="BankList">
      <thead>
        <tr>
          <th className="DateList">
            <h2>Date</h2>
          </th>
          <th className="DescriptionList">
            <h2>Description</h2>
          </th>
          <th className="CategoryList">
            <h2>Category</h2>
          </th>
          <th className="AmountList">
            <h2>Amount</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((data, id) => (
          <tr key={id}>
            <td>{data.date}</td>
            <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BankList;
