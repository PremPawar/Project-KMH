import React from "react";

import { MasonryPost, PostMasonry, PostGrid } from "../components/common";



// const trendingConfig = {
//     1: {
//         gridArea: '1 / 2 / 3 / 3',
//     }
// }

// const featuredConfig = {
//     0: {
//         gridArea: '1 / 1 / 2 / 3',
//         height: '300px',

//     },
//     1: {
//         height: '300px', 
//     },
//     3: {
//         height: '630px',
//         marginLeft: '30px',
//         width: '500px',
        
//     }
// }

const mergeStyle = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Prem Pawar'
        post.description = "Maratha history related articles"
    })
}

// const recentPosts = [...trending, ...featured, ...featured]


// mergeStyle(trending, trendingConfig)
// mergeStyle(featured, featuredConfig)


const lastFeatured = featured.pop()

export default function Home() {
    return (
        <main className="home">

            <section className="container">
                <div className="row">
                    {/* <h1>Featured Posts</h1> */}
                    <section className="featured-posts-container">
                    {/* <section> */}
                        <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
                        <MasonryPost post={lastFeatured} tagsOnTop={true} />
                    </section>
                </div>
            </section>

            <section className="bg-white">
                <section className="container">
                    <div className="row">
                        <h1>Recent Posts</h1>
                        <PostGrid posts={recentPosts} />
                    </div>
                </section>
            </section>
            
            <section className="container">
                <div className="row">
                    {/* <h1>Trending Post</h1> */}
                    <PostMasonry posts={trending} columns={3} />
                </div>
            </section>

        </main>

    )

}