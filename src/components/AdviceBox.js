import React, { useState, useEffect } from "react";
import Wrapper from "./AdviceBox.styled";
import dice from "../images/icon-dice.svg";
import divider from "../images/pattern-divider-desktop.svg";

const AdviceBox = () => {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://api.adviceslip.com/advice");

      const data = await resp.json();
      const { id, advice } = data.slip;
      setAdvice({ id, advice });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  if (loading) {
    return;
  }
  return (
    <Wrapper>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3>advice #{advice.id}</h3>
          <h2>"{advice.advice}"</h2>
          <img className="divider" src={divider} alt="" />
        </>
      )}

      <div className="dice-container">
        <button onClick={fetchAdvice}>
          <img className="dice" src={dice} alt="" />
        </button>
      </div>
    </Wrapper>
  );
};

export default AdviceBox;
