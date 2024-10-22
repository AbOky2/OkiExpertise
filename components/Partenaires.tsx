import React from 'react';
import Image from 'next/image';

function Partenaires() {
  return (
    <section className="bg-white py-16">
      <div className=' mb-24'>
              <h1 className='text-center font-semibold md:text-5xl text-3xl'>Nos Partenaires</h1>
      </div>
      <div
        className="slider  "
        style={{
          '--width': '100px',
          '--height': '50px',
          '--quantity': 5,
        } as React.CSSProperties}
      >
        <div className="list flex justify-between grayscale">
          <div className="item grayscale">
            <Image src="/fulll.png" alt="Full Logo" width={100} height={50} />
          </div>
          <div className="item">
            <Image src="/dext.png" alt="Dext Logo" width={100} height={50} />
          </div>
          <div className="item">
            <Image src="/henri.png" alt="Henri Logo" width={100} height={50} />
          </div>
          <div className="item">
            <Image src="/silae.png" alt="Silae Logo" width={100} height={50} />
          </div>
          <div className="item">
            <Image src="/xodo.png" alt="Xodo Logo" width={100} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partenaires;
