export default function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Plot}</h3>
        <h2>{movie.Genre}</h2>
        <h2>Budget: {movie.BoxOffice}</h2>
        <h2> Released: {movie.Released}</h2>
        <h2> Wriiter: {movie.Writer}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  return movie ? loaded() : loading();
}
