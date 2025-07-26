import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import BlogWrite from "./pages/BlogWrite";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <a href="#main-content" className="skip_link">
                본문으로 바로가기
            </a>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/blog" element={<BlogList />}></Route>
                <Route path="/blog-detail/:id" element={<BlogDetail />}></Route>
                <Route path="/blog-write" element={<BlogWrite />}></Route>
                <Route path="/blog-update/:id" element={<BlogWrite />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
