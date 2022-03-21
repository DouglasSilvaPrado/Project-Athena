import React from "react";
import CourseIntroduction from "../../layout/CourseIntroduction";
import CourseVideo from "../../layout/CourseVideo";

function SocialMedia() {
  return (
    <>
      {/* oque faz ? */}
      <CourseIntroduction
        title="O que faz um Social media?"
        introduction="O social media é o profissional responsável pela gestão, atualização e
        geração de conteúdo e tráfego para as redes sociais de empresas,
        marcas ou personalidades em seus perfis online.
        Em um mundo cada vez mais conectado e em que a interatividade está ao
        alcance de um clique, as empresas têm cada vaz mais concentrado o foco
        de suas atividades em redes sociais, tais como Facebook, Instagram e
        Twitter.
        De olho no crescimento dessa possibilidade, a área para o profissional
        de social media tem crescido. A cada dia são descobertas novas
        informações estratégicas que permitem que esse especialista ajude no
        crescimento da empresa e no engajamento da marca.
        O social media planeja o tipo de conteúdo a ser veiculado, tais como
        posts, gifs, sorteios, interações, imagens, anúncios e vídeos,
        escolhendo qual a melhor forma de alcançar o maior número possível de
        interessados pela marca.
        Cabe a esse profissional também interagir com possíveis clientes ou
        quaisquer usuários que venham a interagir com a marca ou a empresa,
        bem como zelar pela sua imagem positiva. Solucionar crises
        relacionadas à imagem e responder críticas e questionamentos também
        são algumas das atribuições do social media.
        "
      />

      <div className="container text-center text-white pt-5 ">
        <h2 className="py-3">
          Veja alguns canais do YouTube que abordam esse tema
        </h2>
      </div>

        {/* Rejane Toigo*/}
        <CourseVideo 
            video="https://www.youtube.com/embed/videoseries?list=PLpmBkyWiIBnvGn4i7ahLmOpjUUi65SFiO"
            reference="https://www.youtube.com/user/rejanertoigo/featured"
            channel="Rejane Toigo"
            text="Tudo que você precisa saber para se tornar um social media
            endinheirado."
        />
        
        {/* Thiago Abreu */}
        <CourseVideo 
            video="https://www.youtube.com/embed/videoseries?list=PL65y53QdjAfF7-FWKOF07Xhj-y3I5tQBH"
            reference="https://www.youtube.com/c/ThiagoAbreuON"
            channel="Thiago Abreu"
            text="Nesta primeira aula do nosso curso de Social Media gratuito
            vamos falar um pouco sobre o que é Social Media, como impacta
            em nossas vidas e como o design pode ser um fator determinante
            de venda."
        />
        {/* Curso em Video */}
        <CourseVideo 
            video="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dlkAQ8ZBGOXJTkaFewVoZW0"
            reference="https://www.youtube.com/c/CursoemV%C3%ADdeo"
            channel="Curso em Video"
            text="Curso grátis de como anunciar e divulgar seus produtos ou
            serviços pela internet. Vamos usar várias formas de
            divulgação, incluindo Google Ads e Facebook Ads"
        />

        {/* Guias Design */}
        <CourseVideo 
            video="https://www.youtube.com/embed/videoseries?list=PLYlX81vP10lrfLe-7z0RiCMzaHUUVfaNs"
            reference="https://www.youtube.com/c/GuiasDesign/featured"
            channel="Guias Design"
            text="Acreditamos que o conhecimento muda tudo. Por isso, nós
            oferecemos cursos profissionais e de qualidade, totalmente
            grátis. O conhecimento muda tudo, e é para todos."
        />

    </>
  );
}

export default SocialMedia;
