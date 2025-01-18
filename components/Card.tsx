import Image from "next/image"

interface Props { 
    name: string,
    title: string,
    content: string,
    photo:string,
    cor:string
}

export default function Card({name, title, content, photo, cor}:Props) {
    

  return (
    <div 
      className="w-[302px] rounded-[15px] p-[17px] flex-shrink-0 hover:-translate-y-1 ease-in-out hover:scale-110 transition-transform duration-1000"
      style={{ backgroundColor: cor }}>
        <Image src={photo} alt={name} width={268} height={325} className=" object-cover rounded-[10px] w-[268px] h-[325px]"/>
        
        <p className="font-semibold text-[18px]">{name}</p>
        <p className="font-light text-[12px]">{title}</p>
        <p className="font-light text-[12px]">{content}</p>
    </div>
  )
}