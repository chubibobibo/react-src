import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import DetailsDisplay from './DetailsDisplay';
import MyNavbar from '../MyNavbar'
import useFetch from '../useFetch';


const Details = () => {

    const { category } = useParams()
    const [categories, setCategories] = useState([
        {
            url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'mariage',
            id: 1,
        },
        {
            url: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
            category: 'mariage',
            id: 2,
        },
        {
            url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
            category: 'mariage',
            id: 3,
        },
        {
            url: 'https://images.unsplash.com/flagged/photo-1566755395267-86735b23d097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
            category: 'mariage',
            id: 4,
        },
        {
            url: 'https://images.unsplash.com/photo-1457342813143-a1ae27448a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0ZXJuaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            category: 'grossesse',
            id: 5,
        },
        {
            url: 'https://images.unsplash.com/photo-1528218635780-5952720c9729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByZWduYW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'grossesse',
            id: 6,
        },
        {
            url: 'https://images.unsplash.com/photo-1586102728466-46b99b3bc411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByZWduYW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'grossesse',
            id: 7,
        },
        {
            url: 'https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByZWduYW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'grossesse',
            id: 8,
        },
        {
            url: 'https://images.unsplash.com/photo-1548897969-80be2924dc9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
            category: 'bébé',
            id: 9,
        },
        {
            url: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'bébé',
            id: 10,
        },
        {
            url: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'bébé',
            id: 11,
        },
        {
            url: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'bébé',
            id: 12,
        },
        {
            url: 'https://images.unsplash.com/photo-1655185497013-db98aca061d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            category: 'famille',
            id: 13,
        },
        {
            url: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'famille',
            id: 14,
        },
        {
            url: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'famille',
            id: 15,
        },
        {
            url: 'https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'famille',
            id: 16,
        },
        {
            url: 'https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFwdGlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'baptême',
            id: 17,
        },
        {
            url: 'https://images.unsplash.com/photo-1550633794-58a2127a9027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFwdGlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'baptême',
            id: 18,
        },
        {
            url: 'https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'baptême',
            id: 19,
        },
        {
            url: 'https://images.unsplash.com/photo-1503463168353-9d883c7f5255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEzfHxiYXB0aXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            category: 'baptême',
            id: 20,
        },
        {
            url: 'https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'couple',
            id: 21,
        },
        {
            url: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'couple',
            id: 22,
        },
        {
            url: 'https://images.unsplash.com/photo-1521145239174-279dc2227166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'couple',
            id: 23,
        },
        {
            url: 'https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            category: 'couple',
            id: 24,
        },
    ])
    const post = useFetch('/wp-json/wp/v2/posts')

    return (
        < div >
            <MyNavbar />
            <br />
            <DetailsDisplay categories={categories.filter(newCat => newCat.category === category)} />
        </div >

    );
}

export default Details;