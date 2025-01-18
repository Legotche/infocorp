import Link from "next/link";

export default function NatBar() {
    const className='font-medium min-w-[400px] text-xl py-2 px-1 text-center'
    return(
        <nav className="justify-around items-center flex rounded-b-2xl shadow-sm shadow-primary flex-wrap max-w-[1440px] mx-auto">
            <Link className={className} href='/'>Home</Link>
            <Link className={className} href='/FAQ'>FAQ</Link>
            <Link className={className} href='/Palestrantes'>Palestrantes</Link>
        </nav>
    )
}