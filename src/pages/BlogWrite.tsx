import { useState, useEffect, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/BlogWrite.scss";
import InputTextarea from "../components/InputTextarea";
import Button from "../components/Button";

const BlogWrite: FC = () => {
    const { id } = useParams<{ id: string }>(); // URL에서 id 추출
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [writerImage, setWriterImage] = useState("");
    const [writerName, setWriterName] = useState("");
    const [career, setCareer] = useState("");

    // 1. id가 있을 때 기존 데이터 불러오기
    useEffect(() => {
        if (id) {
            fetch(`/api/blogs/${id}`)
                .then(res => {
                    if (!res.ok) throw new Error("Failed to fetch blog");
                    return res.json();
                })
                .then(data => {
                    setTitle(data.title);
                    setDescription(data.description);
                    setImage(data.image);
                    setWriterImage(data.writerImage);
                    setWriterName(data.writerName);
                    setCareer(data.career);
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
            writerImage,
            writerName,
            career,
        };

        try {
            const response = await fetch(`/api/blogs${id ? `/${id}` : ""}`, {
                method: id ? "PATCH" : "POST", // 수정: PUT, 신규 생성: POST
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(
                    id ? "Failed to update blog" : "Failed to save blog"
                );
            }

            const result = await response.json();
            console.log("Saved successfully:", result);

            alert(id ? "블로그가 수정되었습니다." : "블로그가 저장되었습니다.");

            // 저장 후 리스트 또는 상세 페이지로 이동
            navigate(id ? `/blog-detail/${id}` : "/blog");
        } catch (error) {
            console.error("Error saving blog post:", error);
            alert("저장 실패");
        }
    };

    return (
        <main id="main-content" className="write" tabIndex={-1}>
            <div className="container">
                <div className="title_box">
                    <h1 className="title">{id ? "Update Blog" : "Write"}</h1>
                    <p className="paragraph">
                        {id
                            ? "Edit and update your blog post"
                            : "Write to share what you’ve learned with the team"}
                    </p>
                </div>
                <form
                    className="input_textarea_box"
                    onSubmit={e => e.preventDefault()}
                >
                    {/* input, textarea에 value 추가 */}
                    <div className="txt_box">
                        <label htmlFor="title" className="input_title">
                            Title
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
                            Image
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
                            Description
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
                    <div className="txt_box">
                        <label htmlFor="writerImage" className="input_title">
                            Writer image
                        </label>
                        <InputTextarea
                            id="writerImage"
                            as="input"
                            type="text"
                            placeholder="Writer image"
                            className="paragraph"
                            value={writerImage}
                            onChange={e => setWriterImage(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="writerName" className="input_title">
                            Writer name
                        </label>
                        <InputTextarea
                            id="writerName"
                            as="input"
                            type="text"
                            placeholder="Writer name"
                            className="paragraph"
                            value={writerName}
                            onChange={e => setWriterName(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="career" className="input_title">
                            Writer career
                        </label>
                        <InputTextarea
                            id="career"
                            as="input"
                            type="text"
                            placeholder="Writer career"
                            className="paragraph"
                            value={career}
                            onChange={e => setCareer(e.target.value)}
                        />
                    </div>
                </form>
                <Button onClick={handleSave} className="caption save_btn">
                    {id ? "Update" : "Save"}
                </Button>
            </div>
        </main>
    );
};

export default BlogWrite;
