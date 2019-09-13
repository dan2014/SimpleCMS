import Head from 'next/head'
import React from 'react'

const Layout = props => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel='stylesheet' href='/static/index.css'/>
                <link rel='icon' href='/static/logo.ico' sizes='256x256 128x128 96x96 64x64 48x48 32x32 16x16'/>
            </Head>
            <header>
                <div class='container'>
                    <img src='/static/logo.svg' />
                </div>
            </header>
            
            <main>
                {props.children}
            </main>
            <footer>
                <div class='container'>
                    Daniel Mendez 2019
                </div>
            </footer>
        </>
    )
}

export default Layout