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
                    <div className="news-card" key={post.slug}>
                        {post.image_url && (
                            <img src={post.image_url} alt={post.title} className="news-image" />
                        )}
                        <h3 className="news-title">{post.title}</h3>
                        <p className="news-date">{new Date(post.date).toLocaleDateString()}</p>
                        <p className="news-excerpt">{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewsList;
