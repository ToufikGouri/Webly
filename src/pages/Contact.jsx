import { HomeIcon, MailIcon, PhoneIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import NewsLetter from '../myComponents/NewsLetter'
import Footer from '../myComponents/Footer'

const Contact = () => {

    useEffect(() => {
        document.title = "Contact | Webly"
    }, [])

    return (
        <>
            <section className='mt-[50px] flex flex-col justify-center items-center space-y-10'>
                <div className='w-11/12 md:w-4/5 mt-4 flex flex-col justify-center items-center space-y-4'>
                    <h1 className='uppercase text-3xl font-bold tracking-widest underline decoration-yellow-500'>Contact Us</h1>
                    <p className='text-center capitalize text-xl'>Either you want business enquiry, collab or any other query <br /> reach out to us by any method suitable to you easily! </p>

                    <div className='flex max-md:flex-col max-md:space-y-4 md:space-x-4'>
                        <div className='size-60 text-center rounded-xl bg-cardBg flex flex-col justify-center items-center space-y-4'>
                            <h3 className='flex items-center text-xl border-b border-yellow-500'><HomeIcon />&nbsp;OFFICE</h3>
                            <p>315 93rd somewhere, on Earth Right now, 11209</p>
                        </div>
                        <div className='size-60 text-center rounded-xl bg-cardBg flex flex-col justify-center items-center space-y-4'>
                            <h3 className='flex items-center text-xl border-b border-yellow-500'><PhoneIcon />&nbsp;CONTACT</h3>
                            <p><a href="tel:+91 8668437960">+91 8668437960</a></p>
                        </div>
                        <div className='size-60 text-center rounded-xl bg-cardBg flex flex-col justify-center items-center space-y-4'>
                            <h3 className='flex items-center text-xl border-b border-yellow-500'><MailIcon />&nbsp;EMAIL</h3>
                            <p><a href="mailto:toufikgouri2@gmail.com">toufikgouri2@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <NewsLetter />

                <Footer />

            </section>
        </>
    )
}

export default Contact