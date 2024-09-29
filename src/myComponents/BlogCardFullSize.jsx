import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate, generateUrlSlug } from '../myTools'
import { CalendarFoldIcon, FlameIcon, TimerIcon } from 'lucide-react'

const BlogCardFullSize = ({ blog }) => {

    const { title, image, minRead } = blog.fields

    const urlSlug = generateUrlSlug(title, blog.sys.id)

    return (
        <>
            <Link to={`/blogs/${urlSlug}`} className='relative min-h-32 max-md:mx-2 flex bg-cardBg rounded-xl overflow-hidden duration-200 hover:translate-x-2'>
                <img src={image.fields.file.url} alt={title} className='h-32 md:h-48 w-2/5 object-cover object-center' />

                <div className='w-3/5 flex flex-col justify-between p-2'>
                    <div>
                        <div className='w-fit flex items-center p-1 px-2 mb-1 uppercase max-md:text-xs text-red-500 border border-red-500'>Trending <FlameIcon className='max-md:h-4' /> </div>
                        <h1 className='text-sm md:text-2xl font-semibold capitalize'>{title.length <= 50 ? title : (title.slice(0, 50) + "...")}</h1>
                    </div>
                    <div className='flex justify-between text-white/50 max-md:text-xs'>
                        <p className='flex items-center'><TimerIcon className='max-md:h-4' />&nbsp;{minRead} min read</p>
                        <p className='flex items-center'><CalendarFoldIcon className='max-md:h-4' />&nbsp;{formatDate(blog.sys.createdAt)}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogCardFullSize