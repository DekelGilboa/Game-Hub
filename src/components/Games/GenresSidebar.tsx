import useGenres from "../../hooks/useGenres";

const GenresSidebar = () => {
  const { genresList, error } = useGenres();

  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {genresList.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresSidebar;
