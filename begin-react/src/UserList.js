import React, { useEffect } from 'react';

// function UserList() {
//   const users = [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ];
//   return (
//     <div>
//       <div>
//         <b>{users[0].username}</b> <span>({users[0].email})</span>
//       </div>
//       <div>
//         <b>{users[1].username}</b> <span>({users[1].email})</span>
//       </div>
//       <div>
//         <b>{users[2].username}</b> <span>({users[1].email})</span>
//       </div>
//     </div>
//   );
// }

// function User({ user }) {
//     return (
//       <div>
//         <b>{user.username}</b> <span>({user.email})</span>
//       </div>
//     );
//   }
  
//   function UserList() {
//     const users = [
//       {
//         id: 1,
//         username: 'velopert',
//         email: 'public.velopert@gmail.com'
//       },
//       {
//         id: 2,
//         username: 'tester',
//         email: 'tester@example.com'
//       },
//       {
//         id: 3,
//         username: 'liz',
//         email: 'liz@example.com'
//       }
//     ];
  
//     // return (
//     //   <div>
//     //     <User user={users[0]} />
//     //     <User user={users[1]} />
//     //     <User user={users[2]} />
//     //   </div>
//     // );
  

//     return (
//         <div>
//           {users.map(user => (
//             <User user={user} key={user.id} />
//           ))}
//         </div>
//       );
//     }

// function User({ user }) {
//     return (
//       <div>
//         <b>{user.username}</b> <span>({user.email})</span>
//       </div>
//     );
//   }
  
//   function UserList({ users }) {
//     return (
//       <div>
//         {users.map(user => (
//           <User user={user} key={user.id} />
//         ))}
//       </div>
//     );
//   }

// function User({ user, onRemove }) {
//   return (
//     <div>
//       <b>{user.username}</b> <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// function UserList({ users, onRemove }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User user={user} key={user.id} onRemove={onRemove} />
//       ))}
//     </div>
//   );
// }


// function User({ user, onRemove, onToggle }) {
//   return (
//     <div>
//       <b
//         style={{
//           cursor: 'pointer',
//           color: user.active ? 'green' : 'black'
//         }}
//         onClick={() => onToggle(user.id)}
//       >
//         {user.username}
//       </b>
//       &nbsp;
//       <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// function UserList({ users, onRemove, onToggle }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User
//           user={user}
//           key={user.id}
//           onRemove={onRemove}
//           onToggle={onToggle}
//         />
//       ))}
//     </div>
//   );
// }

//0204

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}







export default UserList;