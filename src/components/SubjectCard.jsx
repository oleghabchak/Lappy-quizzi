function SubjectCard(props) {
    
    return (
        <div
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none  rounded-2xl h-52 w-52 m-5  hover:shadow-xl dark:hover:shadow-dark"
            // onClick={() => props.onClick(props.subject.toLowerCase())}
        >
            <div className="flex justify-center pt-10">
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    width="80"
                    height="80"
                />
            </div>
            <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-center text-xl pt-6 ">
                {props.subject}
            </h2>
        </div>
    );
}

export default SubjectCard;
