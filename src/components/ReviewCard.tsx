type ReviewCardProps = {
    avatarImage: string;
    comments: string;
    avatarName: string;
    avatarCareer: string;
};

const ReviewCard = ({
    avatarImage,
    comments,
    avatarName,
    avatarCareer,
}: ReviewCardProps) => {
    return (
        <div className="card">
            <div className="stars">
                <img src="/img/star.svg" alt="star" />
                <img src="/img/star.svg" alt="star" />
                <img src="/img/star.svg" alt="star" />
                <img src="/img/star.svg" alt="star" />
                <img src="/img/star.svg" alt="star" />
            </div>
            <p className="paragraph">{comments}</p>
            <div className="avatar">
                <img src={avatarImage} alt="avatar" />
                <div className="avatar_info">
                    <p className="paragraph">{avatarName}</p>
                    <span className="caption">{avatarCareer}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
