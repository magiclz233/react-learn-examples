import { useState } from 'react';

const UpdateObjectArrays = () => {
      const [movies, setMovies] = useState([
    { id: 1, title: "Spider man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);

  const handleClick = () => {
    setMovies(movies.map(movie => ({
      ...movie,
      ratings: movie.ratings * 2,
    })));
  }
    return (
        <div>
            <h1>电影评分列表</h1>
            {movies.map(movie => (
                <div key={movie.id}>
                    {movie.title} - {movie.ratings}
                </div>
            ))}
            <button onClick={handleClick}>更新评分</button>
        </div>
    );
};

export default UpdateObjectArrays;