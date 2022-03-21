import React from "react";

import CourseIntroduction from "../../layout/CourseIntroduction";
import CourseVideo from "../../layout/CourseVideo";

function MarketingDigital() {
  return (
    <>
      <CourseIntroduction
        title="Funções do marketing digital"
        introduction="Os itens abaixo trazem funções do marketing digital mais focado no
        setor privado, envolvendo os mais variados mercados de negócios. Quem
        trabalha com esportes, governos, celebridades e instituições pode
        encontrar algumas práticas um pouco diferentes."
      />

      <CourseIntroduction
        title="Criação e otimização de sites"
        introduction="Não são apenas as empresas de e-commerce que investem na criação e na
        manutenção de sites. Possuir uma presença digital fortalecida é o
        objetivo de outros tantos tipos de companhias que podem estar longe de
        vender pela internet. Tudo isso porque, já que o consumidor está na
        rede, a marca também precisa estar.
        O marketing de conteúdo é uma importante estratégia utilizada para
        trazer relevância ao site e para manter a atenção dos futuros
        clientes. A prática consiste na criação de blogs com publicações
        periódicas que tratam de diversos assuntos, principalmente os que
        estão relacionados com as preferências do público-alvo da empresa.
        O SEO - Search Engine Optimization ou Otimização para Ferramentas de
        Busca - refere-se a um conjunto de técnicas com o objetivo de
        posicionar os sites e outras páginas ligadas à marca em buscas do
        Google. Quando você pesquisa certo termo no buscador, ele te confere
        uma série de resultados, não é mesmo? A ordem com que eles aparecem é
        dada por uma série de fatores, como usos de palavras-chave, velocidade
        de carregamento e mais de 200 outros critérios.
        "
      />

      <CourseIntroduction
        title="Redes sociais"
        introduction="A redes sociais - exemplificadas principalmente por Facebook, Instagram
        e Twitter - se tornaram relevantes fontes de entretenimento e de
        obtenção de informação. Atualmente são canais diretos para as marcas se
        comunicarem com os clientes e para conquistar novos mercados. Pense
        consigo mesmo: você já consumiu algum produto que viu em alguma rede
        social?
        Cabe ao time de marketing digital pensar nos conteúdos e nos anúncios
        que levem a informação até você, comunicando da melhor maneira todas
        as qualidades do produto ou do serviço. Além disso, a manutenção de
        publicações periódicas nas páginas contribuem para a construção de um
        relacionamento entre a marca e o cliente, o que ajuda muito a ampliar
        as vendas.
        "
      />

      <CourseIntroduction
        title="Criação de campanhas publicitárias"
        introduction="Os profissionais de marketing digital são responsáveis pela criação de
        anúncios publicitários para as mais diversas ferramentas, como o
        Facebook e o Google. Os objetivos podem ser vários: venda direta de
        produtos, download de algum aplicativo, contratação do serviço, ou
        simplesmente um cadastro de pessoas interessadas. Cabe ao time
        estratégico da marca verificar o que melhor combina com cada momento e
        com cada orientação que a empresa está seguindo."
      />

      <CourseIntroduction
        title="Análise de resultados"
        introduction="Uma grande vantagem do marketing digital em relação ao off-line é que
        ele oferece métricas mais precisas. Suponha que você colocou uma
        campanha no Facebook para vender um curso de informática cujo objetivo
        era obter cadastros de pessoas interessadas. Para isso, você estabeleceu
        um orçamento de mil reais. No gerenciamento da plataforma - seja ela
        qual for - haverá dados sobre o número de cliques no link, cadastros e
        outras informações relevantes.
        Com a análise cuidadosa dos dados, o profissional de marketing digital
        consegue saber quanto cada cliente custa para a empresa. Além disso,
        estará incumbido de procurar maneiras para otimizar os anúncios e
        trazer mais interessados com o gastos menores.
        "
      />

      <div className="container text-center text-white pt-5">
        <h2 className="py-3">
          Veja alguns canais do YouTube que abordam esse tema
        </h2>
      </div>

      {/* Siméia Avellar | Negócios Digitais  */}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLFlzfZHfXxUXU2UOoFq7uh2Eja8R3G6mM"
        reference="https://www.youtube.com/c/EscoladeNeg%C3%B3ciosDigitais/featured"
        channel="Siméia Avellar | Negócios Digitais"
        text="E aqui no canal meu objetivo é te ajudar a ter resultados
        reais online vendendo produtos digitais que transformam a vida
        das pessoas."
      />

      {/* Curso em Video*/}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dmmqFmLT17KMjoaE0Y4LqRv"
        reference="https://www.youtube.com/c/CursoemV%C3%ADdeo"
        channel="Curso em Video"
        text="Aprenda os fundamentos do Marketing e conheça dicas, ferramentas
        e termos técnicos do Marketing Digital, nesse curso que faz
        parte do Curso Grátis de Marketing Digital do Curso em Vídeo."
      />
      
      {/* GoDaddy Brasil */}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLr21wMIyqB97XCSc5Rt_CiGndncs4VOEN"
        reference="https://www.youtube.com/c/GoDaddyBrasil/featured"
        channel="GoDaddy Brasil"
        text="Neste guia sobre marketing digital para iniciantes, você vai
        aprender o que é marketing digital e suas principais
        estratégias. Além disso, vamos mostrar as principais métricas de
        marketing, como implementá-lo em seu negócio e como a GoDaddy
        pode te ajudar!"
      />
      
      {/* Joba */}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLDolWZnVdBr1gR-ZLKFenvOzb9LGmpaA6"
        reference="https://www.youtube.com/c/Jobair"
        channel="Joba"
        text="Opa, aqui é o Joba! Eu sou empreendedor digital, vivo
        exclusivamente dos meus negócios na internet desde 2015,
        trabalho de casa (ou de onde quiser) e neste canal vou te
        ensinar todas as estratégias que usei para criar meu negócio
        online e ganhar dinheiro na internet de forma honesta!
        Instagram: @@joba.ir"
      />
    
    </>
  );
}

export default MarketingDigital;
