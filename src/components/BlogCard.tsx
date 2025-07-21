import styled from "styled-components";

type BlogCardProps = {
    cardImage: string;
    title: string;
    description: string;
    avatarImage: string;
    avatarName: string;
    createdAt: string;
};

const Card = styled.a`
    flex: 0 0 calc((100% - 60px) / 3);
    cursor: pointer;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: var(--shadow-color);

    @media (max-width: 1024px) {
        flex: 0 0 calc((100% - 30px) / 2);
    }

    @media (max-width: 600px) {
        flex: 0 0 100%;
    }
`;

const CardImg = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
`;

const TxtBox = styled.div`
    padding: 20px;
    background: white;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

const CardTitle = styled.h3`
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 줄 수 제한 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Description = styled.p`
    margin: 10px 0 48px;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 줄 수 제한 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Avatar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const AvatarImg = styled.img`
    margin-right: 5px;
`;

const Line = styled.span`
    opacity: 0.2;
`;

const BlogCard = ({
    cardImage,
    title,
    description,
    avatarImage,
    avatarName,
    createdAt,
}: BlogCardProps) => {
    return (
        <Card
            href="/team-app-ts/blog-detail"
            aria-label={`블로그 카드 - ${title}`}
        >
            <CardImg src={cardImage} alt="카드 이미지" />
            <TxtBox>
                <CardTitle className="card_title">{title}</CardTitle>
                <Description className="caption">{description}</Description>
                <Avatar>
                    <AvatarImg src={avatarImage} alt="프로필" />
                    <span className="caption">{avatarName}</span>
                    <Line>|</Line>
                    <span className="caption">{createdAt}</span>
                </Avatar>
            </TxtBox>
        </Card>
    );
};

export default BlogCard;
