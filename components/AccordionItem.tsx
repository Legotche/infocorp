"use client"

import Image from "next/image"
import { ReactNode, useState } from "react"

import plusIcon from   '@/public/icons/line-md_plus.svg'
import minusIcon from '@/public/icons/line-md_minus.svg'

type Props={
    icon?:string,
    title:string
    children?:ReactNode
}

export default function AccordionItem({icon,title,children}:Props) {
    
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div> 
            <dt>
                <button
                    className="flex flex-row justify-between items-center w-full cursor-pointer "
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${title}`} 
                >
                <div className="flex flex-row items-center">
                    {icon && <Image src={icon} alt="Icon" width={48} height={48} />}
                    <h3 className="text-[22px] text-left">{title}</h3>
                </div>
                <Image src={isOpen ? minusIcon : plusIcon} alt="Open/Close Icon" width={36} height={36} className="h-9" />
            </button>
            </dt>
            <dd
                id={`accordion-content-${title}`} 
                className={`px-[63px] transition-max-h duration-500 overflow-hidden ${isOpen ? 'max-h-[1000px]' : ' max-h-0'}`} 
                aria-hidden={!isOpen}
            >
            {children}
            </dd>
        </div>
    )
}