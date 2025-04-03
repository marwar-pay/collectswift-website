// components/CounterSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faSmile, faUsers, faStore } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import img from '../../assets/images/4.jpg';

const CounterSection = () => {
    return (
        <div 
        className="section-full content-inner counter-box1 bg-cover bg-center overlay-black-middle" 
        style={{
            backgroundImage: `url(${img.src})`, // Use the imported image
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
        }}
    >
            <div className="container mx-auto py-16">
                <div className="flex flex-wrap justify-center text-black">
                    {/* Business Partners Counter */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faHandshake} className="text-4xl mb-2" />
                            <div className="text-5xl font-bold"><span className="counter"><CountUp delay={5} end={100} /></span>+</div>
                            <h4 className="font-medium mt-2">Business Partners</h4>
                        </div>
                    </div>

                    {/* Satisfied Clients Counter */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faSmile} className="text-4xl mb-2" />
                            <div className="text-5xl font-bold"><span className="counter"><CountUp delay={5} end={15000} /></span>%</div>
                            <h4 className="font-medium mt-2">Satisfied Clients</h4>
                        </div>
                    </div>

                    {/* Distributors Counter */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faUsers} className="text-4xl mb-2" />
                            <div className="text-5xl font-bold"><span className="counter"><CountUp delay={5} end={7000} /></span>+</div>
                            <h4 className="font-medium mt-2">Distributors</h4>
                        </div>
                    </div>

                    {/* Retailers Counter */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faStore} className="text-4xl mb-2" />
                            <div className="text-5xl font-bold"><span className="counter"><CountUp delay={5} end={10000} /></span>+</div>
                            <h4 className="font-medium mt-2">Retailers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
