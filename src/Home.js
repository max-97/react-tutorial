import {useState} from "react";

const Home = () => {
    //let name = "mario";
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName("luigi");
        setAge(30);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello World", e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} ist {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("Mario", e)}>Click me again</button>
        </div>
    );
};

export default Home;
