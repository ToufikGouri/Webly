import React, { useEffect, useState } from 'react'
import { client } from '../myTools'
import BannerHome from '../myComponents/BannerHome'
import CarouselHome from '../myComponents/CarouselHome'

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const getAllBlogs = async () => {
        await client.getEntries({ content_type: "blogPage", limit: 8 })
            .then(val => setBlogs(val.items))
    }

    useEffect(() => {
        getAllBlogs()
    }, [])

    return (
        <>
            <main className='mt-[50px] flex flex-col justify-center items-center space-y-10'>
                {/* Hero banner */}
                <BannerHome />

                {/* Carousel */}
                <CarouselHome blogs={blogs?.slice(0, 3)} />

                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero necessitatibus facilis ab, minima officiis, quasi reiciendis at reprehenderit architecto, hic magni repudiandae cupiditate ut quia magnam fugiat aut! Eos!
                    Laudantium aspernatur laboriosam mollitia eum. Sapiente illo ipsum consequatur, at doloremque veniam, in ex maxime voluptatem libero nostrum? Sapiente dolor dolorem commodi accusamus vero eius, fugit ex provident unde dignissimos.
                    Aliquid dicta impedit molestias, repellat nesciunt odit corporis? Est eius veniam possimus harum beatae. Culpa, explicabo sequi placeat debitis porro non consequuntur blanditiis ab maxime tempora quos rerum maiores dignissimos!
                    Amet dolores distinctio rerum iure veniam, eius perferendis saepe voluptatibus fugiat tempora iste quo provident velit laudantium facere beatae quos optio ducimus temporibus labore pariatur modi ea delectus itaque. In.
                    Omnis nam eaque cum ea porro! Nobis eveniet amet sunt earum quidem, neque quas tempora, officia rem, vero nisi. Ab, quisquam distinctio facere delectus magnam rerum pariatur perspiciatis velit tempora?
                    Modi earum veritatis, quae alias aliquam voluptatem accusamus quibusdam temporibus, iste porro qui! Unde consectetur culpa deserunt delectus totam sint quos facilis? Illo vero eveniet voluptatem itaque, perferendis in. Tenetur.
                    Enim dolorem eligendi porro, necessitatibus cumque eum fugit. Hic perspiciatis nisi, eum dicta esse est dolores iste. Cumque, repellendus necessitatibus totam ipsa a illo nemo commodi veritatis vel corporis ipsum.
                    Voluptas quaerat tempora quas natus nihil optio aut in? Iure maxime facilis facere saepe aperiam. Rerum non doloremque modi ex! Quia eius iure eos pariatur, blanditiis porro? Cumque, ea animi?
                    Nostrum consequatur autem possimus libero, totam delectus, sint repudiandae laudantium facilis ab nihil qui pariatur repellat quia architecto molestiae harum aut aliquid eius tempore quam dolores. Fugiat quo tenetur eius.
                    Minima omnis voluptatibus eaque illum, vero pariatur fugiat quasi rerum delectus perferendis debitis commodi libero. Modi veniam ratione numquam illo fugiat incidunt saepe aut praesentium ex dolores, magnam consequuntur nobis.
                </div>

                {/* Trending */}
                {/* <section>
                    <h1 className='text-4xl capitalize font-bold border-b border-orange-500'>Trending this month</h1>
                </section> */}

            </main>
        </>
    )
}

export default Home