'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import {usePathname} from "next/navigation";

interface Props {
    path: string;
    title: string;
}

export const ActiveLink = ({title, path }: Props) => {

    const pathName = usePathname();

    console.log(pathName);

    return (
        <Link className={`mr-2 ${style.link} ${ pathName === path && style['active-link']}`}  href={path}>{title}</Link>
    )
}
