import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function getPost(url) {
            const res = await fetch(url)
            if (!res.ok) {
                console.log('something went wrong!')
                return
            }
            const post = await res.json()
            setData(post)
        }
        getPost()
    }, [url])
    return { useEffect, useState, data }
}

export default useFetch