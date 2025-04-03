import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import img from '../../assets/images/1.jpg';
import img1 from '../../assets/images/2.jpg';
import img2 from '../../assets/images/3.jpg';
import img3 from '../../assets/images/5.jpg';

export default function ImageCarousel() {
    const images = [
        { src: img, alt: 'Image 1' },
        { src: img1, alt: 'Image 2' },
        { src: img2, alt: 'Image 3' },
        { src: img3, alt: 'Image 4' }
    ]
    return (
        <div className="carousel-wrapper mt-20">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                interval={4000}
                transitionTime={500}
                emulateTouch={true}
                showIndicators={true}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <Image
                            src={image.src} 
                            alt={image.alt} 
                           
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
