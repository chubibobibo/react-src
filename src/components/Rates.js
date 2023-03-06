//parent of RateDisplay
import React from 'react';
import classes from './Rates.module.css'
import Navbar from '../MyNavbar'
import RateDisplay from './RateDisplay'

//array of rates
const rates = [
    {
        title: 'Juste moi', price: '130 euros', description: 'Séance pour une personne, en extérieur ou en studio', id: 1
    },
    {
        title: 'Pour deux', price: '195 euros', description: 'Pour deux personnes, en extérieur ou en studio', id: 2
    },
    {
        title: 'Famille', price: '220 euros', description: 'Pour la famille ou les amis jusquà 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusquà 2 ans)', id: 3
    },
    {
        title: 'Il était une fois ', price: '160 euros', description: 'Photo de grossesse (À votre domicile, en extérieur ou en studio)', id: 4
    },
    {
        title: 'Mon bébé', price: '100 euros', description: 'Photo d’enfant jusqu’à 3 ans (photo à domicile)', id: 5
    },
    {
        title: 'J’immortalise l’événement ', price: 'sur mesure', description: 'Prestation de mariage ou baptême sur devis', id: 6
    },
]


const Rates = () => {
    return (
        <div className={classes.rateBody}>
            <Navbar />
            <h2>Rates and Services</h2>
            <RateDisplay rates={rates} />
        </div>
    );
}

export default Rates;