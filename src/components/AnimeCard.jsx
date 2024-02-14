const AnimeCard = ({ anime }) => (
  <div>
    <h3>{anime.title}</h3>
    <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: '100px', height: 'auto' }} />
    <p>{anime.synopsis}</p>
  </div>
);

export default AnimeCard;

