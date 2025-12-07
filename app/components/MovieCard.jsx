function MovieCard({ movie }) {
  function onFavouriteClick() {
    alert("Added to favourites!!");
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 h-full flex flex-col mb-8">
      <div className="movie-poster">
        <img src={movie.title} alt={movie.title} />
        <div className="movie-overlay">
          <button onClick={onFavouriteClick}>💖</button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
