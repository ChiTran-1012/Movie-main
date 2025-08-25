import React, { useState } from "react";

const CommentSection = ({ movieId }) => {
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    const handleAddComment = () => {
        if (!input.trim()) return;
        const newComment = { id: Date.now(), text: input };
        setComments([...comments, newComment]);
        setInput("");
    };

    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            {/* Input */}
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-700"
                />
                <button
                    onClick={handleAddComment}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                >
                    Post
                </button>
            </div>

            {/* Comments List */}
            <ul className="space-y-2">
                {comments.length === 0 ? (
                    <p className="text-gray-400">No comments yet. Be the first!</p>
                ) : (
                    comments.map((c) => (
                        <li
                            key={c.id}
                            className="bg-gray-800 p-2 rounded text-sm border border-gray-700"
                        >
                            {c.text}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default CommentSection;
