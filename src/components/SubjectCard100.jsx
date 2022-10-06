import { useState } from "react";

function SubjectCard100(props) {
    const [dark,setDark] = useState(true)

    function addClass() {
        var v = document.getElementById(props.id);
        v.className += ' bg-gray-800';
    }
    function removeClass() {
        var v = document.getElementById(props.id);
        v.classList.remove('bg-gray-800');;
    }
    return (
        <div
            id={props.id}
            className="bg-white  shadow-lg dark:shadow-none text-center rounded-2xl h-50 w-52 mb-2.5 ml-5 mr-5  hover:shadow-xl dark:hover:shadow-dark"
            onClick={() => {setDark(!dark)
                if(dark){addClass()}
                else {removeClass()}
            }}
        >
            <h1 style={{fontSize: 50}}>
                {props.subject}
            </h1>
        </div>
    );
}

export default SubjectCard100;
