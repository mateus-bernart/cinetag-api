import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import { useFavoritoContext } from "contextos/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <Banner imagem="favoritos"></Banner>
      <section className={styles.container}>
        {favorito.map((fav) => (
          <Card {...fav} key={fav.id}></Card>
        ))}
      </section>
    </>
  );
}

export default Favoritos;
