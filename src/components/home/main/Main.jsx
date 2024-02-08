
import Card from './card/Card';
import './main.css'

const imgCard = {
    key1: {
        nameCard: 'Attack of Titan',
        img: 'imgcard/Attack_of_Titan.png',
        url: 'https://www.crunchyroll.com/es/series/GR751KNZY/attack-on-titan',
    },
    key2: {
        nameCard: 'Black Clover',
        img: 'imgcard/Black_Clover.png',
        url: 'https://www.crunchyroll.com/es/series/GRE50KV36/black-clover',
    },
    key3: {
        nameCard: 'Code Geass',
        img: 'imgcard/Code_Geass.png',
        url: 'https://www.crunchyroll.com/es/series/GY2P9ED0Y/code-geass',
    },
    key4: {
        nameCard: 'Date a Live',
        img: 'imgcard/Date_a_Live.png',
        url: 'https://www.crunchyroll.com/es/series/GYEX5E1G6/date-a-live',
    },
    key5: {
        nameCard: 'Demon Slayer',
        img: 'imgcard/Demon_Slayer.png',
        url: 'https://www.crunchyroll.com/es/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba',
    },
    key6: {
        nameCard: 'Hells Paradise',
        img: 'imgcard/Hells_Paradise.png',
        url: 'https://www.crunchyroll.com/es/series/GJ0H7Q5ZJ/hells-paradise',
    },
    key7: {
        nameCard: 'Hellsing',
        img: 'imgcard/Hellsing.png',
        url: 'https://www.crunchyroll.com/es/series/G649DPXQY/hellsing',
    },
    key8: {
        nameCard: 'Jojos',
        img: 'imgcard/Jojos.png',
        url: 'https://www.crunchyroll.com/es/series/GYP8DP1MY/jojos-bizarre-adventure',
    },
    key9: {
        nameCard: 'Jujutsu Kaisen',
        img: 'imgcard/Jujutsu_Kaisen.png',
        url: 'https://www.crunchyroll.com/es/series/GRDV0019R/jujutsu-kaisen',
    },
    key10: {
        nameCard: 'Noblesse',
        img: 'imgcard/Noblesse.png',
        url: 'https://www.crunchyroll.com/es/series/G64G2VDPR/noblesse',
    },
    key11: {
        nameCard: 'One Piece',
        img: 'imgcard/One_Piece.png',
        url: 'https://www.crunchyroll.com/es/series/GRMG8ZQZR/one-piece',
    },
    key12: {
        nameCard: 'Vanitas',
        img: 'imgcard/Vanitas.png',
        url: 'https://www.crunchyroll.com/es/series/GEXH3W8DG/the-case-study-of-vanitas',
    },
}

export default function Main() {

    return (
        <div className='cont_main'>
            <div className='cont_card f1'>
                <Card imgCard={imgCard} cardKey= 'key1'/>
                <Card imgCard={imgCard} cardKey= 'key3'/>
                <Card imgCard={imgCard} cardKey= 'key6'/>
            </div>
            <div className='cont_card f2'>
                <Card imgCard={imgCard} cardKey= 'key2'/>
                <Card imgCard={imgCard} cardKey= 'key8'/>
                <Card imgCard={imgCard} cardKey= 'key12'/>
            </div>
            <div className='cont_card f3'>
                <Card imgCard={imgCard} cardKey= 'key4'/>
                <Card imgCard={imgCard} cardKey= 'key10'/>
                <Card imgCard={imgCard} cardKey= 'key5'/>
            </div>
            <div className='cont_card f4'>
                <Card imgCard={imgCard} cardKey= 'key7'/>
                <Card imgCard={imgCard} cardKey= 'key11'/>
                <Card imgCard={imgCard} cardKey= 'key9'/>
            </div>
        </div>
    );
}