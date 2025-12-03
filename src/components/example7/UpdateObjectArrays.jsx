import { useState } from 'react';

const UpdateObjectArrays = () => {
      const [movies, setMovies] = useState([
    { id: 1, title: "Spider man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);
    const [movie, setMovie] = useState({
        id: movies.length + 1,
        title: "",
        ratings: 0,
    });
  const handleClick = () => {
    setMovies(movies.map(movie => ({
      ...movie,
      ratings: movie.ratings * 2,
    })));
  }
    return (
        <div>
            <h1>电影评分列表</h1>
            <form action="">
                <label htmlFor="title">电影标题:</label>
                <input type="text" id="title" name="title" value={movie.title} onChange={(e) => setMovie({ ...movie, title: e.target.value })} />
                <label htmlFor="ratings">电影评分:</label>
                <input type="number" id="ratings" name="ratings" value={movie.ratings} onChange={(e) => setMovie({ ...movie, ratings: e.target.value })} />
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    if (movie.title.trim() && movie.ratings) {
                        // 如果名称相同，修改评分，否则添加新电影
                        if (movies.some(item => item.title === movie.title)) {
                            setMovies(movies.map(item => item.title === movie.title ? { ...item, ratings: movie.ratings } : item));
                        } else {
                            setMovies([...movies, movie]);
                        }
                        setMovie({
                            id: movies.length + 1,  
                            title: "",
                            ratings: 0,
                        });
                    }
                }}>添加电影</button>
            </form>
            {movies.map(movie => (
                // 渲染电影列表
                <table key={movie.id}>
                    <tr>
                        <td style={{ padding: "10px" }}>{movie.title}</td>
                        <td style={{ padding: "10px" }}>{movie.ratings}</td>
                        <td style={{ padding: "10px" }}>
                            <button onClick={() => setMovies(movies.filter(item => item.id !== movie.id))}>删除</button>
                            <button onClick={() => setMovie(movie)}>编辑评分</button>
                        </td>
                    </tr>
                </table>
            ))}
            <button onClick={handleClick}>更新评分</button>
        </div>
    );
};

export default UpdateObjectArrays;