import gql from "graphql-tag";

export const GET_POSTS_BY_TYPES_QUREY = gql`
    query GetBlogPostsByType($type: String){
        posts: getPostsByType(type: $type) {
            id
            title
            description
            updated_at
            author
            image
            categories
        }
    }
`