"use client"

import Image from "next/image"
import { useRef, useState } from "react"

import planta from "@/public/icons/Planta-1(Azul).svg"
import palestrante1 from "@/public/cards_images/convidado1.jpg"
import palestrante2 from "@/public/cards_images/convidado2.png"
import palestrante3 from "@/public/cards_images/convidado3.jpg"
import palestrante4 from "@/public/cards_images/convidado4.jpg"
import palestrante5 from "@/public/cards_images/convidado5.jpg"
import palestrante6 from "@/public/cards_images/convidado6.jpg"
import palestrante7 from "@/public/cards_images/convidado7.png"

import Card from "@/components/Card"

export default function Palestrantes() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const cardContainerRef = useRef<HTMLDivElement>(null)

    const palestrantes = [
        {
            nome: "Ana Paula Souza",
            especialidade: "Enfermagem Obstétrica",
            palestra: "A importância do acompanhamento pré-natal",
            imagem: palestrante1.src,
            cor: "#51ACD91A",
        },
        {
            nome: "Marcos Vinicius",
            especialidade: "Pediatria Neonatal",
            palestra: "Cuidados essenciais com o recém-nascido",
            imagem: palestrante3.src,
            cor: "#8644F014",
        },
        {
            nome: "Luísa Pereira",
            especialidade: "Saúde da Mulher",
            palestra: "Planejamento familiar e métodos contraceptivos",
            imagem: palestrante2.src,
            cor: "#E43B641C",
        },
        {
            nome: "Ana Oliveira",
            especialidade: "Enfermagem em UTI Pediátrica",
            palestra: "Monitoramento e suporte avançado de vida em crianças",
            imagem: palestrante4.src,
            cor: "#8644F014",
        },
        {
            nome: "Sofia Almeida",
            especialidade: "Imunização",
            palestra: "Calendário vacinal e prevenção de doenças infantis",
            imagem: palestrante5.src,
            cor: "#51ACD91A",
        },
        {
            nome: "Fernando Santos",
            especialidade: "Primeiros Socorros Pediátricos",
            palestra: "Como agir em situações de emergência com crianças",
            imagem: palestrante7.src,
            cor: "#E43B641C",
        },
        {
            nome: "Isabela Rodrigues",
            especialidade: "Nutrição Infantil",
            palestra: "Alimentação saudável para crianças em diferentes fases",
            imagem: palestrante6.src,
            cor: "#51ACD91A",
        },
    ]

    
    const scrollToCard = (index: number) => {
        if (cardContainerRef.current) {
            const cardOffset = 327 * index
            cardContainerRef.current.scrollTo({
                left: cardOffset,
                behavior: "smooth",
            })
        }
    }

    const nextCard = () => {
        scrollToCard(currentIndex + 1 < palestrantes.length ? currentIndex + 1 : 0)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % palestrantes.length)
    }

    const prevCard = () => {
        scrollToCard(
            currentIndex - 1 >= 0 ? currentIndex - 1 : palestrantes.length - 1
        )
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + palestrantes.length) % palestrantes.length
        )
    }

    return (
        <section className="md:p-20 justify-between p-8 flex md:flex-nowrap flex-wrap flex-row max-w-[1440px] min-w-[400px] m-auto">
            <div className="flex flex-col gap-[15px] max-w-[477px] min-h-[74px] justify-between">
                <div>
                    <div className="w-full flex flex-row gap-[15px] sm:flex-nowrap flex-wrap items-center">
                        <Image src={planta} alt="planta azul" width={29.44} height={60} />
                        <h1 className=" font-semibold text-[38px]">
                            Nossos Convidados Especiais
                        </h1>
                    </div>
                    <p>
                        Conheça os palestrantes, ministrantes e convidados que trazem suas experiências e conhecimentos únicos para o evento.
                    </p>
                </div>
                <div className="flex flex-row gap-[15px]">
                    <button
                        onClick={prevCard}
                        className="w-[72px] h-[74px] rounded-full bg-primary flex items-center justify-center text-background active:bg-background active:text-foreground active:border-[#4444440D] border-2"
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={nextCard}
                        className="w-[72px] h-[74px] rounded-full bg-primary flex items-center justify-center text-background active:bg-background active:text-foreground active:border-[#4444440D] border-2"
                    >
                        {">"}
                    </button>
                </div>
            </div>

            <div
                className="flex flex-row gap-[25px] overflow-x-scroll scrollbar-hide py-6 w-full max-w-[750px] scroll-smooth"
                ref={cardContainerRef}
            >
                {palestrantes.map((palestrante, index) => (
                    <Card
                        key={index}
                        name={palestrante.nome}
                        title={palestrante.especialidade}
                        content={palestrante.palestra}
                        photo={palestrante.imagem}
                        cor={palestrante.cor}
                    />
                ))}
            </div>
        </section>
    )
}
