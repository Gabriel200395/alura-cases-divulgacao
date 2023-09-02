import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section>
        <h2 className="text-2xl font-normal text-neutral-800">Iniciando Projeto Next</h2>
        <Link href="/contato">
          Página de Contato
        </Link>
      </section>
    </main>
  )
}
