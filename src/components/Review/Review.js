import React from 'react';
import styles from './review.module.scss';
import face1 from '../../assets/review_image/face1.png';

function Review() {
    return (
        <div className={styles.card}>
            {/* <div className={styles.is_8}> */}
            <img src={face1} alt="for review" />
            {/* </div> */}
            {/* <div className={styles.is_4}> */}
            <p>
                Marzipan I love sesame snaps marshmallow toffee danish
                I love candy canes. Sweet I love dragée cupcake bonbon
                sweet roll. Dragée sweet roll cake ice cream marzipan
                I love fruitcake topping. Macaroon biscuit marshmallow
                chocolate bar gummies pie gummies danish cupcake.
            </p>
            {/* </div> */}
        </div>
    );
}

export default Review;
