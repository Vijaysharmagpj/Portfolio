import React from 'react'
import './Certificate.css';

import Img1 from '../../assets/certificate.png'



const data = [
  {
    avatar: Img1,
    name: 'Java',
    review: 'Sunrise Technology in Meerut offers comprehensive Java programming courses, blending theory with hands-on practice for aspiring developers. From mastering core concepts to building real-world projects, our expert-led training equips you with the skills and confidence to thrive in the dynamic world of software development. Join us and unlock the potential of Java, transforming your passion for coding into a rewarding career.'
  },
]

const Certificate = () => {
  return (
    <section id='testimonials'>
      <h5>Java Certificate</h5>
      <h2>Certificate</h2>
        {
          data.map(({avatar,name,review}, index)=>{
            return (
              <div className='testimonial'>
                <div className="client__avtar">
                  <img src={avatar} alt={name}/>
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </div>
            )
          })
        }
    </section>
  )
}

export default Certificate;