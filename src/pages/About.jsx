import React from 'react'
import Footer from '../myComponents/Footer'
import NewsLetter from '../myComponents/NewsLetter'
import HeroImage1 from "../assets/HeroAbout1.png"
import HeroImage2 from "../assets/HeroAbout2.png"

const About = () => {
    return (
        <>
            <section className='mt-[50px] flex flex-col justify-center items-center space-y-10'>

                <div className='w-11/12 md:w-3/5 mt-4 space-y-6'>
                    <h1 className='text-3xl font-semibold underline text-center decoration-yellow-500'>About Webly</h1>
                    <p>
                        Welcome to Webly, your go-to destination for everything related to web development! We’re passionate about helping you navigate
                        the ever-evolving tech landscape with insightful articles, practical tutorials, and the latest trends in the industry.
                    </p>

                    <h1 className='text-3xl font-semibold underline text-center decoration-yellow-500'>What You Can Explore</h1>
                    <div className='flex max-md:flex-col'>
                        <div className='md:w-2/4 [&_h3]:text-xl [&_h3]:font-medium space-y-2'>
                            <h3>Frontend Development</h3>
                            <p>Transform ideas into stunning visuals. Discover techniques for crafting responsive, user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like React, Next, Vue etc.</p>

                            <h3>Backend Development</h3>
                            <p>Get behind the scenes of web applications. Learn server-side programming with Node.js, Express, and dive into effective database management with SQL and NoSQL.</p>

                            <h3>Full-Stack Development</h3>
                            <p>Become a versatile developer. Master the art of building complete applications by integrating frontend and backend skills, from creating APIs to deployment.</p>

                            <h3>Emerging Tools & Technologies</h3>
                            <p>Stay ahead of the curve! Explore the latest tools and libraries that are shaping web development and discover how they can enhance your workflow.</p>

                            <h3>Career Development</h3>
                            <p>Take charge of your career path. Access insights, resources, and practical advice to elevate your skills and achieve your professional goals in tech.</p>
                        </div>
                        <div className='md:w-2/4 flex justify-center'>
                            <img src={HeroImage2} alt="" className='h-60 md:h-96' />
                        </div>
                    </div>

                    <h1 className='text-3xl font-semibold underline text-center decoration-yellow-500'>Why Webly?</h1>
                    <div className='flex max-md:flex-col'>
                        <p className='md:w-2/4 '>
                            At Webly, we believe in making learning interactive and enjoyable. Our content is designed to not only inform but also inspire you to apply what you learn.
                            Join us as we break down complex topics into actionable insights and real-world applications.
                            We focus on clarity, ensuring that you understand the "why" behind every concept, and we keep pace with the latest trends so you always stay informed.
                            More than just a blog, Webly is a community where developers connect, share ideas, and grow together.
                        </p>
                        <div className='md:w-2/4 flex justify-center'>
                            <img src={HeroImage1} alt="" className='h-60 md:h-96' />
                        </div>
                    </div>

                    <h1 className='text-3xl font-semibold underline text-center decoration-yellow-500'>Be Part of Our Community</h1>
                    <p>
                        We’re more than just a blog — we’re a community of passionate developers! Engage with us through comments, share your thoughts, and connect with fellow tech enthusiasts.
                        Have ideas or topics you’d like to see? We’d love to hear from you!
                    </p>
                </div>

                <NewsLetter />

                <Footer />

            </section>
        </>
    )
}

export default About