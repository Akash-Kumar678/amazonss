import React from 'react'
import { Link } from 'react-router-dom';

export default function ProdCatlog() {
  return (
    <div>
  <div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                <div class="card" style={{ width: '18rem' }}>
                    <img src="cloth1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mens</h5>
                        <p class="card-text">price 399rs</p>
                        <Link to="#" class="btn btn-primary">add to cart</Link>
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

        <div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                <div class="card" style={{ width: '18rem' }}>
                    <img src="cloth1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mens</h5>
                        <p class="card-text">price 399rs</p>
                        <Link to="#" class="btn btn-primary">add to cart</Link>
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

  );
}
