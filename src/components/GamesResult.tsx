import useGames from "../hooks/useGames";

const GamesResult = () => {
  const { gamesList, error } = useGames();
  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {gamesList.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesResult;
