import React from 'react';
import { Link } from 'react-router-dom';

function Home (){
    return (
    <div>
    <div id="carouselExampleControls" className="carousel slide mg-0" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="csl.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="csl.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="csl.jpg" className="d-block w-100" alt="..." />
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>

  </div>
  <div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <p class="card-text"><b>Winter cloth</b></p>
                        <div>
                            <img src="cloth.jpg" width="50%" height="70%" alt='...'></img>

                        </div>

                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">see more</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                    <img src="cloth1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mens</h5>
                        <p class="card-text">price 399rs</p>
                        <Link to="#" class="btn btn-primary">add to cart</Link>
                    </div>
                </div>


                <div class="card" style={{width: '18rem'}}>
        <img src="cloth1.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">kids</h5>
          <p class="card-text">price 299rs</p>
          <Link to="#" class="btn btn-primary">add to cart</Link>
        </div>
      </div>
      <div class="card" style={{width: '18rem'}}>
        <img src="cloth1.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">women</h5>
          <p class="card-text">price 499rs</p>
          <Link to="#" class="btn btn-primary">add to cart</Link>
        </div>
      </div>
</div>      
        </div>

        </div>
    )
}
 
export default Home;