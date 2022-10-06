import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import SubjectCard100 from "../components/SubjectCard100";
import geoIcon from "../images/geography.svg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/space.svg";

function Home2(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Виберіть категорію 2-ДНЯ:</Header>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="Geography"
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
                    id="34r"
                    subject="300"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="1f"
                    subject="300"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="17"
                    subject="300"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="16"
                    subject="300"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="1234"
                    subject="300"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    id="15"
                    subject="400"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="14"
                    subject="400"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="13"
                    subject="400"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="12"
                    subject="400"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="11"
                    subject="400"
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
        </div>
    );
}

export default Home2;
