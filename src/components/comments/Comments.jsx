import React, { useState, useEffect } from 'react';
import './Style.css';
import { MdSend } from 'react-icons/md';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, onSnapshot, query, where } from 'firebase/firestore';

const Comments = ({ cardId }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!cardId) return;
        const commentsCollection = collection(db, 'comments');
        const q = query(commentsCollection, where('cardId', '==', cardId));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const loadedComments = snapshot.docs.map(doc => doc.data());
            console.log("Loaded comments for cardId:", cardId, loadedComments);
            setComments(loadedComments);
        }, (error) => {
            console.error("Error fetching comments:", error); 
        });

        return () => unsubscribe();
    }, [cardId]);

    const onClickHandler = async () => {
        if (comment.trim()) {
            await addDoc(collection(db, 'comments'), {
                text: comment,
                name: 'Anonymous',
                cardId,
            });
            setComment('');
        }
    };

    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };

    return (
        <>
            <div className="comment_section">
                {comments.map((c, index) => (
                    <div key={index} className="comment_show">
                        <strong>{c.name}:</strong> {c.text}
                    </div>
                ))}
                <div className="comment_method">
                    <textarea 
                        value={comment}
                        onChange={onChangeHandler}
                        className='comment_input'
                        placeholder="Share Thoughts"
                    />
                    <button className='comment_btn' onClick={onClickHandler}>
                        <MdSend />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Comments;
