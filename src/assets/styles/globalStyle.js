import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Montserrat:wght@400;700&display=swap');

font-family: 'Architects Daughter', cursive;
font-family: 'Montserrat', sans-serif;


html{
    box-sizing:border-box;
    color:${({ theme }) => theme.colors.BLACK}

}

*,*::after, *::before{
    box-sizing:inherit;
    margin:0;
    padding:0;
}

body{
    font-family: "Montserrat", sans-serif;
    font-size:10px;
}

a,button{
    font-family:"Montserrat", sans-serif;
}

`;
