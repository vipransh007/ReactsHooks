import React from 'react';
import { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);
    
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>  // Fixed: Added missing `<`
            ) : (
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataFetcher;