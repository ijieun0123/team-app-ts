import { useState, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/FormPage.scss";
import InputTextarea from "../components/InputTextarea";
import Button from "../components/Button";

const Login: FC = () => {
    const { id } = useParams<{ id: string }>(); // URL에서 id 추출
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const data = {
            email,
            password,
        };

        try {
            const response = await fetch(`/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Fail to login");
            }

            const result = await response.json();
            console.log("Login successfully:", result);
            localStorage.setItem("accessToken", result.accessToken);

            alert("로그인 되었습니다.");

            // 로그인 후 홈으로 이동
            navigate("/");
        } catch (error) {
            console.error("Error login:", error);
            alert("로그인 실패");
        }
    };

    return (
        <main id="main-content" className="write" tabIndex={-1}>
            <div className="container">
                <div className="title_box">
                    <h1 className="title">Login</h1>
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
                </form>
                <Button onClick={handleLogin} className="caption save_btn">
                    Login
                </Button>
            </div>
        </main>
    );
};

export default Login;
