import styled from "styled-components";

const StyledBanner = styled.div`
    background-color: blue;
    height: 230px;
    background-image: url(${(props) => props.imageLink});
    /* background-repeat: no-repeat; */
`;


function Banner({ imageLink }){
    return <StyledBanner imageLink={imageLink}/>
}

export default Banner;