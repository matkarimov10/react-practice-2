import {useFetch} from "../../hooks/useFetch.jsx";
import {NavLink} from "react-router-dom";

export function Articles() {
    const {data, isLoading, error} = useFetch('http://localhost:3000/articles')
    return (
        <div className="article-container">
            {isLoading ? <div>Loading...</div>: error ? <div>{error}</div>: null}
            {data && data.map((article)=>{
                return (
                    <div className="card" key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.author}</p>
                        <NavLink to={`/articles/${article.id}`}>Read More</NavLink>
                    </div>
                )
            })}
        </div>
    )
}