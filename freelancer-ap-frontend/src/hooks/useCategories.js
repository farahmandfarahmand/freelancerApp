import {useQuery} from "@tanstack/react-query"
import { getCategorysApi } from "../services/categoryService"

export default function useCategories(){
    const {data,isLoading}=useQuery({
        queryKey:["categories"],
        queryFn:getCategorysApi
        
    });

    //{_id , title, enTitle, ...}
    const {categories:rawCategories=[]}=data || {};

    // we make object that tobe :{value , label}
    const categories= rawCategories.map((item)=>({
        label:item.title,
        value:item._id,
    }))
    const transformedCategories= rawCategories.map((item)=>({
        label:item.title,
        value:item.englishTitle,
    }));
    return {isLoading,categories,transformedCategories}
}