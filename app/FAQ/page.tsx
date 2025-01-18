import AccordionItem from '@/components/AccordionItem'
import Image from "next/image"

import planta from '@/public/icons/Planta-1(Azul).svg'
import grupo from '@/public/icons/Group.svg'
import register from '@/public/icons/Register.svg'
import certificate from '@/public/icons/Certificate.svg'
import dollar from '@/public/icons/dollar.svg'
import board from '@/public/icons/board.svg'
import phone from '@/public/icons/phone.svg'


export default function FAQ() {

    return(
    <div className='sm:p-20 p-8 gap-[15px] flex flex-col max-w-[1440px] mx-auto'>
        <div>
            <div className='w-full flex flex-row gap-[15px] flex-wrap items-center'>
                <Image src={planta} alt="planta azul" width={29.44} height={60} />
                <h1 className=' font-semibold text-[38px]'>Perguntas Frequentes</h1>
            </div>
            
            <p>Precisa de informações? Encontre sua resposta sobre os detalhes do evento aqui! <br/>Caso possua mais dúvidas, envie uma mensagem, estaremos prontos para ajudar!</p>
        </div>
        <dl className='flex gap-9 flex-col'>
            <AccordionItem  icon={grupo} title='Quando e onde acontecerá o evento?'>
                <p>O evento acontecerá dos dias 5 a 7 de dezembro, no auditório do Instituto de Computação (IC).</p>
            </AccordionItem>

            <AccordionItem  icon={register} title='Como realizo minha inscrição?'>
                <p>Você pode realizar a sua inscrição através da plataforma Even3 pelo link <a href="https://www.even3.com.br/siegepan/" target="_blank" rel="noopener noreferrer" >https://www.even3.com.br/siegepan/</a></p>
            </AccordionItem>

            <AccordionItem  icon={certificate} title='Haverá emissão de certificado para os participantes?'>
                <p>Sim, haverá emissão de certificado para os participantes.</p>
            </AccordionItem>

            <AccordionItem  icon={dollar} title='A participação é gratuita?'>
                <p>Sim, a participação é totalmente gratuita.</p>
            </AccordionItem>

            <AccordionItem  icon={board} title='Onde posso submeter meu trabalho?'>
                <p>Você pode submeter o seu trabalho no período de 17/10 até 13/11 através do formulário siegepan/forms.com.br</p>
            </AccordionItem>

            <AccordionItem  icon={phone} title='Como consigo entrar em contato com a organização?'>
                <p>Você pode nos contatar através de nossa rede social <a href="https://www.instagram.com/siegepan" target="_blank" rel="noopener noreferrer" >instagram.com/siegepan/</a> estaremos prontos para sanar suas dúvidas.</p>
            </AccordionItem>
        </dl>
    </div>
    )
}