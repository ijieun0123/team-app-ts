import styled from "styled-components";

type ReviewCardProps = {
    avatarImage: string;
    comments: string;
    avatarName: string;
    avatarCareer: string;
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 366px;
    min-height: 410px;
    margin: 60px 0 180px;
    padding: 60px 40px 45px;
    background: #fff;
    box-shadow: var(--shadow-color);
    border-radius: 8px;

    @media (max-width: 768px) {
        width: 342px;
        min-height: 410px;
        margin: 62px 0 182px;
        padding: 40px 40px 45px 40px;
    }

    @media (max-width: 400px) {
        margin: 40px 0 130px;
        padding: 40px;
    }
`;

const Stars = styled.div`
    display: flex;
    align-items: center;
`;

const Comments = styled.p`
    margin: 25px 0 55px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Avatar = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: auto;
`;

const AvatarCareer = styled.p`
    color: var(--gray-color);
`;

const ReviewCard = ({
    avatarImage,
    comments,
    avatarName,
    avatarCareer,
}: ReviewCardProps) => {
    return (
        <Card>
            <Stars>
                <img src="/team-app-ts/img/star.svg" alt="star" />
                <img src="/team-app-ts/img/star.svg" alt="star" />
                <img src="/team-app-ts/img/star.svg" alt="star" />
                <img src="/team-app-ts/img/star.svg" alt="star" />
                <img src="/team-app-ts/img/star.svg" alt="star" />
            </Stars>
            <Comments className="paragraph">{comments}</Comments>
            <Avatar>
                <img src={avatarImage} alt="avatar" />
                <div>
                    <p className="paragraph">{avatarName}</p>
                    <AvatarCareer className="caption">
                        {avatarCareer}
                    </AvatarCareer>
                </div>
            </Avatar>
        </Card>
    );
};

export default ReviewCard;
