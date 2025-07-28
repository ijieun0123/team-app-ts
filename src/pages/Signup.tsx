import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FormPage.scss";
import InputTextarea from "../components/InputTextarea";
import Button from "../components/Button";
import ErrorModal from "../components/ErrorModal";
import { useErrorHandler } from "../hooks/useErrorHandler";

const Signup: FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [career, setCareer] = useState("");

    const { error, setError, handleError } = useErrorHandler([
        "email",
        "password",
        "name",
        "profileImage",
        "career",
    ]);

    const handleSignup = async () => {
        const data = {
            email,
            password,
            name,
            profileImage,
            career,
        };

        try {
            const response = await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errData = await response.json();
                handleError(errData);
                return;
            }

            console.log("Signup successfully");

            alert("회원가입 되었습니다.");

            // 저장 후 로그인 페이지로 이동
            navigate("/login");
        } catch (error: any) {
            console.error("Error signup:", error);
            alert("회원가입 실패");
        }
    };

    return (
        <main id="main-content" className="write" tabIndex={-1}>
            <div className="container">
                <div className="title_box">
                    <h1 className="title">Signup</h1>
                </div>
                <form
                    className="input_textarea_box"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="txt_box">
                        <label htmlFor="email" className="input_title">
                            Email
                        </label>
                        <InputTextarea
                            id="email"
                            as="input"
                            type="email"
                            placeholder="Email"
                            className="paragraph"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="password" className="input_title">
                            Password
                        </label>
                        <InputTextarea
                            id="password"
                            as="input"
                            type="password"
                            placeholder="Password"
                            className="paragraph"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="name" className="input_title">
                            Name
                        </label>
                        <InputTextarea
                            id="name"
                            as="input"
                            type="text"
                            placeholder="Name"
                            className="paragraph"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="profileImage" className="input_title">
                            Profile Image
                        </label>
                        <InputTextarea
                            id="profileImage"
                            as="input"
                            type="text"
                            placeholder="Profile Image"
                            className="paragraph"
                            value={profileImage}
                            onChange={e => setProfileImage(e.target.value)}
                        />
                    </div>
                    <div className="txt_box">
                        <label htmlFor="career" className="input_title">
                            Career
                        </label>
                        <InputTextarea
                            id="career"
                            as="input"
                            type="text"
                            placeholder="Career"
                            className="paragraph"
                            value={career}
                            onChange={e => setCareer(e.target.value)}
                        />
                    </div>
                </form>
                <Button onClick={handleSignup} className="caption save_btn">
                    Signup
                </Button>
            </div>
            {/* 에러 모달 */}
            <ErrorModal error={error} onClose={() => setError(null)} />
        </main>
    );
};

export default Signup;
