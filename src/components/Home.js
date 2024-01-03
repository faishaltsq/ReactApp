import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  height: calc(100vh - 7rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Introduction>
        <ProfileCard>
          <div className="profile-text">
            <div className="hi">Hi! I'm</div>
            <h1>Faishal&nbsp;Tsaqief</h1>
          </div>
        </ProfileCard>
        <div className="short">
          A junior software developer and a student at the University of Technology Yogyakarta.
        </div>

        
      </Introduction>
    </Container>
  );
};

const ProfileCard = styled.div`
  height: 8rem;
  display: flex;
  transition: color 0.5s;
  color: ${(props) => props.theme.textStart};

  @media (max-width: 40rem) {
    max-width: 20rem;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0;
    margin: 0;
  }

  .image-cropper {
    box-sizing: border-box;
    height: 8rem;
    width: 8rem;
    
    background-size: cover;

    @media (max-width: 40rem) {
      height: 7rem;
      width: 7rem;
    }

    border-radius: 50%;
    border: solid ${(props) => props.theme.menuLinkActive} 0.2rem;
  }

  img {
    height: 8rem;
    @media (max-width: 40rem) {
      height: 7rem;
    }
  }

  .hi {
    font-size: 2.2rem;
    letter-spacing: -0.1rem;

    @media (max-width: 40rem) {
      padding-top: 1rem;
      font-size: 1.9rem;
      text-align: center;
      letter-spacing: -0.086rem;
    }
  }

  h1 {
    transition: color 0.5s;
    color: ${(props) => props.theme.menuLinkActive};
    font-weight: 700;
    margin: 0;
    font-size: 4.4rem;
    letter-spacing: -0.2rem;

    @media (max-width: 40rem) {
      letter-spacing: -0.17rem;
      font-size: 2.5rem;
    }

    @media (max-width: 20rem) {
      letter-spacing: -0.17rem;
      font-size: 2rem;
    }
  }

  .profile-text {
    padding: 0 1rem;
    @media (max-width: 40rem) {
      padding: 0;
    }
  }
`;

const Introduction = styled.div`
  max-width: 34rem;
  transition: color 0.5s;
  color: ${(props) => props.theme.textStart};

  .short {
    padding: 1rem;
    letter-spacing: -0.02rem;
    font-size: 1.2rem;
    font-weight: 400;
    box-sizing: border-box;

    @media (max-width: 40rem) {
      padding: 1rem;
      font-size: 1.2rem;
      text-align: center;
      letter-spacing: 0rem;
      max-width: 20rem;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    @media (max-width: 40rem) {
      font-size: 0;
    }
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

export default Home;
