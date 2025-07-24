import styled from "styled-components";

type ReviewCardProps = {
    writerImage: string;
    comments: string;
    writerName: string;
    writerCareer: string;
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

const Writer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: auto;
`;

const WriterCareer = styled.p`
    color: var(--gray-color);
`;

const ReviewCard = ({
    writerImage,
    comments,
    writerName,
    writerCareer,
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
            <Writer>
                <img src={writerImage} alt="writer" />
                <div>
                    <p className="paragraph">{writerName}</p>
                    <WriterCareer className="caption">
                        {writerCareer}
                    </WriterCareer>
                </div>
            </Writer>
        </Card>
    );
};

export default ReviewCard;
