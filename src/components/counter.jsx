import React from "react";

function Counter(user) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((item) => (
          <div key={item._id} className={`badge bg-${item.color} me-2`}>
            {item.name}
          </div>
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <button className='btn btn-danger'>
          <i className='bi bi-trash'></i>
        </button>
      </td>
    </tr>
  );
}

export default Counter;
