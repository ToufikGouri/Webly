import React, { useState } from 'react'
import { managementClient } from '../myTools'
import { toast } from 'sonner'

const NewsLetter = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formattedEmail = email.trim().toLowerCase()
        let emailEntry;     // created email in contentful
        toast.loading("Just a moment...")

        try {
            // contentful management api call for Space & Environmentyy
            const space = await managementClient.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
            const environment = await space.getEnvironment("master")

            // creating entry for email
            emailEntry = await environment.createEntry("weblySubscribers", {
                fields: {
                    email: {
                        'en-US': formattedEmail
                    }
                }
            })
            // publishing changes in contentful
            await emailEntry.publish()
            setEmail("")
            toast.dismiss()
            toast.success("Subscribed Successfully")

        } catch (error) {
            const message = JSON.parse(error.message)
            let errorMessage;

            // switch case for error type
            switch (message?.details?.errors[0].name) {
                case "regexp":
                    errorMessage = "Email Is Not Valid"
                    break
                case "unique":
                    errorMessage = "Email Already Exists"
                    break;
                default:
                    errorMessage = "Something Went Wrong"
            }

            // delete the entry if not valid
            await emailEntry.delete()
            toast.dismiss()
            toast.error(errorMessage)
        }
    }

    return (
        <>
            <section className='w-11/12 md:w-4/5 flex flex-col justify-center items-center space-y-4'>
                <h1 className='uppercase text-xl font-bold tracking-widest border-b border-orange-500'>Never miss an update!</h1>
                <form onSubmit={handleSubmit}>
                    <p className='capitalize text-center font-semibold mb-2'>Be the First to Know—Exclusive Updates, Right in Your Inbox!</p>
                    <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} className='w-full md:w-96 p-2 bg-transparent border border-primaryGrey outline-none' placeholder='your@email.com' />
                    <button type='submit' className='max-md:w-full border border-primaryGrey p-2 px-4 bg-primaryBlue uppercase hover:bg-primaryBlue/80'>Subscribe</button>
                </form>
            </section>
        </>
    )
}

export default NewsLetter