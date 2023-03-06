import React from 'react';
import MyNavbar from '../MyNavbar'
import GalleryDisplay from './GalleryDisplay'



const Gallery = () => {

    const images = [
        {
            category: 'mariage', image: 'https://images.unsplash.com/photo-1636217950876-d40c3b482f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hcnJpYWdlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60', id: 1
        },
        {
            category: 'grossesse', image: 'https://images.unsplash.com/photo-1667378336101-4c4a0ade26ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByZWduYW5jeSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', id: 2
        },
        {
            category: 'bébé', image: 'https://images.unsplash.com/photo-1581952975975-08cd95a728d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHByZWduYW5jeSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', id: 3
        },
        {
            category: 'famille', image: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60', id: 4
        },
        {
            category: 'baptême', image: 'https://images.unsplash.com/photo-1617724173876-db98f46aaec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFwdGlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', id: 5
        },
        {
            category: 'couple', image: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291cGxlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60', id: 6
        },


    ]
    return (
        <div>
            <MyNavbar />
            <br />
            <GalleryDisplay images={images} />
        </div>
    );
}

export default Gallery;





