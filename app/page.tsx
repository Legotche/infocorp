export default function Home() {
  return (
    <section className="flex items-center min-h-[90vh]">
      <div className="max-w-4xl shadow-2xl m-auto shadow-primary rounded-2xl p-9 min-w-[400px]">
        <h1 className="text-4xl font-semibold ">Olá!</h1>
        <h2 className="text-2xl font-medium text-primary">
          Bem-vindo ao meu projeto de teste prático da infocorp.
        </h2>
        <p>
          Me chamo <strong className="font-semibold">Daniel</strong> e é ótimo poder compartilhar meu trabalho com você. Nesse projeto, eu criei uma simples navbar para que possa ver as páginas de maneira separada. Me esforcei para deixar o layout responsivo e as animações fluidas, os elementos semânticos,fora o necessário para navegação pelo teclado e ferramentas assistivas. Não pude conter a vontade de adicionar algumas &quot;coisinhas a mais&quot;, mas espero que goste do resultado.
        </p>
        <p>
          Você pode ver o código no meu
          <a
            href="https://github.com/Legotche/infocorp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium"
          >
            &nbsp;GitHub&nbsp;
          </a>
          deixarei junto algumas instruções para caso queira rodar localmente
          junto do link para o site já hospedado.
        </p>
      </div>
    </section>
  );
}
