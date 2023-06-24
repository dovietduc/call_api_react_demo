import { useEffect, useState } from "react";
import http from './../services/postApi';

function ApiDemo() {

    const [posts, setPosts] = useState('');

    useEffect(function () {

        async function callApi() {
            const { data } = await http.get('posts');
            setPosts(data);
        }
        callApi();
        
    }, []);

    async function handleCreate() {
        const postId = await http.post('posts', {
            title: 'add post create'
        });
        setPosts([postId.data, ...posts]);

    }
    
    async function handleDelete(id) {
        await http.delete('posts/' + id);
        const newState = posts.filter(function(postItem){
            return postItem.id !== id;
        })
        setPosts(newState);
    }

    if (posts) {
        return (
            <div>
                <button onClick={handleCreate}>Create</button>
                {
                    posts && posts.map(function (postItem) {
                        return (
                            <h1 onClick={() => handleDelete(postItem.id)} key={postItem.id}>{postItem.title}</h1>
                        )
                    })
                }
            </div>
        )
    }

}

export default ApiDemo;