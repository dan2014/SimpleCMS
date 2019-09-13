import React from 'react'
import Head from 'next/head'

const Resume = () => (
    <>
        <Head>
            <title>Resume</title>
            <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='preload' as='font'/>
            <link rel='stylesheet' href='/static/resume.css'/>
            <link rel='icon' href='/static/logo.ico' sizes='256x256 128x128 96x96 64x64 48x48 32x32 16x16'/>
        </Head>
        <div class='resume'>
            <header>
                <h1 class='name'>Daniel Edward Mendez</h1>
                <div class='contact-container'>
                    <span>dan@danielmendez.dev</span>
                    <span>danielmendez.dev</span>
                </div>
            </header>
            <hr/>
            <main>
                <section>
                    <h4>Experience</h4>
                </section>
                <section>
                    <h4>Education</h4>
                    <ul>
                        <li>Lambda School</li>
                        <li>The Citadel, Military College of South Carolina</li>
                    </ul>
                </section>
                <section>
                    <h4>Leadership</h4>
                </section>
                <section>
                    <h4>Skills</h4>
                </section>
            </main>
        </div>
    </>
)

export default Resume
