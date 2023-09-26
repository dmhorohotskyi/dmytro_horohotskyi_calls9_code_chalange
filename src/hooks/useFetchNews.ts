import { useEffect, useState } from "react";
import axios from "axios";
import {string} from "yup";

export default function useFetch(url: string, successAction: any, errorAction: any){

    const [data,setData] = useState({firstNine: [], created: string})
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(url);
                    setData({
                        ...response.data,
                        firstNine: response.data.submitted.slice(0, 9)
                    })
                }catch(err: any){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
}