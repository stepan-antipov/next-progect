import { useRouter } from 'next/router'
import MainContainer from '../../Components/MainContainer'


export default function ({ user }) {
  const { query } = useRouter()

  return (
    <MainContainer keywords={user.name}>
      <h1>
        Пользователь c id {query.id}
      </h1>
      <div>Имя пользователя = {user.name}</div>
      <div>Email пользователя = {user.email}</div>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()
  return {
    props: { user },
  }
}