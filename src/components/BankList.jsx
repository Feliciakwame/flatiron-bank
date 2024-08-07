import React from "react";

function BankList() {
  return (
    <div>
      <table className="BankList">
        <tr>
          <th>
            <h2>
              <strong>Date</strong>
            </h2>
          </th>
          <th>
            <h2>Description</h2>
          </th>
          <th>
            <h2>Category</h2>
          </th>
          <th>
            <h2>Amount</h2>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default BankList;
