import React from "react";
import styled, {keyframes, ThemeProvider} from "styled-components";
import {DarkTheme} from "./Themes";
import LogoComponent from "../SubComponents/LogoComponent";
import SocialIcons from "../SubComponents/SocialIcons";
import PowerButton from "../SubComponents/PowerButton";
import ParticleComponent from "../SubComponents/ParticleComponent";
import astronaut from "../assets/Images/spaceman.png"

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 108vh;
  position: absolute;
  overflow: hidden;  


  &>*:first-child{
    margin-right: 1rem;
  }
`
const float = keyframes`
    0% { transform: translateY(-10px)}
    50% { transform: translateY(15px) translateX(15px)}
    100% { transform: translateY(-10px)}
`
const Spaceman = styled.div`
position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img{
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2 rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <PowerButton/>
            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>

            <Box>
                <ParticleComponent theme="dark"/>
                <Spaceman>
                    <img src={astronaut} alt="spaceman"/>
                </Spaceman>
                <Main>
                    I am a skilled IT specialist with an established
                    track record in website development and database
                    management. I have great technical abilities as
                    well as outstanding interpersonal abilities,
                    allowing me to work with a diverse group of
                    people.
                    <br/>
                    I'm looking for new challenges to help me
                    grow and improve my IT skills. My life's biggest
                    interest is putting my technological knowledge to
                    good use for other individuals and organizations.
                    <br/>
                    My life motto is "I can and I will".
                </Main>

            </Box>

        </ThemeProvider>

    )

}

export default AboutPage