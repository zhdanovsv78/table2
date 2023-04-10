import React, { useState } from "react";
import Counter from "./counter";
import api from "../api";

function CounterLists() {
  const [users, setUsers] = useState(api.users.fetchAll());

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Встретился, раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Counter key={user._id} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CounterLists;
