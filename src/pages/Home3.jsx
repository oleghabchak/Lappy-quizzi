import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import SubjectCard100 from "../components/SubjectCard100";
import geoIcon from "../images/geography.svg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/space.svg";

function Home3(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Виберіть категорію 3-ДНЯ:</Header>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="КАТЕГОРІЇ ПОРНО"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={histIcon}
                    imgAlt="An illustration of a shield"
                    subject="History"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={sciIcon}
                    imgAlt="An illustration of a beaker"
                    subject="Science"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Space"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Space"
                    onClick={onClick}
                />
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    id="10"
                    subject="500"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="9"
                    subject="500"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="8"
                    subject="500"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7"
                    subject="500"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="6"
                    subject="500"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    id="60"
                    subject="600"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="69"
                    subject="600"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="e6"
                    subject="600"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="67"
                    subject="600"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="6g"
                    subject="600"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    id="70gr"
                    subject="700"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7reg9"
                    subject="700"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7ge6"
                    subject="700"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7efr7"
                    subject="700"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7efg"
                    subject="700"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    id="60d8f"
                    subject="800"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="69s8v"
                    subject="800"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="e6s8d"
                    subject="800"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="6s8d7"
                    subject="800"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="6gsd8"
                    subject="800"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    id="79gr"
                    subject="900"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7r9g9"
                    subject="900"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7g96"
                    subject="900"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="7e9r7"
                    subject="900"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="79fg"
                    subject="900"
                    onClick={onClick}
                />
              
            </div>
        </div>
    );
}

export default Home3;
