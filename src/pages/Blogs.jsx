import React, { useEffect, useState } from 'react'
import { client } from '../myTools'
import CarouselBlogs from '../myComponents/CarouselBlogs'
import BlogCard from '../myComponents/BlogCard'
import BlogCardFullSize from '../myComponents/BlogCardFullSize'
import NewsLetter from '../myComponents/NewsLetter'
import Footer from '../myComponents/Footer'
import Pagination from '../myComponents/Pagination'
import { useSearchParams } from 'react-router-dom'

const Blogs = () => {

    // Getting content by tags: 
    // metadata.tags.sys.id[all]: ["tag1", "tag2"]      (will only return content matching all given tags id)
    // metadata.tags.sys.id[in]: ["tag1", "tag2"]       (will return content matching any one of given tags id)
    // to get only for one tag, use any of them with direct tag id

    const [blogs, setBlogs] = useState(null)
    const [topBlogs, setTopBlogs] = useState(null)
    const [trendingBlogs, setTrendingBlogs] = useState(null)

    // for pagination 
    const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const limit = 9
    const skip = (page - 1) * limit

    const getAllBlogs = async () => {
        await client.getEntries({
            content_type: "blogPage",
            skip,
            limit,
        })
            .then(val => setBlogs(val.items))
    }

    const getTopBlogs = async () => {
        await client.getEntries({
            content_type: "blogPage",
            "metadata.tags.sys.id[all]": "topBlog"
        })
            .then(val => setTopBlogs(val.items))
    }

    const getTrendingBlogs = async () => {
        await client.getEntries({
            content_type: "blogPage",
            "metadata.tags.sys.id[all]": "trendingBlog"
        })
            .then(val => setTrendingBlogs(val.items))
    }

    useEffect(() => {
        getTopBlogs()
        getTrendingBlogs()
    }, [])

    useEffect(() => {
        getAllBlogs()
    }, [page])


    return (
        <>
            <section className='mt-[50px] flex flex-col justify-center items-center space-y-10'>

                <CarouselBlogs blogs={topBlogs} />

                {/* Trending cards */}
                <div className='w-11/12 md:w-4/5 flex flex-col justify-center items-center space-y-4'>
                    <h1 className='uppercase text-3xl font-bold tracking-widest border-b border-orange-500'>Trending Blogs</h1>
                    <div className='w-full grid gap-4'>
                        {trendingBlogs?.map(val =>
                            <BlogCardFullSize key={val.sys.id} blog={val} />
                        )}
                    </div>
                </div>

                {/* Blog cards */}
                <div className='w-11/12 md:w-4/5 flex flex-col justify-center items-center space-y-4'>
                    <h1 className='uppercase text-3xl font-bold tracking-widest border-b border-orange-500'>Explore All</h1>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {blogs?.map(val =>
                            <BlogCard key={val.sys.id} blog={val} />
                        )}
                    </div>
                </div>

                <Pagination dataLength={blogs?.length} limit={limit} page={page} setPage={setPage} searchParams={searchParams} setSearchParams={setSearchParams} />

                <NewsLetter />

                <Footer />

            </section>
        </>
    )
}

export default Blogs