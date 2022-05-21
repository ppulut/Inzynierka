import React from 'react'
import '../ServiceDesign.css';


const SERVICE = ({item}) => {
  return (
    <div class="boxy">
      <section class="section services-section" id="services">
    <div>
        <div class="row">
            <div class="col-sm-6 col-lg-4 boxy2">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-desktop"></i>
                    </div>
                    <div class="feature-content">
                        <h5>{item.title}</h5>
                        <p>{item.opis}</p>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
</section>
    </div>
  )
}

export default SERVICE
