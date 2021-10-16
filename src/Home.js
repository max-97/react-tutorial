import {useState, useEffect} from "react";
import BlogList from "./BlogList";
// npx json-server -m src/jsonServerConf.js --watch data/db.json --port 8000
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("blogs/").then(res => {
            return res.json();
        }).then((data) => {
            setBlogs(data);
            setIsPending(false);
        })
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
};

export default Home;
