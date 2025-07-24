import type { FC } from "react";
import "../styles/BlogDetail.scss";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

type Blog = {
    title: string;
    description: string;
    image: string;
    writerImage: string;
    writerName: string;
    createdAt: string;
    career: string;
};

const BlogDetail: FC = () => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/blogs/${id}`
                );
                if (!response.ok) {
                    throw new Error("블로그 데이터를 불러오는데 실패했습니다");
                }

                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error("블로그 로딩 오류:", error);
                alert("블로그 정보를 불러오지 못했습니다.");
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/blogs/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("삭제 실패");
            }

            alert("삭제 완료!");
            // 페이지 이동
            navigate({ pathname: "/blog" });
        } catch (error) {
            console.error("삭제 중 에러:", error);
            alert("삭제 중 오류 발생");
        }
    };

    return (
        <main id="main-content" className="blog_detail" tabIndex={-1}>
            <div className="blog_detail_container">
                {blog ? (
                    <>
                        <h1 className="title">{blog.title}</h1>
                        <div className="writer">
                            <img src={blog.writerImage} alt="writer" />
                            <span className="caption">{blog.writerName}</span>
                            <span className="line">|</span>
                            <span className="caption">
                                {new Date(blog.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </span>
                        </div>
                        <img
                            src={blog.image}
                            alt="blog image"
                            className="post_img"
                        />
                        <p className="paragraph">
                            {blog.description.split("\n").map((line, idx) => (
                                <span key={idx}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>

                        <div className="btn_box">
                            <Button
                                className="update_btn caption"
                                as={Link}
                                to={`/blog-update/${id}`}
                            >
                                Update
                            </Button>
                            <Button
                                $black
                                className="delete_btn caption"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        </div>

                        <div className="written_by_box">
                            <img src={blog.writerImage} alt="writer" />
                            <div className="txt_box">
                                <span className="written_by">WRITTEN BY</span>
                                <span className="name">{blog.writerName}</span>
                                <span className="caption">{blog.career}</span>
                            </div>
                        </div>

                        <span className="line"></span>

                        <form className="conversation">
                            <p className="input_title">Join the conversation</p>
                            <div className="img_textarea">
                                <img
                                    src="/team-app-ts/img/blog_writer_2.svg"
                                    alt="writer"
                                />
                                <label
                                    htmlFor="comment"
                                    className="visually_hidden"
                                >
                                    Write a comment
                                </label>
                                <textarea
                                    name="comment"
                                    id="comment"
                                    placeholder="Comments"
                                ></textarea>
                            </div>
                        </form>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </main>
    );
};

export default BlogDetail;
