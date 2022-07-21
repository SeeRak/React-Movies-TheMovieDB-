import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import { IMovie } from '../../interface/IMovie';

const UserList = () => {
  const [listData, setListData] = useState<IMovie[]>([]);

  useEffect(() => {
    const storeData = localStorage.getItem('favorites');
    const storeDataArrayId = storeData ? JSON.parse(storeData) : [];

    storeDataArrayId.forEach((id: number) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=debe018b315b4afff20a1dc22c5e84f3&language=fr-FR`
        )
        .then((res) => {
          console.log(res.data);
          setListData((listData) => [...listData, res.data]);
        });
    });
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p>Aucun coups de coeurs</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
