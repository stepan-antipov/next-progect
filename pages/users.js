import React from 'react';
import Link from 'next/link';
import MainContainer from '../Components/MainContainer';

const Users = ({users}) => {


  return (
      <MainContainer keywords={'users next js'}>
          <h1>
            Список пользователей
          </h1>
          <ul>
            {
              users.map(user =>
                <li key={user.id}>
                  <Link href={`/users/${user.id}`}>
                    <span>
                      {user.name}
                    </span>
                  </Link>
                </li>
              )
            }
          </ul>
      <style jsx>
          {`
        h1 {
          margin-bottom: 10px;
        }
      `}
        </style> 
    </MainContainer>
    
  )
}

export default Users

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  return {
    props: {users},
  }
}