import React, {useRef,useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


// function App() {
//   const name ='react';
//   const style = {
//     backgroundColor : 'black',
//     color:'aqua',
//     fontSize : 24,
//     padding : '1rem'
//   }
//   return (
//     <div>
//       <Hello />
//       <div style={style}>{name}</div>
//       <div className="gray-box"></div>
//     </div>
//   );

  
// }

// function App() {
//   return (
//     <Wrapper>
//     <Hello name="react" color="red"/>
//     <Hello color="pink"/>
//     </Wrapper>
//   );
// }

// function App() {
//   return (
//     <Wrapper>
//       <Hello name="react" color="red" isSpecial={true}/>
//       <Hello color="pink" />
//     </Wrapper>
//   )
// }

// function App() {
//   return (
//     <Counter />
//   );
// }

// 0201

// function App() {
//   return (
//     <InputSample />
//   );
// }

// function App() {
//   return (
//     <UserList />
//   );
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
//   const [users, setUsers] = useState([
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
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers([...users, user]);

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   };
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} />
//     </>
//   );
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
//   const [users, setUsers] = useState([
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
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   };
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} />
//     </>
//   );
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
//   const [users, setUsers] = useState([
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
//   ]);

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   };

//   const onRemove = id => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // = user.id 가 id 인 것을 제거함
//     setUsers(users.filter(user => user.id !== id));
//   };
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} />
//     </>
//   );
// }

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
