import React, { useEffect, useState } from 'react'
import { client } from '../myTools'
import CarouselBlogs, { CarouselBlogsSkeleton } from '../myComponents/CarouselBlogs'
import BlogCard, { BlogCardSkeleton } from '../myComponents/BlogCard'
import BlogCardFullSize, { BlogCardFullSizeSkeleton } from '../myComponents/BlogCardFullSize'
import NewsLetter from '../myComponents/NewsLetter'
import Footer from '../myComponents/Footer'
import Pagination from '../myComponents/Pagination'
import { useSearchParams } from 'react-router-dom'

const Blogs = () => {

    // Getting content by tags: 
    // metadata.tags.sys.id[all]: ["tag1", "tag2"]      (will only return content matching all given tags id)
    // metadata.tags.sys.id[in]: ["tag1", "tag2"]       (will return content matching any one of given tags id)
    // to get only for one tag, use any of them with direct tag id

    const [loadingAllBlog, setLoadingAllBlog] = useState(true)
    const [loadingTopBlog, setLoadingTopBlog] = useState(true)
    const [blogs, setBlogs] = useState(null)
    const [topBlogs, setTopBlogs] = useState(null)
    const [trendingBlogs, setTrendingBlogs] = useState(null)

    // for pagination 
    const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const limit = 9
    const skip = (page - 1) * limit

    const getAllBlogs = async () => {
        setLoadingAllBlog(true)
        document.title = "Blogs | Webly"
        await client.getEntries({
            content_type: "blogPage",
            skip,
            limit,
        })
            .then(val => setBlogs(val.items))
            .then(() => setLoadingAllBlog(false))
    }

    const getTopBlogs = async () => {
        await client.getEntries({
            content_type: "blogPage",
            "metadata.tags.sys.id[all]": "topBlog"
        })
            .then(val => setTopBlogs(val.items))
            .then(() => setLoadingTopBlog(false))
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

                {!loadingTopBlog ? <CarouselBlogs blogs={topBlogs} /> : <CarouselBlogsSkeleton />}

                {/* Trending cards */}
                <div className='w-11/12 md:w-4/5 flex flex-col justify-center items-center space-y-4'>
                    <h1 className='uppercase text-3xl font-bold tracking-widest border-b border-orange-500'>Trending Blogs</h1>
                    <div className='w-full grid gap-4'>
                        {!loadingTopBlog ?
                            trendingBlogs?.map(val => <BlogCardFullSize key={val.sys.id} blog={val} />)
                            : Array.from({ length: 3 }).map((_, ind) => <BlogCardFullSizeSkeleton key={ind} />)
                        }
                    </div>
                </div>

                {/* Blog cards */}
                <div id='AllBlogs' className='w-11/12 md:w-4/5 flex flex-col justify-center items-center space-y-4'>
                    <h1 className='uppercase text-3xl font-bold tracking-widest border-b border-orange-500'>Explore All</h1>
                    <div className='w-full grid md:grid-cols-3 gap-6'>
                        {!loadingAllBlog ?
                            blogs?.map(val => <BlogCard key={val.sys.id} blog={val} />)
                            : Array.from({ length: 9 }).map((_, ind) => <BlogCardSkeleton key={ind} />)}
                    </div>
                </div>

                <Pagination dataLength={blogs?.length} limit={limit} page={page} setPage={setPage} searchParams={searchParams} setSearchParams={setSearchParams} divId={"AllBlogs"} extraScrollTop={50} />

                <NewsLetter />

                <Footer />

            </section>
        </>
    )
}

export default Blogs