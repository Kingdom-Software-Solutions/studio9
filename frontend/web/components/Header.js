import Link from 'next/link';

import Nav from "./Nav";
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transfrom: skew(-7deg);
    background: black;
    a {
        color: white
        text-transform: uppercase;
        padding: 0.5rem 1rem;
    }
`;

export default function Header(){
    return (
        <header>
            <div id="title" className="bar">
                <Title>
                    <Link href="/">Studio 9 NC</Link>
                </Title>
                
            </div>
            <Nav />
        </header>
    )
}