import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (user) => {
  return (
    //   <tr key={user._id}>
    //     <td>{user.name}</td>
    //     <td>{user.qualitie}</td>
    //     <td>{user.profession}</td>
    //     <td>{user.completedMeetings}</td>
    //     <td>{user.rate}</td>
    //     <td>{user.bookmark}</td>
    //     <td>
    //       <button className='btn btn-danger'>delete</button>
    //     </td>
    //   </tr>
    <h3>User {user.name}</h3>
  );
};

export default User;
