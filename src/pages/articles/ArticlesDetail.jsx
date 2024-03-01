import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch.jsx";

export function ArticlesDetail() {
    const {id} = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const {data: article, isLoading, error} = useFetch(url)
    return (
        <div>
            {isLoading ? <h4>Loading...</h4> : error ? <h4>{error}</h4> : ''}
            {article && <>
                <img src={article.image} alt="" height={300}/>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </>}
        </div>
    )
}