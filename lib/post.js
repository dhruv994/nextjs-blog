import { readFile, readdir } from 'fs/promises';

export async function getPost(slug) {
    const data = await readFile(`content/post/${slug}.json`, 'utf8');
    return JSON.parse(data)
}


export async function getPosts() {
    const slugs = await getSlugs();
    const posts = [];
    for (const slug of slugs) {
        const post = await getPost(slug);
        posts.push({ slug, ...post })
    }
    return posts;
}


export async function getSlugs() {
    const sufix = '.json';
    const files = await readdir(`content/post`);
    return files.filter((file) => file.endsWith(sufix)).map((file) => file.slice(0, -sufix.length))
}