import { useRouter } from "next/router";
import { StyledMenu } from "../../src/components/Menu";
import { supabase } from "../../src/supabase";
import { StyledVideoPage } from "./styles";
import styled from "styled-components";

const StyledVideoPage = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  section {
    width: 75%;
    padding: 56px 150px;
    iframe {
      width: 100%;
      max-width: 1060px;
      height: 85%;
      max-height: 550px;
    }
    h2 {
      margin-top: 24px;
    }
    span {
      margin-top: 8px;
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 56px 0;
      iframe {
        height: 450px;
      }
    }
    @media screen and (max-width: 480px) {
      iframe {
        height: 250px;
      }
    }
  }
  div {
    width: 25%;
    height: 100%;
    max-height: calc(100vh - 50px);
    background-color: ${({ theme }) => theme.backgroundLevel2};
    overflow: auto;
    padding: 56px 56px;
    .link {
      width: 100%;
      img {
        width: 100%;
      }
      span {
        padding-top: 8px;
        padding-bottom: 8px;
        display: block;
        padding-right: 24px;
        color: ${({ theme }) => theme.textColorBase};
      }
    }
    @media screen and (max-width: 780px) {
      width: 100%;
    }
  }
`;

export default function Videos({ data }) {
  const {
    query: { id },
  } = useRouter();
  const videoDetails = data.map((a) => a).filter((b) => b.url.includes(id))[0];
  const videoRelationPlaylist = data
    .map((c) => c)
    .filter((d) => d.playlist === videoDetails.playlist);


  const getDetailsData = (value) => {
    const dateNew = new Date(value).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return `Video enviado ${dateNew}`;
  };

  return (
    <>
      <StyledMenu />
      <StyledVideoPage>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={videoDetails.title}
          ></iframe>
          <h2>{videoDetails.title}</h2>
          <span>{getDetailsData(videoDetails.created_at)}</span>
        </section>
        <div>
          <h3 style={{ marginBottom: "16px" }}>Vídeos relacionados</h3>

          {videoRelationPlaylist.map(rel => (
            <div>
              <a className="link" href={`/videos/${rel.url.split('v=')[1]}`}>{rel.title}</a>
              <img src={rel.thumb} alt={rel.playlist}/>
              <span>{rel.playlist}</span>
            </div>
          ))}
        </div>
      </StyledVideoPage>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await supabase.from("videos").select("*");
  return {
    props: {
      data,
    },
  };
}
