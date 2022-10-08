function Header(props) {
    return (
        <h1 className="text-xl font-sans  font-bold text-gray-800 dark:text-gray-300 text-center">
            {props.children}
        </h1>
    );
}

export default Header;
