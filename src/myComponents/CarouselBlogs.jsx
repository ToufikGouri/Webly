import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from 'react-router-dom'
import { generateUrlSlug } from '../myTools'
import { TimerIcon } from 'lucide-react'

const CarouselBlogs = ({ blogs }) => {

    return (
        <>
            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                <CarouselContent>
                    {blogs?.map(val =>
                        <CarouselItem key={val.sys.id}>

                            <Link
                                to={`/blogs/${generateUrlSlug(val.fields.title, val.sys.id)}`}
                                className='w-full h-[60vh] flex max-md:flex-col rounded-xl overflow-hidden text-yellow-500'
                            >
                                <div className='imageSide md:w-2/4 max-md:h-2/4'>
                                    <img src={val.fields.image.fields.file.url} alt={val.fields.title} className='object-cover object-center size-full' />
                                </div>
                                <div className="contentSide md:w-2/4 max-md:h-2/4 max-md:py-8 bg-linearBlueBg flex flex-col justify-center md:items-center space-y-4 px-10">
                                    <h1 className='text-3xl md:text-5xl font-bold capitalize md:text-center'>{val.fields.title}</h1>
                                    <p className='md:text-xl flex items-center'><TimerIcon />&nbsp;{val.fields.minRead} min read</p>
                                </div>
                            </Link>

                        </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default CarouselBlogs

// Skeleton loading
export const CarouselBlogsSkeleton = () => {
    return (
        <>
            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                <CarouselContent>
                    {[1, 2, 3]?.map(val =>
                        <CarouselItem key={val}>
                            <div
                                className='w-full h-[60vh] flex max-md:flex-col rounded-xl overflow-hidden text-yellow-500'
                            >
                                <div className='imageSide md:w-2/4 max-md:h-2/4'>
                                    <div className='bg-white/10 animate-pulse object-cover object-center size-full' />
                                </div>
                                <div className="contentSide md:w-2/4 max-md:h-2/4 max-md:py-8 bg-linearBlueBg flex flex-col justify-center md:items-center space-y-4 px-10">
                                    <h1 className='bg-white/10 animate-pulse rounded-xl h-8 w-3/4 font-bold capitalize md:text-center'></h1>
                                    <h1 className='bg-white/10 animate-pulse rounded-xl h-8 w-3/4 font-bold capitalize md:text-center'></h1>
                                    <p className='bg-white/10 animate-pulse rounded-xl h-5 w-2/4 flex items-center'></p>
                                </div>
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
        </>
    )
}