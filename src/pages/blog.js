import React from "react";
import { useQuery } from "@apollo/react-hooks";
import PostGrid from "../components/common/post-grid";


import withTitle from '../components/common/with-title'
import {GET_POSTS_BY_TYPES_QUREY} from '../queries/posts'


const type = ''

export default function Blog ({history}) {
    const {data, error} = useQuery(GET_POSTS_BY_TYPES_QUREY, {
        variables: {
            type: type
        }
    })

    if (error){
        return "something went wrong."
    }

     return withTitle(
         'blogs',
         data?.posts 
         ? <PostGrid posts={data.posts}/>
         : "loading"
     )

}