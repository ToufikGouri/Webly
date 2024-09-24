import React, { useEffect, useState } from 'react'
import { generateUrlSlug, getBlogById } from '../myTools'
import { Link } from 'react-router-dom'
import { TimerIcon } from 'lucide-react'

const BannerHome = () => {

    let heroBlogId = "2GjO4vWCv54Gm8UNzsNSXB"
    const [heroBlog, setHeroBlog] = useState(null)

    useEffect(() => {
        getBlogById(heroBlogId)
            .then(val => setHeroBlog(val))
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
                <div className="contentSide md:w-2/4 max-md:py-8 bg-linearBlueBg flex flex-col justify-center items-center space-y-4 px-10">
                    <h1 className='text-3xl md:text-5xl font-bold capitalize text-center'>{heroBlog?.title}</h1>
                    <p className='md:text-xl flex items-center'><TimerIcon />&nbsp;{heroBlog?.minRead} min read</p>
                    <Link to={`/blogs/${urlSlug}`} className='p-1 px-4 rounded-md border border-primaryGrey hover:bg-white/10'>Check out</Link>
                </div>
            </section>
        </>
    )
}

export default BannerHome