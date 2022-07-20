import React from 'react';
import { IMovie } from '../../interface/IMovie';

const Card = (props: { movie: IMovie }) => {
  const dateFormater = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };
  const genreFinder = () => {
    const genreArray = [];
    for (let i = 0; i < props.movie.genre_ids.length; i++) {
      switch (props.movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <div className="card">
      <img
        src={
          props.movie.backdrop_path
            ? 'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path
            : './img/poster.jpg'
        }
        alt="affiche film"></img>
      <h2>{props.movie.title}</h2>
      {props.movie.release_date ? (
        <h5> Sorti le : {dateFormater(props.movie.release_date)}</h5>
      ) : (
        ''
      )}
      <h4>
        {props.movie.vote_average}/10 <span>⭐</span>
      </h4>
      <ul>{genreFinder()}</ul>
      {props.movie.overview ? <h3>Synopsis</h3> : ''}
      <p>{props.movie.overview}</p>

      <div className="btn">Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Card;
