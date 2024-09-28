import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from 'react-router-dom'
import { generateUrlSlug } from '../myTools'
import { TimerIcon, FlameIcon } from 'lucide-react'

const CarouselHome = ({ blogs }) => {

    return (
        <>
            <section className='w-full md:w-4/5 flex flex-col justify-center items-center space-y-4'>

                <h1 className='uppercase text-3xl font-bold tracking-widest border-b border-orange-500'>Hot Topics</h1>

                <Carousel opts={{ align: "start" }} className="w-11/12 md:w-full">
                    <CarouselContent>
                        {blogs?.map(val =>
                            <CarouselItem key={val.sys.id} className="basis-4/5 md:basis-1/2">

                                <Link
                                    to={`/blogs/${generateUrlSlug(val.fields.title, val.sys.id)}`}
                                    className='relative flex max-md:flex-col bg-cardBg rounded-xl overflow-hidden hover:bg-white/10'
                                >
                                    <img src={val.fields.image.fields.file.url} alt={val.fields.title} className='h-64 md:h-80 w-full md:w-2/4 object-cover object-center' />
                                    <div className='flex flex-col justify-center md:items-center md:text-center space-y-4 px-2 min-h-32 max-md:p-4'>
                                        <h1 className='text-xl md:text-2xl'>{val.fields.title}</h1>
                                        <p className='flex items-center max-md:text-sm'><TimerIcon />&nbsp;{val.fields.minRead} min read</p>
                                    </div>
                                    <div className='text-xl size-40 flex justify-center items-end rotate-45 absolute -top-24 -right-24 bg-red-600'>
                                        <span className='flex mb-1'>Hot <FlameIcon /></span>
                                    </div>

                                </Link>

                            </CarouselItem>
                        )}
                    </CarouselContent>

                    <CarouselPrevious className="text-black max-md:hidden" />
                    <CarouselNext className="text-black max-md:hidden" />
                </Carousel>
            </section>
        </>
    )
}

export default CarouselHome