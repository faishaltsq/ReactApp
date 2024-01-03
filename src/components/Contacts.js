import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Contacts = () => {
  return (
    <ContactsContainer>
      <h1>
        <span className="title">Contacts</span>
      </h1>
      <Grid>
        <Card
          img={require('../images/github.png')}
          title="Github"
          description="My Github profile and repositories."
          link_three="https://github.com/faishaltsq"
          link_three_text="Github"
        />
        <Card
          img={require('../images/linkedin.png')}
          title="Linkedin"
          description="My Linkedin Profile page"
          link_three="https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/"
          link_three_text="Linkedin"
        />
        <Card
          img={require('../images/twitter.png')}
          title="Twitter"
          description="My Twitter page."
          link_three="https://twitter.com/galonnaquaa"
          link_three_text="Twitter"
        />
      </Grid>
    </ContactsContainer>
  );
};

const ContactsContainer = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }

  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-auto-rows: 24rem;
  grid-gap: 2.5rem;
  justify-content: center;
`;

export default Contacts;
