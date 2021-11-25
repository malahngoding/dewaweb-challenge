import { useEffect, useState } from "react";

const shuffleEnemyCard = () => {
  const array = ["Gunting", "Kertas", "Batu"];
  return array.sort(() => Math.random() - 0.5)[0];
};

export const Jankenpon = () => {
  const [enemyCard, setEnemyCard] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (selectedCard !== "") {
        setEnemyCard(shuffleEnemyCard());
      }
    }, 1000);
  }, [selectedCard]);
  return (
    <div>
      <div>
        <p>Musuh memilih: {enemyCard}</p>
      </div>
      <p>Anda memilih: {selectedCard}</p>
      <div className="selection-wrapper">
        <SelectionCard item="Batu" onClick={setSelectedCard} />
        <SelectionCard item="Gunting" onClick={setSelectedCard} />
        <SelectionCard item="Kertas" onClick={setSelectedCard} />
      </div>
    </div>
  );
};

export const SelectionCard = (props) => {
  return (
    <div className="card-component" onClick={() => props.onClick(props.item)}>
      {props.item}
    </div>
  );
};
