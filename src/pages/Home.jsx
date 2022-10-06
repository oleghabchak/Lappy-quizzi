import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import SubjectCard100 from "../components/SubjectCard100";
import geoIcon from "../images/geography.svg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/space.svg";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Виберіть категорію 1-ДНЯ:</Header>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard
                    id="3g45g"
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="Geography"
                    onClick={onClick}
                />
                <SubjectCard
                    id="44t"
                    imgSrc={histIcon}
                    imgAlt="An illustration of a shield"
                    subject="History"
                    onClick={onClick}
                />
                <SubjectCard
                    id="54g4"
                    imgSrc={sciIcon}
                    imgAlt="An illustration of a beaker"
                    subject="Science"
                    onClick={onClick}
                />
                <SubjectCard
                    id="4g"
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Space"
                    onClick={onClick}
                />
                <SubjectCard
                    id="5m"
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Уличне"
                    onClick={onClick}
                />
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    subject="100"
                    id="1"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="2"
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="f4"
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="3d"
                    subject="100"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="4th"
                    subject="100"
                    onClick={onClick}
                />
              
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
                <SubjectCard100
                    id="4g"
                    subject="200"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="8fr"
                    subject="200"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="5t"
                    subject="200"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="hj5"
                    subject="200"
                    onClick={onClick}
                />
                <SubjectCard100
                    id="45g"
                    subject="200"
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
        </div>
    );
}

export default Home;
