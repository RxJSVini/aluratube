import styled from "styled-components";
import Menu from "../src/components/Menu";
import config from "../config.json";
import SEO from "../src/components/SEO";
import TimeLine from "../src/components/TimeLine";
import Favoritos from "../src/components/Favoritos";
import { useState, useEffect } from "react";
import Banner from "../src/components/Banner";
import { videoService } from "../src/services/videoServiceSupaBase";


function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlist, setPlaylist] = useState({});
  const service = videoService();  

  useEffect(() => {
    service
        .getAllVideos()
        .then((response) => {
  
            const novasPlaylists = {...playlist};
            response.data.forEach((video) => {
                if (!novasPlaylists[video.playlist]) {
                    novasPlaylists[video.playlist] = [];
                };
                novasPlaylists[video.playlist].push(video);
            });
            setPlaylist(novasPlaylists);
        });
},
    [],
);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div>
        <SEO
          title="Aluratube"
          description="Projeto Desenvolvido durante a imersão React.js da Alura"
          author="Vinicius P"
          keywords="Javascript, Nodejs, Reactjs"
        />
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />

        <TimeLine playlist={playlist} searchValue={valorDoFiltro} />
        <Favoritos favoritos={config.channels.favorites} />
      </div>
    </div>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <Banner imageLink={config.bg} />
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="fotinho-do-perfil"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
