import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { client, formatDate } from '../myTools'
import { CalendarFoldIcon, SquarePenIcon, TimerIcon } from 'lucide-react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Footer from '../myComponents/Footer'
import NewsLetter from '../myComponents/NewsLetter'
import BlogCard from '../myComponents/BlogCard'

const BlogSingle = () => {

    const { slug } = useParams()
    const id = slug.split("-").at(-1)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [recommendedBlogs, setRecommendedBlogs] = useState(null)
    const [createdAt, setCreatedAt] = useState("")
    const [updatedAt, setUpdatedAt] = useState("")

    const getBlog = async () => {
        await client.getEntry(id)
            .then(val => {
                setBlog(val.fields)
                setCreatedAt(val.sys.createdAt)
                setUpdatedAt(val.sys.updatedAt)
            })
            .then(() => setLoading(false))
            .catch((err) => navigate("/404"))
    }

    const getRecommendedBlogs = async () => {
        const blogs = await client.getEntries({
            content_type: "blogPage",
        })
        const tempBlogs = new Set()

        while (tempBlogs.size < 3) {
            const randomIdx = Math.floor(Math.random() * blogs?.items.length)
            tempBlogs.add(blogs?.items[randomIdx])
        }

        setRecommendedBlogs(Array.from(tempBlogs))
    }

    const bodyOptions = {
        renderNode: {
            // Handle headings
            [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-4">{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-semibold mb-3">{children}</h3>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-semibold mb-3">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-medium mb-2">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-medium mb-2">{children}</h6>,

            // Handle paragraphs
            [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,

            // Handle code blocks
            [BLOCKS.CODE]: (node) => (
                <pre className="bg-gray-100 p-4 rounded">
                    <code>{node.content[0].value}</code>
                </pre>
            ),

            // Handle ordered and unordered lists
            [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc mb-4">{children}</ul>,
            [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal mb-4">{children}</ol>,
            [BLOCKS.LIST_ITEM]: (node, children) => <li className="ml-4 mb-2">{children}</li>,

            // Handle hyperlinks
            [INLINES.HYPERLINK]: (node, children) => (
                <a href={node.data.uri} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            ),

            // Handle bold inline text
            [INLINES.BOLD]: (node, children) => <strong>{children}</strong>,

            // Handle text inline (default)
            [BLOCKS.TEXT]: (node, children) => <span>{children}</span>
        }
    };

    useEffect(() => {
        getBlog()
        getRecommendedBlogs()
        window.scrollTo({ top: 0, behavior: "smooth" })
        document.title = `${slug.split("-").slice(0, -1).join(" ")} | Webly`
    }, [slug])

    return (
        <>
            {!loading ?
                <section className='mt-[50px] flex flex-col justify-center items-center space-y-10'>
                    <article className='w-11/12 md:w-3/5 flex flex-col justify-center items-center mt-4 space-y-4'>
                        {/* title */}
                        <h1 className='text-4xl font-bold text-center capitalize'>{blog?.title}</h1>
                        {/*  details */}
                        <div className='max-md:w-full flex max-md:justify-between md:space-x-10 text-xs md:text-sm text-white/50'>
                            <p className='flex items-center'><TimerIcon height={16} />&nbsp;{blog?.minRead} min read</p>
                            <p className='flex items-center'><CalendarFoldIcon height={16} className='max-md:h-4' />&nbsp;{formatDate(createdAt)}</p>
                            {createdAt !== updatedAt &&
                                <p className='flex items-center'><SquarePenIcon height={16} />&nbsp;Updated {formatDate(updatedAt)}</p>
                            }
                        </div>
                        {/* image */}
                        {blog?.image.fields.file.url &&
                            <img src={blog?.image.fields.file.url} alt={blog?.title} className='min-h-60 max-h-96' />
                        }
                        {/* body */}
                        <div className='p-4 w-full break-words rounded-xl bg-cardBg/50'>
                            {documentToReactComponents(blog?.body, bodyOptions)}
                        </div>
                    </article>

                    {/* Recommended blogs */}
                    <h1 className='uppercase text-3xl font-bold tracking-widest border-b border-orange-500'>Recommended</h1>
                    <div className='w-11/12 md:w-4/5 grid md:grid-cols-3 gap-6'>
                        {
                            recommendedBlogs?.map(val =>
                                <BlogCard key={val.sys.id} blog={val} />
                            )
                        }
                    </div>

                    <NewsLetter />

                    <Footer />

                </section >
                :   // Skeleton loading 
                <section className='mt-[50px] flex flex-col justify-center items-center space-y-10'>
                    <article className='w-11/12 md:w-3/5 flex flex-col justify-center items-center mt-4 space-y-4'>
                        {/* title */}
                        <h1 className='bg-white/10 animate-pulse rounded-xl h-9 w-full md:w-3/4 font-bold capitalize'></h1>
                        {/*  details */}
                        <div className='max-md:w-full flex max-md:justify-between md:space-x-10 text-xs md:text-sm text-white/50'>
                            <p className='bg-white/10 animate-pulse rounded-xl h-5 w-24 flex items-center'></p>
                            <p className='bg-white/10 animate-pulse rounded-xl h-5 w-24 flex items-center'></p>
                            <p className='bg-white/10 animate-pulse rounded-xl h-5 w-24 flex items-center'></p>
                        </div>
                        {/* image */}
                        <div className='bg-white/10 animate-pulse rounded-xl w-full h-60 md:h-96' />

                        {/* body */}
                        <div className='bg-cardBg/50 animate-pulse rounded-xl w-full h-screen p-4'></div>
                    </article>
                    <NewsLetter />
                    <Footer />
                </section>
            }
        </>
    )
}

export default BlogSingle