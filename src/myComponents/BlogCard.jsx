import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate, generateUrlSlug } from '../myTools'
import { CalendarFoldIcon, TimerIcon } from 'lucide-react'

const BlogCard = ({ blog }) => {

    const { title, image, minRead } = blog.fields

    const urlSlug = generateUrlSlug(title, blog.sys.id)
    
    return (
        <>
            <Link to={`/blogs/${urlSlug}`} className='min-h-96 max-md:mx-2 flex flex-col justify-between bg-cardBg rounded-xl overflow-hidden duration-200 hover:-translate-y-2'>
                <img src={image.fields.file.url} loading='lazy' alt={title} className='h-60 w-full object-cover object-center' />
                <h1 className='text-center text-xl capitalize'>{title.length <= 50 ? title : (title.slice(0, 50) + "...")}</h1>
                <div className='w-full flex justify-between p-2 text-white/50'>
                    <p className='flex items-center'><TimerIcon />&nbsp;{minRead} min read</p>
                    <p className='flex items-center'><CalendarFoldIcon />&nbsp;{formatDate(blog.sys.createdAt)}</p>
                </div>
            </Link>
        </>
    )
}

export default BlogCard

// Skeleton loading bg-white/10 animate-pulse rounded-xl 
export const BlogCardSkeleton = () => {
    return (
        <>
            {/* <div className='h-96 w-80 md:w-96 max-md:mx-2 flex flex-col justify-between bg-cardBg rounded-xl overflow-hidden duration-200 hover:-translate-y-2'> */}
            <div className='h-96 max-md:mx-2 flex flex-col justify-between bg-cardBg rounded-xl overflow-hidden duration-200 hover:-translate-y-2'>
                <div className='bg-white/10 animate-pulse h-60 w-full object-cover object-center' />
                <h1 className='bg-white/10 animate-pulse rounded-xl h-5 w-3/4 mx-auto capitalize'></h1>
                <h1 className='bg-white/10 animate-pulse rounded-xl h-3 w-3/4 mx-auto capitalize'></h1>

                <div className='w-full flex justify-between p-2 text-white/50'>
                    <p className='bg-white/10 animate-pulse rounded-xl h-3 w-20 flex items-center'></p>
                    <p className='bg-white/10 animate-pulse rounded-xl h-3 w-20 flex items-center'></p>
                </div>
            </div>
        </>
    )
}