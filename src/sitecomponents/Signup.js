import React from 'react'

export default function Signup() {
    return (
        <div>
            <div>
       <div className='container'>
      <div className='container'>
      <div className='container'>
        <div className='login'>
          <div className='container'>
            <main class="form-signin">
              <form>
                <img class="mb-4" src="logo.png" alt="" width="172" height="57" />
                <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

                <div class="form-floating">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Confirm Password</label>
                </div>

                
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
              </form>
            </main>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
        </div>
    )
}
