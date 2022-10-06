function SubjectCard(props) {
    
    return (
        <div
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none  rounded-2xl h-50 w-60 m-5  hover:shadow-xl dark:hover:shadow-dark"
            // onClick={() => props.onClick(props.subject.toLowerCase())}
        >
            <div className="flex justify-center pt-12">
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    width="100"
                    height="100"
                />
            </div>
            <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-8 pl-8">
                {props.subject}
            </h2>
        </div>
    );
}

export default SubjectCard;
