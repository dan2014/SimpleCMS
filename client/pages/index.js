import React from 'react'
import Layout from "../components/layout"
import Link from 'next/link'
// import Nav from '../components/nav'

const Home = () => (
  <Layout title='Home'>
    <p>Test</p>
    <Link href='/resume'>
      <a>Resume</a>
    </Link>
  </Layout>
)

export default Home
