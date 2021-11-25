import React, { useEffect, useState } from "react";

export const JyankenponComponent = () => {
	const [playerSelection, setPlayerSelection] = useState("");
	const [enemySelection, setEnemySelection] = useState("");
	const [winner, setWinner] = useState("");

	const shuffleEnemyCard = () => {
		const array = ["Gunting", "Kertas", "Batu"];
		return array.sort(() => Math.random() - 0.5)[0];
	};

	useEffect(() => {
		// Logic
		if (playerSelection === "Gunting") {
			switch (enemySelection) {
				case "Kertas":
					setWinner("Player Win");

					break;
				case "Batu":
					setWinner("Enemy Win");

					break;
				case "Gunting":
					setWinner("Draw");

					break;
			}
		}
		if (playerSelection === "Kertas") {
			switch (enemySelection) {
				case "Gunting":
					setWinner("Enemy Win");

					break;
				case "Batu":
					setWinner("Player Win");

					break;
				case "Kertas":
					setWinner("Draw");

					break;
			}
		}
		if (playerSelection === "Batu") {
			switch (enemySelection) {
				case "Kertas":
					setWinner("Enemy Win");

					break;
				case "Gunting":
					setWinner("Player Win");

					break;
				case "Batu":
					setWinner("Draw");

					break;
			}
		}
	}, [playerSelection, enemySelection]);

	useEffect(() => {
		if (playerSelection !== "") {
			setEnemySelection(shuffleEnemyCard());
		}
	}, [playerSelection]);

	const handleClick = (item) => {
		setPlayerSelection(item);
	};

	return (
		<div style={{ margin: "2em" }}>
			<p>Pemain memilih : {playerSelection}</p>
			<p>Musuh memilih : {enemySelection}</p>
			<br />
			<p>Pemenangnya adalah : {winner}</p>
			<button onClick={() => handleClick("Gunting")}>Gunting</button>
			<button onClick={() => handleClick("Kertas")}>Kertas</button>
			<button onClick={() => handleClick("Batu")}>Batu</button>
		</div>
	);
};
