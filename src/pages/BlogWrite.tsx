import { useState, useEffect, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/FormPage.scss";
import InputTextarea from "../components/InputTextarea";
import Button from "../components/Button";
import ErrorModal from "../components/ErrorModal";
import { useErrorHandler } from "../hooks/useErrorHandler";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BlogWrite: FC = () => {
    const { id } = useParams<{ id: string }>(); // URL에서 id 추출
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const { error, setError, handleError } = useErrorHandler([
        "title",
        "blogImage",
        "description",
    ]);

    const { t: _t } = useTranslation();

    // 1. id가 있을 때 기존 데이터 불러오기
    useEffect(() => {
        if (id) {
            fetch(`${API_BASE_URL}/api/blogs/${id}`)
                .then(res => {
                    if (!res.ok) throw new Error("Failed to fetch blog");
                    return res.json();
                })
                .then(data => {
                    setTitle(data.title);
                    setDescription(data.description);
                    setImage(data.image);
                })
                .catch(err => {
                    console.error(err);
                    alert("블로그 데이터를 불러오는데 실패했습니다.");
                });
        }
    }, [id]);

    // 2. 저장 함수: id가 있으면 수정, 없으면 새로 생성
    const handleSave = async () => {
        const data = {
            title,
            description,
            image,
        };

        try {
            const token = localStorage.getItem("accessToken");

            const response = await fetch(
                `${API_BASE_URL}/api/blogs${id ? `/${id}` : ""}`,
                {
                    method: id ? "PATCH" : "POST", // 수정: PUT, 신규 생성: POST
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                if (!response.ok) {
                    const errData = await response.json();
                    handleError(errData);
                    return;
                }
            }

            const result = await response.json();
            console.log("Saved successfully:", result);

            // 저장 후 리스트 또는 상세 페이지로 이동
            navigate(id ? `/blogs/${id}` : "/blogs");
        } catch (error) {
            console.error("Error saving blog post:", error);
            alert("저장 실패");
        }
    };

    return (
        <main id="main-content" className="write" tabIndex={-1}>
            <div className="container">
                <div className="title_box">
                    <h1 className="title">
                        {id ? (
                            <Trans i18nKey="updateBlogTitle" />
                        ) : (
                            <Trans i18nKey="writeBlogTitle" />
                        )}
                    </h1>
                    <p className="paragraph">
                        {id ? (
                            <Trans i18nKey="updateBlogSubtitle" />
                        ) : (
                            <Trans i18nKey="writeBlogSubtitle" />
                        )}
                    </p>
                </div>
                <form
                    className="input_textarea_box"
                    onSubmit={e => e.preventDefault()}
                >
                    {/* input, textarea에 value 추가 */}
                    <div className="txt_box">
                        <label htmlFor="title" className="input_title">
                            <Trans i18nKey="titleLabel" />
                        </label>
                        <InputTextarea
                            id="title"
                            as="input"
                            type="text"
                            placeholder="Title"
                            className="paragraph"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="image" className="input_title">
                            <Trans i18nKey="imageLabel" />
                        </label>
                        <InputTextarea
                            id="image"
                            as="input"
                            type="text"
                            placeholder="Writer Image"
                            className="paragraph"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="description" className="input_title">
                            <Trans i18nKey="descriptionLabel" />
                        </label>
                        <InputTextarea
                            id="description"
                            as="textarea"
                            type="text"
                            placeholder="Description"
                            className="paragraph"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </form>
                <Button onClick={handleSave} className="caption save_btn">
                    {id ? "Update" : "Save"}
                </Button>
            </div>
            {/* 에러 모달 */}
            <ErrorModal error={error} onClose={() => setError(null)} />
        </main>
    );
};

export default BlogWrite;
