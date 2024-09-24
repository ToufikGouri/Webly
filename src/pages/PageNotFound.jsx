import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
            <section className='h-screen w-full flex flex-col justify-center items-center'>
                <h1 className='text-5xl'>404</h1>
                <p className='text-2xl mb-2'>Page not found</p>
                <p>It looks like you are lost! click here to go <Link to="/" className='border-b'>Home</Link></p>
            </section>
        </>
    )
}

export default PageNotFound