import {BlogPosts} from "../components/posts";

export default function Assignments() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Assignments
            </h1>
            <div className="my-8">
                <BlogPosts/>
            </div>
        </section>
    )
}
