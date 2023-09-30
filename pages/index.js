import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Head>
                <title> My Blog</title>
                <meta name="description" value="this is my blog"></meta>
            </Head>
            <main>
                <h1> My Blog</h1>
                <ul>
                    <li>
                        <Link href="/posts/first-post" >First Post</Link>
                    </li>
                </ul>
            </main>
        </>
    )
}