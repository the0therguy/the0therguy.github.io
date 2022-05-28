import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Box = styled(NavLink)`
    width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center center;
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0,0,0,0,2);
  cursor: pointer;
  

`

const Title = styled.h3`
    color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.text};
  
`

const BlogComponent = (props) => {
    const {name, tags, date, imgSrc, link} = props.blog
    return (
        <Box targe="_blank" to={{pathname: link}}>
            <Image img={imgSrc}/>
            <Title>{name}</Title>
        </Box>
    )
}

export default BlogComponent