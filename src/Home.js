import BlogList from "./BlogList";
import useFetch from "./useFetch";
// npx json-server -m src/jsonServerConf.js --watch data/db.json --port 8000
const Home = () => {
    const { data: blogs, isPending, error } = useFetch("blogs/")

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
};

export default Home;
