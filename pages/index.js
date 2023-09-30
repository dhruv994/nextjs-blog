import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/post";

// export async function getStaticPaths() {
//     const slugs = await getSlugs();
//     return {
//         paths: slugs.map((slug) => ({ params: { slug } })),
//         fallback: false
//     };
// }
export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: { posts }
    }
}



export default function HomePage({ posts }) {
    console.log(posts);

    return (
        <>
            <Head>
                <title> My Blog</title>
                <meta name="description" value="this is my blog"></meta>
            </Head>
            <main>
                <h1> My Blog</h1>
                <ul>{posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </li>
                ))
                }
                </ul>
            </main>
        </>
    )
}