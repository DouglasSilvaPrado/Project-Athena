import React from "react";
import CourseIntroduction from "../../layout/CourseIntroduction";
import CourseVideo from "../../layout/CourseVideo";

function PixelArt() {
  return (
    <>
      {/* oque e ? */}
      <CourseIntroduction
        title="Pixel Art"
        introduction="A pixel art surgiu como uma limitação de hardware dos antigos
        videogames, que precisavam simplificar seus gráficos para que os jogos
        pudessem caber nos cartuchos.
        Porém, apesar de sua simplicidade, ela caiu no gosto do público e vive
        até hoje como um estilo artístico."
      />
      
      {/* Nextindie Academy*/}
      <CourseVideo
        video="https://www.youtube.com/embed/videoseries?list=PLXiMbAkZF_Bnfek4nfHAxB8C6ey6roq-n"
        reference="https://www.youtube.com/channel/UCk90r0sWVq-gjznv4vr_3Eg"
        channel="Nextindie Academy"
        text="vamos entender o que é o pixel art, quais são os tipos de arte
        para jogos 2D e ainda vamos conferir alguns exemplos de jogos
        indie atuais que usam esse estilo de arte."
      />

    {/* Vivendo de Pixel */}   
     <CourseVideo
        video="https://www.youtube.com/embed/oU-MAPQHsEM"
        reference="https://www.youtube.com/channel/UCco4h0drHm_OjtpCq9HP-pg"
        channel="Vivendo de Pixel"
        text='Certeza que você já ouviu falar um milhão de vezes a palavra
        "Pixel Art", mas será que você sabe o que ela significa? E de
        onde ela veio? Então chega mais nessa viagem pela história da
        Pixel Art.'
      /> 
    {/* Crie Seus Jogos */}
      <CourseVideo
        video="https://www.youtube.com/embed/3G8jpTduUlU"
        reference="https://www.youtube.com/c/CrieSeusJogos"
        channel="Crie Seus Jogos"
        text="Aqui esta algumas dicas para melhorar sua pixel art."
      /> 

    </>
  );
}

export default PixelArt;
