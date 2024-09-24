import React, { useEffect, useState } from 'react'
import { client } from '../myTools'
import BannerHome from '../components/BannerHome'

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const getAllBlogs = async () => {
        await client.getEntries({ content_type: "blogPage" })
            .then(val => setBlogs(val.items))
    }

    useEffect(() => {
        getAllBlogs()
    }, [])

    return (
        <>
            <main className='mt-[50px] flex flex-col justify-center items-center'>
                {/* Hero banner */}
                <BannerHome />

                <div>
                    Blogs count {blogs?.length}
                </div>

            </main>
        </>
    )
}

export default Home