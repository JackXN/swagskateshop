import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: #D3C1B4;
color: black;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcement = () => {
    return <Container>Super Deal! Free Shipping On Orders Over $50</Container>
}

export default Announcement;