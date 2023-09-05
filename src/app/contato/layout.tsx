import { Metadata } from "next"
import { ReactNode } from "react"

interface ContactLayoutChildren {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Pagina de Contato",
    description: 'Bem Vindo a Pagina de Contato'
}

export default function ContactLayout({ children }: ContactLayoutChildren) {
    return (
        <section className="bg-gray-400 h-screen">
            {children}
        </section>
    )
}