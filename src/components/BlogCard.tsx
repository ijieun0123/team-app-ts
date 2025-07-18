import { Link } from "react-router-dom";

type BlogCardProps = {
    cardImage: string;
    title: string;
    description: string;
    avatarImage: string;
    avatarName: string;
    createdAt: string;
};

const BlogCard = ({
    cardImage,
    title,
    description,
    avatarImage,
    avatarName,
    createdAt,
}: BlogCardProps) => {
    return (
        <Link
            to="/blog-detail"
            className="card"
            aria-label={`블로그 카드 - ${title}`}
        >
            <img src={cardImage} alt="카드 이미지" />
            <div className="txt_box">
                <h3 className="card_title">{title}</h3>
                <p className="caption">{description}</p>
                <div className="avatar">
                    <img src={avatarImage} alt="프로필" />
                    <span className="caption">{avatarName}</span>
                    <span>|</span>
                    <span className="caption">{createdAt}</span>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
