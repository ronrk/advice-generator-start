import styled from "styled-components";

const AdviceBoxStyled = styled.div`
  background-color: var(--dark-grayish-blue);
  max-width: 60%;
  text-align: center;
  padding: 2rem 4rem;
  color: var(--light-cyan);
  border-radius: 8px;

  h3 {
    padding: 0;

    color: var(--neon-green);
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 4px;
    word-spacing: 5px;
  }
  h2 {
    margin-bottom: 15px;
    font-size: 28px;
  }
  .divider {
    display: inline-block;
    padding: 0;
    margin: 0;
    width: 100%;

    margin-top: 20px;
  }
  .dice {
    width: 25px;
    transition: all 0.2s;
  }
  .dice-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--neon-green);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transform: translate(0, 100%);
  }
  button {
    background: 0;
    border: 0;
    cursor: pointer;

    &:hover img {
      transform: scale(1.2);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.45);
    }

    &:active {
      outline: 0;
    }

    &:active img {
      transform: scale(0.95) rotate(180deg);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
    }
  }

  @media (max-width: 650px) {
    max-width: 95%;
  }
`;

export default AdviceBoxStyled;
