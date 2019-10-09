import React from 'react';
import styles from './ClientReview.module.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ClientReview = (props) => {
  return (
    <div className={styles.ClientReview}>
      <ParallaxProvider>
        <Parallax className='parallax' x={[-1700, 300]} tagOuter='figure'>
          <h1>Review</h1>
          <Carousel
            useKeyboardArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <img src={props.Image} alt='' />
              <p className='legend'>
                Velit magna qui ea magna adipisicing aute in consectetur. Est
                amet in occaecat in. Ullamco sint incididunt velit qui
                incididunt duis culpa tempor est cupidatat cillum ullamco
                deserunt Lorem. Dolor culpa aliquip irure consectetur sunt anim
                in esse. Occaecat nulla ut veniam est quis labore duis.
                Consectetur ex qui aliquip proident sunt. Veniam fugiat velit
                magna ad ex velit voluptate aliqua exercitation cillum deserunt
                dolor. Ipsum nisi qui commodo nisi labore amet dolore.
              </p>
            </div>
            <div>
              <img src={props.Image} alt='' />
              <p className='legend'>
                Enim mollit et laborum dolor occaecat. Adipisicing veniam
                adipisicing dolore ullamco velit sint et excepteur minim
                deserunt mollit. Deserunt nostrud veniam nulla ut ex sint sunt
                pariatur. Fugiat consectetur amet eiusmod qui amet occaecat.
                Minim culpa voluptate nulla duis ullamco cupidatat ex. Ad sit
                proident aliqua exercitation.
              </p>
            </div>
            <div>
              <img src={props.Image} alt='' />
              <p className='legend'>
                Proident anim proident ullamco non laborum nostrud eiusmod.
                Culpa cupidatat aliquip ipsum non cillum Lorem velit proident
                consectetur cillum deserunt minim eiusmod. Voluptate dolore ex
                ipsum cupidatat id duis incididunt. Ad ex sint officia commodo
                ea aliqua qui tempor tempor et aliquip commodo excepteur
                excepteur. Non exercitation cillum tempor do duis anim mollit
                incididunt esse nisi enim consequat. Id velit ad id Lorem. Amet
                Lorem laboris culpa ea. Officia id id et deserunt sunt
                adipisicing sunt dolore cillum. Anim dolor commodo commodo aute
                magna ex esse. Officia amet laboris proident Lorem enim
                reprehenderit aliqua sunt officia nisi occaecat eiusmod.
              </p>
            </div>
          </Carousel>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default ClientReview;
