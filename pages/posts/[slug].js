import Head from "next/head";
import { getPost, getSlugs } from "../../lib/post";




export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: { slug }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {

    const post = await getPost(slug);
    return {
        props: {post}
    }
}

export default function PostPage({ post }) {
    return (
        <>
            <Head>
                <title>{`${post.title} - My Blog `}</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <p>
                    {post.body}
                </p>
            </main>
        </>
    )
}