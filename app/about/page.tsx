import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'First steps | About page',
    description: 'By vercel',
}

export default function AboutPage() {
    return (
        <>
            <span className='text-7xl'>About Page</span>
        </>
    )
}
