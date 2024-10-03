import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Post.css'; // CSS sẽ được định nghĩa sau
import Menu from '../components/Menu';

function Post() {
    const [newPost, setNewPost] = useState('');
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: "John Doe",
            userImage: "https://bootdey.com/img/Content/avatar/avatar1.png",
            time: "5 seconds ago",
            postImage: "https://www.bootdey.com/image/400x200",
            title: "Product Shoot",
            description: "Here is a picture of the walkway to our product shoot.",
            likes: 228,
            shares: 128,
            comments: [
                {
                    id: 1,
                    user: "John Doe",
                    userImage: "https://bootdey.com/img/Content/avatar/avatar1.png",
                    time: "7 minutes ago",
                    content: "I really love this picture. I really wish I could have been there."
                },
                {
                    id: 2,
                    user: "John Doe",
                    userImage: "https://bootdey.com/img/Content/avatar/avatar2.png",
                    time: "3 minutes ago",
                    content: "I think I might use this for one of my projects."
                }
            ]
        },
        {
            id: 2,
            user: "Yanique Robinson",
            userImage: "https://bootdey.com/img/Content/avatar/avatar5.png",
            time: "1 minute ago",
            video: "https://player.vimeo.com/video/98417189",
            likes: 2,
            shares: 12,
            comments: []
        }
    ]);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() === '') return;

        const newPostObject = {
            id: posts.length + 1,
            user: "New User",
            userImage: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder avatar
            time: "Just now",
            description: newPost,
            likes: 0,
            shares: 0,
            comments: []
        };

        setPosts([newPostObject, ...posts]);
        setNewPost('');
    };

    return (
        <div className="container post-page">
            <Menu />

            {/* Create Post Section */}
            <div className="row">
                <div className="col-md-8 offset-md-2 mb-4">
                    <div className="card create-post">
                        <div className="card-header">
                            <h5>Create a new post</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handlePostSubmit}>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        placeholder="What's on your mind?"
                                        value={newPost}
                                        onChange={(e) => setNewPost(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post List Section */}
            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col-md-8 offset-md-2 mb-4">
                        <div className="card post">
                            <div className="card-header post-header">
                                <div className="d-flex align-items-center">
                                    <img src={post.userImage} className="img-circle avatar" alt="User" />
                                    <div className="ml-3">
                                        <strong>{post.user}</strong>
                                        <p className="text-muted">{post.time}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Post Content (Image/Video) */}
                            {post.postImage && (
                                <div className="post-image text-center">
                                    <img src={post.postImage} className="img-fluid post-image-adjust" alt="Post" />
                                </div>
                            )}
                            {post.video && (
                                <div className="post-video">
                                    <iframe src={post.video} title="Video Post" className="w-100" height="300"></iframe>
                                </div>
                            )}

                            {/* Post Title and Description */}
                            <div className="card-body">
                                {post.title && <h5 className="card-title">{post.title}</h5>}
                                <p className="card-text">{post.description}</p>
                            </div>

                            {/* Post Footer - Likes, Shares, Comments */}
                            <div className="card-footer post-actions d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#" className="btn btn-light btn-sm">
                                        <i className="fa fa-thumbs-up"></i> {post.likes} Likes
                                    </a>
                                    <a href="#" className="btn btn-light btn-sm ml-2">
                                        <i className="fa fa-share"></i> {post.shares} Shares
                                    </a>
                                </div>
                                <div className="comment-section">
                                    <input type="text" className="form-control" placeholder="Add a comment..." />
                                </div>
                            </div>

                            {/* Display Comments */}
                            <ul className="list-group list-group-flush">
                                {post.comments.map(comment => (
                                    <li key={comment.id} className="list-group-item comment">
                                        <div className="d-flex align-items-start">
                                            <img src={comment.userImage} className="img-circle avatar" alt="User" />
                                            <div className="ml-3">
                                                <h6 className="mb-0">{comment.user}</h6>
                                                <small className="text-muted">{comment.time}</small>
                                                <p>{comment.content}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;
