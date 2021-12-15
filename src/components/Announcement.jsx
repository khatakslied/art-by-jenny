import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  // background: rgb(227,207,183);
  // background: linear-gradient(0deg, rgba(227,207,183,1) 0%, rgba(175,129,103,1) 100%);
  color: #ECEAEB;
  background-color: #AF8167;
  text-shadow: 0 0 1px #412D26;
`;

const Announcement = () => {
  return (
    <Container>
      <p>Deals Deals Deals</p>
    </Container>
  );
};

export default Announcement;
