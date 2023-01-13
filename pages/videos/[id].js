import { useRouter } from "next/router";
import { StyledMenu } from "../../src/components/Menu";
import { supabase } from "../../src/supabase";
import { StyledVideoPage } from "./styles";

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
