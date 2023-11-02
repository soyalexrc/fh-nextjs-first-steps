// const temporalAsync = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true);
//         }, 2000)
//     })
// }

import {ActiveLink} from "@/components";


const navLinks = [
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
    {
        path: '/pricing',
        title: 'Pricing'
    }
]

export const Navbar = () => {
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
            <span>Home</span>

            <div className='flex flex-1'></div>
            {
                navLinks.map((navLink) => (
                    <ActiveLink key={navLink.path} {...navLink} />
                ))
            }
        </nav>
    )
}
