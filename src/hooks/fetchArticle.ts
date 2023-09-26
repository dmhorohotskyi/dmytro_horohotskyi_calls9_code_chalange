import useFetch from "./useFetch";
import api from "../utils/api";


export default function useFetchArticles(articleId: string){
    const url = api.getArticleUrl(articleId);
    const {data, loading, error} = useFetch(url, 'test', 'tests');

    return { data, error, loading }
}