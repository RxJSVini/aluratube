import styled from "styled-components";
export const StyledVideoPage = styled.div`
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