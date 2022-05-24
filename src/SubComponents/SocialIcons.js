import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter } from '../components/AllSvgs'
import styled from 'styled-components'


const Icons = styled.div`
display:flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:5;
`

const Line = styled.span`
width: 2px;
height: 10rem;
background-color: ${props => props.theme.text};
`
const SocialIcons = () => {

    return (
        <Icons>
            <div>
                <NavLink to="/">
                    <Github width = {25} height={25} fill='currentColor' />
                </NavLink>
            </div>

            <div>
                <NavLink to="/">
                    <Twitter width = {25} height={25} fill='currentColor' />
                </NavLink>
            </div>

            <div>
                <NavLink to="/">
                    <Facebook width = {25} height={25} fill='currentColor' />
                </NavLink>
            </div>

            <Line/>
        </Icons>
    )
}

export default SocialIcons