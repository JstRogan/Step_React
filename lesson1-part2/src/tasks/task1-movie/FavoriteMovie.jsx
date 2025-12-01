function InfoRow({ label, value }) {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  )
}

function FavoriteMovie() {
  const movie = {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    year: 2014,
    studio: 'Paramount Pictures, Warner Bros.',
    country: 'USA, UK',
    genres: 'Science fiction, drama',
    duration: '169 minutes',
    posterUrl:
      'https://m.media-amazon.com/images/I/71n58aK8ZAL._AC_UF894,1000_QL80_.jpg',
  }

  return (
    <main className="page">
      <section className="card">
        <h1>{movie.title}</h1>
        <p className="subtitle">{movie.director}</p>
        <div className="grid">
          <div>
            <InfoRow label="Year" value={movie.year} />
            <InfoRow label="Studio" value={movie.studio} />
            <InfoRow label="Country" value={movie.country} />
            <InfoRow label="Genres" value={movie.genres} />
            <InfoRow label="Duration" value={movie.duration} />
          </div>
          <div>
            <p>
              Interstellar is a film about a group of astronauts who travel
              through a wormhole near Saturn in search of a new home for
              humanity. It combines space exploration with a personal story
              about family and time.
            </p>
          </div>
        </div>
        <div className="image-grid">
          <img src={movie.posterUrl} alt={`${movie.title} poster`} />
        </div>
      </section>
    </main>
  )
}

export default FavoriteMovie
