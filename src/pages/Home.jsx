import React, { useEffect, useState } from 'react'
import { client } from '../myTools'
import BannerHome, { BannerHomeSkeleton } from '../myComponents/BannerHome'
import CarouselHome, { CarouselHomeSkeleton } from '../myComponents/CarouselHome'
import BlogCard, { BlogCardSkeleton } from '../myComponents/BlogCard'
import NewsLetter from '../myComponents/NewsLetter'
import Footer from '../myComponents/Footer'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from 'lucide-react'
import HeroImage from "../assets/HeroHome.webp"

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    const getAllBlogs = async () => {
        await client.getEntries({ content_type: "blogPage", limit: 9 })
            .then(val => setBlogs(val.items))
            .then(() => setLoading(false))
        document.title = "Webly"
    }

    useEffect(() => {
        getAllBlogs()
    }, [])

    return (
        <>
            <main className='mt-[50px] flex flex-col justify-center items-center space-y-10'>
                {!loading ? <BannerHome /> : <BannerHomeSkeleton />}

                {!loading ? <CarouselHome blogs={blogs?.slice(0, 3)} /> : <CarouselHomeSkeleton />}

                {/* Blog cards */}
                <section className='w-11/12 md:w-4/5 flex flex-col justify-center items-center space-y-4'>
                    <h1 className='uppercase text-3xl font-bold tracking-widest border-b border-orange-500'>Latest Blogs</h1>
                    <div className='w-full grid md:grid-cols-3 gap-6'>
                        {!loading ?
                            blogs?.slice(3).map(val => <BlogCard key={val.sys.id} blog={val} />)
                            : Array.from({ length: 6 }).map((_, ind) => <BlogCardSkeleton key={ind} />)}
                    </div>

                    <Link to="/blogs" className='text-xl hover:text-orange-500 flex items-center'>Explore more on blogs <ArrowUpRightIcon /> </Link>
                </section>

                {/* Mid image section */}
                <section className='relative w-11/12 md:w-4/5 flex max-lg:flex-col-reverse justify-between items-center space-y-4'>
                    <img src={HeroImage} alt="Webly"
                        className='md:h-[75vh] object-contain rounded-xl'
                    />

                    <div className='textClipBg max-md:pb-2 w-full text-xl md:text-3xl tracking-widest font-bold text-center uppercase space-y-1'>
                        <h3>Level Up Your <br /> Game With </h3>
                        <h1 className='text-5xl md:text-6xl'>Webly</h1>
                        <h3>Inspiring 50k+ <br /> Developers Globally </h3>
                        <p className='text-xs md:text-base pt-2 md:pt-6'>Stay tuned for future updates</p>
                    </div>
                </section>

                <NewsLetter />

                <Footer />

            </main>
        </>
    )
}

export default Home