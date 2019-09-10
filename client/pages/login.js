import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Home = () => {
    const [creds,setCreds] = useState({username:'',password:''})

    const formChange = (event) => {
        console.log(event.target)
        setCreds({...creds,[event.target.name]:event.target.value})
    }

    const formSubmit = async (event) => {
        console.log(event.target)
        try{
            const res = await fetch('http://localhost:5000')
            console.log(res)
        }catch(e){
            console.log(e)
        }
    }

useEffect(() => {
    console.log(creds)
},[creds])

return (
  <div>
    <Head>
      <title>Login</title>
    </Head>

    <form>
        <label>Username</label>
        <input onChange={formChange} name='username' type='text'/>
        <label>Password</label>
        <input onChange={formChange} name='password' type='password'/>
        <button type='submit'>Submit</button>
    </form>

    <style jsx>{`

      input {
        display: block;
      }
      
    `}</style>
  </div>
)}

export default Home
