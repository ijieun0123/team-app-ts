import type { FC } from "react";
// import { blogCardData } from "../data/blogCardData";
import BlogCard from "../components/BlogCard";
import "../styles/Blog.scss";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

interface BlogCardData {
    id: number;
    image: string;
    title: string;
    description: string;
    writerImage: string;
    writerName: string;
    career: string;
    createdAt: string;
}

const BlogList: FC = () => {
    const [blogCardData, setBlogCardData] = useState<BlogCardData[]>([]);

    const { t } = useTranslation();

    useEffect(() => {
        fetch("/api/blogs")
            .then(res => {
                if (!res.ok)
                    throw new Error("블로그 데이터를 불러오는 데 실패했어요.");
                return res.json();
            })
            .then(data => {
                setBlogCardData(data);
            })
            .catch(err => {
                console.error("에러 발생:", err);
            });
    }, []);

    return (
        <main id="main-content" className="blog" tabIndex={-1}>
            <div className="container">
                <div className="title_box">
                    <h1 className="title">
                        <Trans i18nKey="blogTitle" />
                    </h1>
                    <p className="paragraph">
                        <Trans i18nKey="blogSubtitle" />
                    </p>
                </div>
                <div className="card_box">
                    {/* card */}
                    {blogCardData.map((item, idx) => (
                        <BlogCard
                            key={idx}
                            cardImage={item.image}
                            title={item.title}
                            description={item.description}
                            writerImage={item.writerImage}
                            writerName={item.writerName}
                            createdAt={item.createdAt}
                            id={item.id}
                        />
                    ))}
                </div>
                <Button className="caption next_btn">Next</Button>
            </div>
        </main>
    );
};

export default BlogList;
