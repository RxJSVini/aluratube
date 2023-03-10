
import styled from "styled-components";

export const StylesFavorites = styled.section`
  width: 100%;
  padding: 0;
  overflow: hidden;
  padding: 32px;
  background-color: ${({ theme }) => theme.backgroundBase};
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColorBase};
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  div {
    width: calc(100vw - 16px * 4);
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    a {
      scroll-snap-align: start;
      span {
        padding-top: 8px;
        display: block;
        padding-right: 24px;
        color: ${({ theme }) => theme.textColorBase};
      }
    }
    &:hover {
      overflow-x: auto;
    }
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.borderBase};
      border-radius: 4px;
    }
  }
`;

function  Favoritos({ favoritos }){
    return(
        <StylesFavorites>
            <h2>AluraTube Favoritos</h2>
            <div className="favorites-div">
                {favoritos.map((favorite) => (
                    <a key={favorite.id} href={favorite.html_url}>
                        <img src={favorite.avatar_url} alt={favorite.login} />
                        <span>
              @{favorite.login}
                        </span>
                    </a>
                ))}
            </div>
        </StylesFavorites>
    )
}


export default Favoritos;