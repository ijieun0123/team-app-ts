import { useState, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/FormPage.scss";
import InputTextarea from "../components/InputTextarea";
import Button from "../components/Button";
import ErrorModal from "../components/ErrorModal";

interface FieldError {
    field: string;
    reason: string;
}

interface ErrorResponse {
    code: string;
    message: string;
    errors?: FieldError[];
}

const Login: FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<ErrorResponse | null>(null);

    // 에러 필드 정렬 숮서 정의
    const FIELD_ORDER = ["email", "password"];

    // 중복 제거 및 정렬된 에러만 반환
    const normalizeErrors = (
        errors: FieldError[] | undefined
    ): FieldError[] => {
        if (!errors) return [];

        const map = new Map<string, string>();

        for (const { field, reason } of errors) {
            if (!map.has(field)) {
                map.set(field, reason); // 첫 번째 에러만 사용
            }
        }

        return FIELD_ORDER.filter(field => map.has(field)).map(field => ({
            field,
            reason: map.get(field)!,
        }));
    };

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
                const errData: ErrorResponse = await response.json();
                const cleanedErrors = normalizeErrors(errData.errors);
                setError({ ...errData, errors: cleanedErrors });
                return;
            }

            const result = await response.json();
            console.log("Login successfully:", result);
            localStorage.setItem("accessToken", result.accessToken);

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
                    <p className="paragraph">
                        Don't have an account yet?
                        <a className="signup_btn" href="/team-app-ts/signup">
                            Signup
                        </a>
                    </p>
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
            {/* 에러 모달 */}
            <ErrorModal error={error} onClose={() => setError(null)} />
        </main>
    );
};

export default Login;
