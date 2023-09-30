import Head from "next/head";
import { readFile } from "fs/promises";

export async function getStaticProps() {
    const data = await readFile('content/post/first-post.json', 'utf8');
    const post = JSON.parse(data)
    console.log("data", post);
    return {
        props: {
            post
        }
    }
}

export default function FirstPage({ post }) {
    console.log("rendered bhai rendered",post);
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