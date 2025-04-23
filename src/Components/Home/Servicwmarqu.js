import React from 'react';

<<<<<<< HEAD
import img from '../../assets/images/rechargeicon.png';
import img1 from '../../assets/images/panicon.png';
import img2 from '../../assets/images/mticon.png';
import img3 from '../../assets/images/bbpsicon.png';
import img4 from '../../assets/images/Merchant.png';
=======
import img from '../../assets/images/KYC2.jpeg';
import img1 from '../../assets/images/Dsh.jpeg';
import img2 from '../../assets/images/OR.jpeg';
import img3 from '../../assets/images/KYC .png';
import img4 from '../../assets/images/PY.jpeg';
>>>>>>> 3b20ea5aa85e39840e7695d3c74245c1fbb970eb

import Image from 'next/image';

function ServiceMarque() {
  return (
    <div className="marquee mb-10" direction="right">
      <h2 className="text-3xl font-bold text-center text-black">Services</h2>
      <hr className="w-16 mx-auto my-4 border-b-2 border-black"></hr>
      <span className="blink1 ">
        <div className='flex items-center space-x-4 marqimg'>
        <Image
             src={img}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img1}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img2}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img3}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img4}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
            
              <Image
             src={img}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img1}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img2}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img3}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
             <Image
             src={img4}
             alt='service_icons'
              width={500}
              height={300}
               className="h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
            />
            
    
      
      </div>
      </span>
    </div>
  );
}

export default ServiceMarque;
