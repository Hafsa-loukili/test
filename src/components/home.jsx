
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5dc;
  border-radius: 8px;
  color: #9caf88 !important;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #9caf88;
  color: #f5f5dc;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  position: relative;
  margin-top: 3rem;
  bottom: 0;
`;

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <HomeContainer>
          <div className="text-center">Bienvenue sur notre page d'accueil</div>
        </HomeContainer>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={`${process.env.PUBLIC_URL}/images/image1.jpeg`}
                className="card-img-top"
                alt="Sac 1"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sac 1</h5>
                <p className="card-text">Prix: 150 MAD</p>
                <button
                  className="btn"
                  style={{ backgroundColor: '#9caf88', color: '#f5f5dc' }}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={`${process.env.PUBLIC_URL}/images/image2.jpeg`}
                className="card-img-top"
                alt="Sac 2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sac 2</h5>
                <p className="card-text">Prix: 150 MAD</p>
                <button
                  className="btn"
                  style={{ backgroundColor: '#9caf88', color: '#f5f5dc' }}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={`${process.env.PUBLIC_URL}/images/image3.jpeg`}
                className="card-img-top"
                alt="Sac 3"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sac 3</h5>
                <p className="card-text">Prix: 150 MAD</p>
                <button
                  className="btn"
                  style={{ backgroundColor: '#9caf88', color: '#f5f5dc' }}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src={`${process.env.PUBLIC_URL}/images/image4.jpeg`}
                className="card-img-top"
                alt="Sac 4"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sac 4</h5>
                <p className="card-text">Prix: 150 MAD</p>
                <button
                  className="btn"
                  style={{ backgroundColor: '#9caf88', color: '#f5f5dc' }}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer>&copy; 2024 Votre Boutique. Tous droits réservés.</Footer>
    </>
  );
};

export default Home;
