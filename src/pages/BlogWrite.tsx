import { useState, type FC } from "react";
import "../styles/BlogWrite.scss";
import InputTextarea from "../components/InputTextarea";
import Button from "../components/Button";

const BlogWrite: FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [writerImage, setWriterImage] = useState("");
    const [writerName, setWriterName] = useState("");

    const handleSave = async () => {
        const data = {
            title,
            description,
            image,
            writerImage,
            writerName,
        };

        try {
            const response = await fetch("http://localhost:8080/api/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to save blog post");
            }

            const result = await response.json();
            console.log("Saved successfully:", result);

            // 성공 시 이동 또는 알림
            alert("블로그 저장 완료!");
        } catch (error) {
            console.error("Error saving blog post:", error);
            alert("저장 실패");
        }
    };

    return (
        <main id="main-content" className="write" tabIndex={-1}>
            <div className="container">
                <div className="title_box">
                    <h1 className="title">Write</h1>
                    <p className="paragraph">
                        Write to share what you’ve learned with the team
                    </p>
                </div>
                <form className="input_textarea_box">
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
                            onChange={e => setWriterName(e.target.value)}
                        />
                    </div>
                </form>
                <Button onClick={handleSave} className="caption save_btn">
                    Save
                </Button>
            </div>
        </main>
    );
};

export default BlogWrite;
