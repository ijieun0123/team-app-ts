import type { FC } from "react";
import "../styles/BlogWrite.scss";
import InputTextarea from "../components/InputTextarea";
import Button from "../components/Button";

const BlogWrite: FC = () => {
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
                        <label htmlFor="" className="input_title">
                            Title
                        </label>
                        <InputTextarea
                            as="input"
                            type="text"
                            placeholder="Title"
                            className="paragraph"
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="" className="input_title">
                            Image
                        </label>
                        <InputTextarea
                            as="input"
                            type="text"
                            placeholder="Writer Image"
                            className="paragraph"
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="" className="input_title">
                            Description
                        </label>
                        <InputTextarea
                            as="textarea"
                            type="text"
                            placeholder="Description"
                            className="paragraph"
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="" className="input_title">
                            Writer image
                        </label>
                        <InputTextarea
                            as="input"
                            type="text"
                            placeholder="Writer image"
                            className="paragraph"
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="" className="input_title">
                            Writer name
                        </label>
                        <InputTextarea
                            as="input"
                            type="text"
                            placeholder="Writer name"
                            className="paragraph"
                        />
                    </div>
                </form>
                <Button className="caption save_btn">Save</Button>
            </div>
        </main>
    );
};

export default BlogWrite;
