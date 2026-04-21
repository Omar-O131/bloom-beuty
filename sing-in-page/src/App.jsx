import { useEffect, useMemo, useState } from "react";
import HeaderMenuApp from '../../Header-menu/src/App';
import FooterSectionApp from '../../footer-section/src/App';

 
 

 

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BloomLogo() {
  return (
    <div className="logo-shell">
      <img src="/image/Logo-bloom.webp" alt="Bloom Beauty" className="logo-image" />
    </div>
  );
}



 

function AccountSection() {
  return (
    <section className="account-section">
      <div className="account-grid">
        <article className="account-card">
          <h2>Login</h2>
          <form className="account-form">
            <label htmlFor="username">Username or email address *</label>
            <input id="username" type="text" />

            <label htmlFor="password">Password *</label>
            <div className="password-field">
              <input id="password" type="password" />
              <button type="button" className="password-toggle" aria-label="Show password">
                <EyeIcon />
              </button>
            </div>

            <div className="remember-row">
              <label className="checkbox-row">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/">Lost your password?</a>
            </div>

            <button type="submit" className="account-submit">
              <span>Log in</span>
            </button>
          </form>
        </article>

        <article className="account-card">
          <h2>Register</h2>
          <form className="account-form">
            <label htmlFor="register-email">Email address *</label>
            <input id="register-email" type="email" />

            <p className="account-copy">
              A link to set a new password will be sent to your email address.
            </p>

            <p className="account-copy">
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our privacy
              policy.
            </p>

            <button type="submit" className="account-submit">
              <span>Register</span>
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="page-shell">
      <HeaderMenuApp/>

     
      <main>
        <AccountSection />
      </main>
      <FooterSectionApp/> 

    </div>
  );
}

export default App;