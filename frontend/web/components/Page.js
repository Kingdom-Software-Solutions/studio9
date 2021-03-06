import PropTypes from 'prop-types';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

// GLOBAL styles
const GlobalStyles = createGlobalStyle`
    @font-face {
        // font-family: '';
        // src: url('/static/<insert_path_to_font_file>');
        // format('');
        font-weight: normal;
        font-style: normal;
    }
    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGray);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0, 0, 0,, 0.09);
        box-sizing: border-box;
    }
    *, *:before, *after {
        box-sizing:inherit;
    }
    body {
        // font-family: '', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: var(--black);
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        // font-family: '', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

// The top level styles for the Page children
const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`;

export default function Page({ children }){
    return (
        <div>
            <GlobalStyles />
            <Header />
            <InnerStyles>{children}</InnerStyles>
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.any
}