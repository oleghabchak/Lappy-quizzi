function SubjectCard100(props) {
    function addClass() {
        var v = document.getElementById(props.id);
        v.className += " bg-gray-800 ";

    }
    return (
        <div
            id={props.id}
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none text-center rounded-2xl h-50 w-60 mb-2 ml-5 mr-5  hover:shadow-xl dark:hover:shadow-dark"
            onClick={() => addClass()}
        >
            <h1 style={{fontSize: 50}}>
                {props.subject}
            </h1>
        </div>
    );
}

export default SubjectCard100;
