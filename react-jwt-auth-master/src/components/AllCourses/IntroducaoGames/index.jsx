import React from "react";
import CourseIntroduction from "../../layout/CourseIntroduction";
import CourseVideo from "../../layout/CourseVideo";

function IntroducaoGames() {
  return (
    <>
      {/* oque e ? */}
      <CourseIntroduction
        title="Introdução a Games"
        introduction="Presente em nossas vidas há pouco mais de trinta anos, os jogos
        eletrônicos carregam uma história rica em inovações tecnológicas, que
        criaram um impacto sem precedentes na cultura das sociedades em um
        nível global.
        A indústria de games ainda é jovem e se encontra em um ritmo de
        expansão impressionante, com tendência a resistir a grandes crises
        econômicas, gerando oportunidade para novas ideias, novas formas de
        jogar e a necessidade de novos talentos para a indústria."
      />

      {/* Curso Attekita Dev seu primeiro game*/}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLprgbdnzrDkH4AP7Qv-xKMvuGCMT54y8O"
        reference="https://www.youtube.com/c/CursoemV%C3%ADdeo"
        channel="Attekita Dev"
        text="Aprenda como fazer um game runner e criar seu primeiro game na
        Unity com esse projeto . Nesse curso rápido vamos aprender
        alguns conceitos básicos de desenvolvimento de games e além de
        trabalhar com a Unity. Essa é uma série de vídeos aonde vamos
        codar juntos e aprender muito."
      />

      {/* Curso Attekita Dev O mercado */}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLprgbdnzrDkHpoQAEKqkSyKzIbnyDhjJ4"
        reference="https://www.youtube.com/c/CursoemV%C3%ADdeo"
        channel="Attekita Dev"
        text="O mercado de desenvolvimento de games esta crescendo
        mundialmente e não é diferente no Brasil. Cada vez mais pessoas
        estão fazendo essa escolha de carreira. Nesse vídeo dou algumas
        dicas para quem esta pensando em ingressar nessa carreira de
        game dev e falo sobre nosso panorama atual do mercado nacional.
        Conselhos que gostaria de passar pra vocês e aprendi durante
        esses 5 anos trabalhando com a Funbites Game Studio."
      />

      {/* Crie Seus Jogos */}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLW-9djkTMdfVNJD9aEnoOzkrU8dUoD7j4"
        reference="https://www.youtube.com/c/CrieSeusJogos"
        channel="Crie Seus Jogos"
        text="Acreditamos que o conhecimento muda tudo. Por isso, nós
        oferecemos cursos profissionais e de qualidade, totalmente
        grátis. O conhecimento muda tudo, e é para todos."
      />  
      
    </>
  );
}

export default IntroducaoGames;
