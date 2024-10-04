import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Post.css';
import Menu from '../components/Menu';

function Post() {
    const [newPost, setNewPost] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [view, setView] = useState('myPosts'); // Trạng thái cho menu (bài viết của tôi hoặc khám phá)
    const postsPerPage = 5; // Số bài viết hiển thị trên mỗi trang

    // Tạo dữ liệu mẫu cho bài viết
    const samplePosts = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        user: index % 2 === 0 ? "User A" : "User B",
        userImage: "https://bootdey.com/img/Content/avatar/avatar1.png",
        time: `${Math.floor(Math.random() * 60)} minutes ago`,
        postImage: "https://www.bootdey.com/image/400x200",
        title: `Post Title ${index + 1}`,
        description: `Description for post ${index + 1}`,
        likes: Math.floor(Math.random() * 100),
        shares: Math.floor(Math.random() * 50),
        comments: []
    }));

    // Giả định người dùng đăng nhập là User A
    const loggedInUser = "User A";

    // Lưu bài viết của người dùng đang đăng nhập
    const myPosts = samplePosts.filter(post => post.user === loggedInUser);
    const otherPosts = samplePosts.filter(post => post.user !== loggedInUser);

    // Xác định bài viết hiện tại trên trang
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = view === 'myPosts' ? myPosts.slice(indexOfFirstPost, indexOfLastPost) : otherPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() === '') return;

        const newPostObject = {
            id: samplePosts.length + 1,
            user: loggedInUser,
            userImage: "https://bootdey.com/img/Content/avatar/avatar1.png",
            time: "Just now",
            description: newPost,
            likes: 0,
            shares: 0,
            comments: []
        };

        // Cập nhật danh sách bài viết
        myPosts.push(newPostObject);
        setNewPost('');
    };

    // Chuyển trang
    const totalPages = Math.ceil((view === 'myPosts' ? myPosts.length : otherPosts.length) / postsPerPage);

    return (
        <div className="container post-page">
            <Menu />

            {/* Menu lựa chọn Bài viết của tôi / Khám phá */}
            <div className="row mb-4">
                <div className="col-md-8 offset-md-2">
                    <div className="btn-group" role="group" aria-label="Post View Selection">
                        <button type="button" className={`btn ${view === 'myPosts' ? 'btn-primary' : 'btn-light'}`} onClick={() => setView('myPosts')}>Bài viết của tôi</button>
                        <button type="button" className={`btn ${view === 'explore' ? 'btn-primary' : 'btn-light'}`} onClick={() => setView('explore')}>Khám phá</button>
                    </div>
                </div>
            </div>

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
                <div className="col-md-8 offset-md-2 mb-4">
                    {currentPosts.map(post => (
                        <div key={post.id} className="card post mb-3">
                            <div className="card-header post-header">
                                <div className="d-flex align-items-center">
                                    <img src={post.userImage} className="img-circle avatar" alt="User" />
                                    <div className="ml-3">
                                        <strong>{post.user}</strong>
                                        <p className="text-muted">{post.time}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                {post.title && <h5 className="card-title">{post.title}</h5>}
                                <p className="card-text">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Phân trang */}
                <div className="col-md-8 offset-md-2 mb-4">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Post;
