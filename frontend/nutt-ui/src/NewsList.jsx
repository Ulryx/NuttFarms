// src/NewsList.jsx
import { useEffect, useState } from "react";
import "./NewsList.css";

function NewsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/news/")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error("Failed to fetch news:", err));
    }, []);

    return (
        <section className="news-section">
            <h2 className="section-title">📰 Nutt Farms Devlog</h2>
            <div className="news-grid">
                {posts.map((post) => (
                    <div className="card" key={post.slug}>
                        {post.image_url && (
                            <img src={post.image_url} alt={post.title} className="news-image" />
                        )}
                        <h3 className="card-title">{post.title}</h3>
                        <p className="card-date">{new Date(post.date).toLocaleDateString()}</p>
                        <p className="card-excerpt">{post.excerpt}</p>
                        <a href={`/news/${post.slug}`} className="card-readmore">Read More ➤</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewsList;
