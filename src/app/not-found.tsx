import Link from "next/link";

export default function Custom404() {
     return (
          <section className="flex flex-col justify-center items-center h-screen">
               <h2 className="text-2xl mb-1 font-semibold text-gray-900">Pagina Não Encontrada!</h2>
               <Link href="/">
                    Voltar Página Home
               </Link>
          </section>
     )
}