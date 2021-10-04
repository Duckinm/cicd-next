import Layout from 'components/Layouts/mainLayout'
import { ReactElement } from 'react'

const Home = () => {
  return <h1 className="badge badge-success text-lg">Hello World</h1>
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
export default Home
