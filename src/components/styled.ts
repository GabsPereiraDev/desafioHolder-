import styled from 'styled-components'


export const Container = styled.div`
position: sticky;
width: 100vw;
padding: .5rem 3rem;
background-color: #562293;
display: flex;
align-items:center;
justify-content: space-between;
img{
    width:9rem;
    height: auto;
    padding: 1rem;
    background: #fff;
    position: absolute;
    top: 0;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
}
button{
    margin-right:  0 auto;
    background: var(--orange);
    padding:1rem;
    border: none;
    color:var(--white);
    font-weight: bold;
    border-radius: .25rem;
    
}
div{
    color: var(--white);
    font-weight: bold;
    font-size: 1.1rem;
   
}
`;