import React, { useEffect, useRef, useState } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button } from 'antd'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import Helmet from "react-helmet";

import { GET_POST_QUERY } from "../queries/posts";


const options = {
    theme: 'snow'
};


export default function PostViewer() {
    const contentContainer = useRef(null)
    const [editorEl, setEditorEl] = useState(null)
    const match = useRouteMatch()
    const { id } = useParams()
    let history = useHistory();

    const { data, error, loading } = useQuery(GET_POST_QUERY, {
        variables: {
            id
        },
        onCompleted: ({post}) => {
            if(post.text) {
                const chg = JSON.stringify(post.text)
                const delta = JSON.parse(chg);
                editorEl.setContents(delta)
                
            }
        }

    })

    const editPost = () => history.push({
        pathname: '/edit-post',
        state: {
            data
        }
    })

    // useEffect(() => {
    //     if (contentContainer.current !== null) {
    //         const article = document.createElement('article')
    //         const options = {
    //             readOnly: true,
    //             modules: {
    //                 toolbar: '#toolbar'
    //             }
    //         }

    //         new Quill(article, options)

    //         setTimeout(() => { contentContainer.current.appendChild(article) }, 0)
    //     }
    // }, [data])

    useEffect(() => {
        setEditorEl(new Quill(contentContainer.current, options))
    }, [])

    return (
        <article className="post-viewer-container">
            <Helmet>
                <title>{data?.post?.title}</title>
                <meta property="og:image" content={data?.post?.image} />
                <meta property="og:title" content={data?.post?.title} />
                <meta property="og:url" content={match.url} />
                <meta property="og:type" content="article" />
                <meta property="description" content={data?.post?.desription} />
            </Helmet>
            <Button type="primary" onClick={editPost}>Edit Post</Button>
            <section className="post-intro-container">
                {
                    data?.post?.bg_type === '2' ?
                        (
                            <section className="iframe-container">
                                {data?.post?.bfg_src &&
                                    <iframe title="background-video" src={data?.post?.bg_src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                                }
                            </section>
                        )
                        :
                        (
                            <figure>
                                <img
                                    src={data?.post?.bg_src}
                                    atl="post-background"
                                />

                            </figure>
                        )
                }
            <section className="post-title-container">
                <div className="title-wrapper">
                    <h1>{data?.post?.title}</h1>
                    <p className="flex flex-coloum">
                        <span>
                            {
                                data?.post?.author && `Author: ${data?.post?.author}`
                            }
                        </span>
                        <span>Last updated:
                            {
                                data?.post?.updated_at &&
                                new Date(parseInt(data?.post?.updated_at)).toLocaleString()
                            }
                        </span>
                    </p>
                </div>
            </section>
            </section>
            <section ref={contentContainer}>

            </section>
        </article>
    )
}

