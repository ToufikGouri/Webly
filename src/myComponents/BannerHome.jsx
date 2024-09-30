import React, { useEffect, useState } from 'react'
import { client, generateUrlSlug } from '../myTools'
import { Link } from 'react-router-dom'
import { TimerIcon } from 'lucide-react'

const BannerHome = () => {

    const [heroBlog, setHeroBlog] = useState(null)
    const [heroBlogId, setHeroBlogId] = useState(null)

    const getHeroBlog = async () => {
        await client.getEntries({
            content_type: "blogPage",
            "metadata.tags.sys.id[all]": "homeHeroBlog",
        })
            .then(val => {
                setHeroBlog(val.items[0].fields)
                setHeroBlogId(val.items[0].sys.id)
            })
    }

    useEffect(() => {
        getHeroBlog()
    }, [])

    const urlSlug = generateUrlSlug(heroBlog?.title, heroBlogId)

    return (
        <>
            <section className='w-full md:min-h-[60vh] md:flex bg-cardBg'>
                {/* Image side */}
                <div className="imageSide md:w-2/4">
                    <img src={heroBlog?.image.fields.file.url}
                        alt={heroBlog?.title}
                        className='object-cover object-center size-full'
                    />
                </div>
                {/* Content side */}
                <div className="contentSide md:w-2/4 max-md:py-8 bg-linearBlueBg flex flex-col justify-center md:items-center space-y-4 px-10">
                    <h1 className='text-3xl md:text-5xl font-bold capitalize md:text-center'>{heroBlog?.title}</h1>
                    <p className='md:text-xl flex items-center'><TimerIcon />&nbsp;{heroBlog?.minRead} min read</p>
                    <Link to={`/blogs/${urlSlug}`} className='p-1 px-4 rounded-md border border-primaryGrey hover:bg-white/10 text-center'>Check out</Link>
                </div>
            </section>
        </>
    )
}

export default BannerHome

// Skeleton loading
export const BannerHomeSkeleton = () => {
    return (
        <>
            <section className='w-full md:h-[60vh] md:flex bg-cardBg'>
                {/* Image side */}
                <div className="imageSide bg-white/10 animate-pulse max-md:h-60 md:w-2/4"></div>
                {/* Content side */}
                <div className="contentSide md:w-2/4 max-md:py-8 bg-linearBlueBg flex flex-col justify-center md:items-center space-y-4 px-10">
                    <h1 className='bg-white/10 animate-pulse rounded-xl h-8 md:h-12 w-3/4 font-bold capitalize md:text-center'></h1>
                    <p className='bg-white/10 animate-pulse rounded-xl h-5 w-2/4 flex items-center'></p>
                    <p className='bg-white/10 animate-pulse rounded-xl h-8 w-20 border border-primaryGrey hover:bg-white/10 text-center'></p>
                </div>
            </section>
        </>
    )
}