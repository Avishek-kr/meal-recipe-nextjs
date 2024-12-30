import Image from "next/image";
import { notFound } from "next/navigation";

const { DUMMY_NEWS } = require("../../../../dummy-news");

export default async function ItemDetails({ params }) {
    const slug = await params;
    const newsItem = DUMMY_NEWS.find((indiNews) => indiNews.slug === slug.slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width='112' height='112' />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}