type BlogCardProps = {
    cardImage: string;
    title: string;
    description: string;
    avatarImage: string;
    avatarName: string;
    createdAt: string;
    onClick?: () => void;
};

const BlogCard = ({
    cardImage,
    title,
    description,
    avatarImage,
    avatarName,
    createdAt,
    onClick,
}: BlogCardProps) => {
    return (
        <div className="card" onClick={onClick}>
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
        </div>
    );
};

export default BlogCard;
