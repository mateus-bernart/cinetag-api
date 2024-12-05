import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Banner imagem="home"></Banner>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id}></Card>;
        })}
      </section>
    </>
  );
}

export default Inicio;
