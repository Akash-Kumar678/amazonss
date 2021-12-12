import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
       <div class="container">
  <footer class="row row-cols-5 py-5 my-5 border-top">
    <div class="col">
      <Link to="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none" >
        <svg class="bi me-2" width="40" height="32"><use xlinkto="#bootstrap"></use></svg>
      </Link>
      <p class="text-muted">© 2021</p>
    </div>

    <div class="col">

    </div>

    <div class="col">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div class="col">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div class="col">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  )
}
