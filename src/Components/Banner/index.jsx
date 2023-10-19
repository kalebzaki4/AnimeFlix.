import React, { useState, useEffect } from "react";
import "./Banner.css";
import play from "../../assets/images/play_circle.png";
import { Link } from "react-router-dom";

export default function Banner() {
    const data = [
        {
            "id": 1,
            "titulo": "One Piece",
            "avalicao": "9.4",
            "ano": "1997",
            "imagem": "https://johto.legiaodosherois.com.br/wp-content/uploads/2021/08/legiao_4YmvHICdo9Zu.jpg",
            "genero": "Anime, Ação, Aventura",
            "sinopse": "Monkey D. Luffy é um jovem que sempre sonhou com uma vida de liberdade. Ele sai do vilarejo onde vive para uma jornada perigosa em busca do lendário tesouro One Piece!",
            "episodios": "1.075 eps",
            "banner": "https://i.pinimg.com/564x/66/19/8d/66198d38369a0ad1b1ccb155997ba229.jpg"
        },
        {
            "id": 2,
            "titulo": "Jujutsu Kaisen",
            "avalicao": "7.9",
            "ano": "2020",
            "imagem": "https://a-static.mlcdn.com.br/450x450/manga-jujutsu-kaisen-batalha-de-feiticeiros-panini/poupalivros/5471p/db3bb650c9f067ca15249855d4b67d49.jpg",
            "genero": "Anime, Ação, Aventura, Sobrenatural",
            "sinopse": "Yuji Itadori, um estudante com poderes amaldiçoados, luta contra maldições e monstros amaldiçoados para salvar o mundo da aniquilação.",
            "episodios": "24 eps",
            "banner": "https://i.pinimg.com/564x/09/75/37/097537787839190d974f9e6c6d0bef43.jpg"
        },
        {
            "id": 3,
            "titulo": "Dragon Ball Super",
            "avalicao": "9.7",
            "ano": "2017",
            "imagem": "https://leitor.kamisama.com.br/wp-content/uploads/2021/10/dragon-ball-super-capa-volume-12.jpg",
            "genero": "Anime, Ação, Aventura, Comédia",
            "sinopse": "Goku e seus amigos enfrentam deuses e poderosos oponentes em batalhas épicas para proteger o universo.",
            "episodios": "131 eps",
            "banner": "https://i.pinimg.com/564x/d6/31/a4/d631a4ead57c784d5dcd57f50dfcf6b3.jpg"
        },
        {
            "id": 4,
            "titulo": "Demon Slayer",
            "avalicao": "7.7",
            "ano": "2016",
            "imagem": "https://cdn.awsli.com.br/2500x2500/770/770210/produto/167630750832c0b3993.jpg",
            "genero": "Anime, Ação, Sobrenatural",
            "sinopse": "Tanjiro Kamado se torna um caçador de demônios para vingar sua família e salvar sua irmã Nezuko, que se transformou em um demônio.",
            "episodios": "26 eps",
            "banner": "https://i.pinimg.com/736x/7b/e1/d5/7be1d570ab9c1544f5ad21dd5a65c608.jpg"
        },
        {
            "id": 5,
            "titulo": "Dr. Stone",
            "avalicao": "7.5",
            "ano": "2017",
            "imagem": "https://cdn.kobo.com/book-images/f4ceb0f0-5a51-4099-8903-58ebe65f3c28/1200/1200/False/dr-stone-vol-11.jpg",
            "genero": "Anime, Aventura, Ficção Científica",
            "sinopse": "Senku Ishigami utiliza ciência para reconstruir a civilização após a humanidade ser transformada em pedra por uma misteriosa luz.",
            "episodios": "24 eps",
            "banner": "https://i.pinimg.com/originals/24/1b/1a/241b1a28c1287f50bae6510b5583367b.jpg"
        },
        {
            "id": 6,
            "titulo": "Blue Lock",
            "avalicao": "8.0",
            "ano": "2022",
            "imagem": "https://m.media-amazon.com/images/I/81XsRW62W5L._AC_UF1000,1000_QL80_.jpg",
            "genero": "Anime, Esportes",
            "sinopse": "Uma competição para encontrar e treinar o melhor atacante de futebol do Japão é realizada, e Isagi Youichi é um dos participantes.",
            "episodios": "Ainda em andamento",
            "banner": "https://i.pinimg.com/originals/f9/c7/98/f9c798c5273efbc52ab5cee0d225e25e.jpg"
        },
        {
            "id": 7,
            "titulo": "My Hero Academia",
            "avalicao": "7.6",
            "ano": "2014",
            "imagem": "https://m.media-amazon.com/images/I/71bELfIWTDL._SY466_.jpg",
            "genero": "Anime, Ação, Escolar",
            "sinopse": "Em um mundo onde a maioria possui superpoderes, Izuku Midoriya luta para se tornar um herói e enfrenta ameaças poderosas.",
            "episodios": "Em andamento",
            "banner": "https://i.pinimg.com/originals/e6/41/df/e641df548260449209478e154a1f5c25.jpg"
        }
      ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePosterClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <article className="container">
        <section className="banner" aria-label="Animes Populares">
          <div className="banner-slider">
            {data.map((anime, index) => (
              <div
                key={anime.id}
                className={`slider-item ${index === activeIndex ? "active" : ""}`}
              >
                <img
                  src={anime.banner}
                  alt={anime.titulo}
                  className="img-cover"
                  loading="eager"
                />

                <div className="banner-content">
                  <h2 className="heading">{anime.titulo}</h2>

                  <div className="meta-list">
                    <div className="meta-item">{anime.ano}</div>
                    <div className="meta-item card-badge">{anime.avaliacao}</div>
                    <div className="meta-item">Episódios: {anime.episodios}</div>
                  </div>

                  <p className="genre">{anime.genero}</p>

                  <p className="banner-text">{anime.sinopse}</p>

                  <Link to="/Detalhes" className="btn">
                    <img
                      src={play}
                      alt="Botão de Play"
                      width={24}
                      height={24}
                      aria-hidden="true"
                    />
                    <span className="span">Assistir</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-control">
            <div className="control-inner">
              {data.map((anime, index) => (
                <button
                  key={anime.id}
                  className={`poster-box slider-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => handlePosterClick(index)}
                >
                  <img
                    src={anime.imagem}
                    alt=""
                    loading="lazy"
                    draggable="false"
                    className="img-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
