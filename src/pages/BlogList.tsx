import type { FC } from "react";
// import { blogCardData } from "../data/blogCardData";
import BlogCard from "../components/BlogCard";
import "../styles/BlogList.scss";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const { t: _t } = useTranslation();

    const pageSize = 9;

    const fetchBlogData = async (page: number) => {
        fetch(
            `https://team-app-java.up.railway.app/api/blogs?page=${page}&size=${pageSize}`
        )
            .then(res => {
                if (!res.ok)
                    throw new Error("블로그 데이터를 불러오는 데 실패했어요.");
                return res.json();
            })
            .then(data => {
                setBlogCardData(data.content);
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
            })
            .catch(err => {
                console.error("에러 발생:", err);
            });
    };

    useEffect(() => {
        fetchBlogData(0);
        console.log("API_BASE_URL: " + import.meta.env.VITE_API_BASE_URL);
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
                            cardImage={
                                item.image
                                    ? item.image
                                    : "/team-app-ts/img/empty_image.png"
                            }
                            title={item.title}
                            description={item.description}
                            writerImage={
                                item.writerImage
                                    ? item.writerImage
                                    : "/team-app-ts/img/avatar.png"
                            }
                            writerName={item.writerName}
                            createdAt={item.createdAt}
                            id={item.id}
                        />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageGroupSize={5}
                    onPageChange={page => {
                        fetchBlogData(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                />
            </div>
        </main>
    );
};

export default BlogList;
