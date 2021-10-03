import { ReactElement } from 'react'

const Home = () => {
  return <div>Hello World</div>
}

Home.getLayout = (page: ReactElement) => <div>{page}</div>
export default Home
