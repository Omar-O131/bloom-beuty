import { useState } from "react";
import HeaderMenuApp from "../../Header-menu/src/App";
import FooterSectionApp from "../../footer-section/src/App";

function App() {
  const [currentStep, setCurrentStep] = useState<"cart" | "checkout">("cart");

  return (
    <div className="page">
      <HeaderMenuApp />

      <main>
        <section className="cart-hero compact">
          <div className="checkout-steps">
            <button
              type="button"
              className={`checkout-steps__item ${
                currentStep === "cart" ? "active" : ""
              }`}
              onClick={() => setCurrentStep("cart")}
            >
              <span className="checkout-steps__number">1</span>
              <span className="checkout-steps__label">SHOPPING CART</span>
            </button>

            <div className="checkout-steps__line" />

            <button
              type="button"
              className={`checkout-steps__item ${
                currentStep === "checkout" ? "active" : ""
              }`}
              onClick={() => setCurrentStep("checkout")}
            >
              <span className="checkout-steps__number">2</span>
              <span className="checkout-steps__label">CHECKOUT</span>
            </button>

            <div className="checkout-steps__line" />

            <div className="checkout-steps__item">
              <span className="checkout-steps__number">3</span>
              <span className="checkout-steps__label">ORDER STATUS</span>
            </div>
          </div>

          <p className="cart-hero__notice">
            You are out of time! Checkout now to avoid losing your order!
          </p>
        </section>

        {currentStep === "cart" ? (
          <section className="cart-layout">
            <div className="cart-layout__main">
              <div className="cart-table">
                <div className="cart-table__head">
                  <span className="product-col">PRODUCT</span>
                  <span>PRICE</span>
                  <span>SKU</span>
                  <span>QUANTITY</span>
                  <span>SUBTOTAL</span>
                </div>

                <div className="cart-row">
                  <div className="cart-row__product">
                    <div className="cart-row__badges">
                      <span>LIMITED EDITION</span>
                      <span>NEW</span>
                    </div>

                    <div className="cart-row__product-inner">
                      <img
                        src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/11/jo-malone-festive-cologne-duo-300x300.webp"
                        alt="Jo Malone Festive Cologne Duo"
                      />

                      <div className="cart-row__product-copy">
                        <a href="https://beauty-bloom.net/shop/">
                          Jo Malone Festive Cologne Duo
                        </a>
                        <button type="button">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="cart-row__cell price">260 ₪</div>
                  <div className="cart-row__cell sku">JM6232R</div>

                  <div className="cart-row__cell qty">
                    <div className="qty-box">
                      <button type="button">-</button>
                      <span>1</span>
                      <button type="button">+</button>
                    </div>
                  </div>

                  <div className="cart-row__cell subtotal">260 ₪</div>
                </div>
              </div>

              <div className="cart-actions">
                <div className="coupon-box">
                  <input type="text" placeholder="Coupon code" />
                  <button type="button">OK</button>
                </div>

                <button
                  type="button"
                  className="slanted-button slanted-button--ghost"
                >
                  <span>Clear Shopping Cart</span>
                </button>
              </div>
            </div>

            <aside className="cart-summary">
              <div className="cart-summary__box">
                <h3>CART TOTALS</h3>

                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <span>260 ₪</span>
                </div>

                <div className="cart-summary__row cart-summary__row--total">
                  <span>TOTAL</span>
                  <span>260 ₪</span>
                </div>

                <button
                  type="button"
                  className="slanted-button slanted-button--primary"
                  onClick={() => setCurrentStep("checkout")}
                >
                  <span>Proceed To Checkout</span>
                </button>

                <a
                  className="slanted-button slanted-button--secondary"
                  href="https://beauty-bloom.net/shop/"
                >
                  <span>Continue Shopping</span>
                </a>
              </div>

              <section className="payment-security">
                <h3>PAYMENT SECURITY</h3>
                <p>
                  Encryption ensures increased transaction security. SSL
                  technology protects data linked to personal and payment info.
                </p>

                <div
                  className="payment-methods"
                  aria-label="Accepted payment methods"
                >
                  <img
                    src="/image/payment_methods.png"
                    alt="Accepted payment methods"
                  />
                </div>
              </section>
            </aside>
          </section>
        ) : (
          <section className="checkout-layout">
            <div className="checkout-layout__main">
              <div className="checkout-coupon-note">
                Have a coupon?{" "}
                <button type="button" className="text-link-inline">
                  Click here to enter
                </button>
              </div>

              <section className="checkout-card">
                <div className="checkout-card__header checkout-card__header--stacked">
                  <h2>Billing Details</h2>
                </div>

                <div className="checkout-form-grid">
                  <label className="form-field">
                    <span>First Name *</span>
                    <input type="text" placeholder="First Name" />
                  </label>

                  <label className="form-field">
                    <span>Last Name *</span>
                    <input type="text" placeholder="Last Name" />
                  </label>

                  <label className="form-field form-field--full">
                    <span>Country / Region *</span>
                    <select defaultValue="Palestinian Territory">
                      <option>Palestinian Territory</option>
                    </select>
                  </label>

                  <label className="form-field form-field--full">
                    <span>City *</span>
                    <select defaultValue="Select city">
                      <option>Select city</option>
                    </select>
                  </label>

                  <label className="form-field form-field--full">
                    <span>Village *</span>
                    <select defaultValue="Select village">
                      <option>Select village</option>
                    </select>
                  </label>

                  <label className="form-field form-field--full">
                    <span>Street address *</span>
                    <input
                      type="text"
                      placeholder="House number and street name"
                    />
                  </label>

                  <label className="form-field form-field--full">
                    <span>Phone *</span>
                    <input type="tel" placeholder="Phone" />
                  </label>

                  <label className="form-field form-field--full">
                    <span>Email Address *</span>
                    <input
                      type="email"
                      defaultValue="oghannam617@gmail.com"
                    />
                  </label>
                </div>
              </section>

              <section className="checkout-card">
                <h2>Shipping Address</h2>
                <label className="check-line">
                  <input type="checkbox" />
                  <span>Ship to a different address?</span>
                </label>
              </section>

              <section className="checkout-card">
                <h2>Additional Information</h2>
                <label className="form-field form-field--full">
                  <span>Order Notes (optional)</span>
                  <textarea
                    rows={5}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  />
                </label>
              </section>
            </div>

            <aside className="checkout-sidebar">
              <section className="checkout-card">
                <h2>Your Order</h2>

                <div className="order-summary">
                  <div className="order-summary__product">
                    <strong>
                      Amika Aura Hair &amp; Body Mist with Vanilla and Pink
                      Grapefruit
                    </strong>
                    <span>1 x 155 ₪</span>
                    <span>Size: 90 ml</span>
                    <span>Subtotal: 155 ₪</span>
                  </div>

                  <div className="order-summary__row">
                    <span>Subtotal</span>
                    <span>155 ₪</span>
                  </div>

                  <div className="order-summary__row order-summary__row--total">
                    <span>TOTAL</span>
                    <span>155 ₪</span>
                  </div>
                </div>
              </section>

              <section className="checkout-card">
                <div className="radio-stack radio-stack--checkout">
                  <label className="radio-option radio-option--checkout active">
                    <input type="radio" name="payment" defaultChecked />
                    <div>
                      <strong>Cash on delivery</strong>
                      <span>Pay with cash upon delivery.</span>
                    </div>
                  </label>

                  <label className="radio-option radio-option--checkout">
                    <input type="radio" name="payment" />
                    <div>
                      <strong>Debit/Credit Cards</strong>
                      <span className="inline-payment-icons">
                        <img src="/image/payment_methods.png" alt="Cards" />
                      </span>
                    </div>
                  </label>
                </div>

                <p className="checkout-policy">
                  Your personal data will be used to process your order,
                  support your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>

                <label className="check-line check-line--terms">
                  <input type="checkbox" />
                  <span>
                    I have read and agree to the website terms and conditions *
                  </span>
                </label>

                <button
                  type="button"
                  className="slanted-button slanted-button--primary checkout-place-order"
                >
                  <span>Place Order</span>
                </button>
              </section>
            </aside>
          </section>
        )}
      </main>

      <FooterSectionApp />
    </div>
  );
}

export default App;