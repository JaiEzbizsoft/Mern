import React from 'react'

const menu = () => {
  return (
    <div> 
        <section id="menu" className="menu section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Menu</h2>
    <p>
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
      consectetur velit
    </p>
  </div>
  {/* End Section Title */}
  <div className="container" data-aos="fade-up">
    <div
      className="isotope-layout"
      data-default-filter="*"
      data-layout="masonry"
      data-sort="original-order"
    >
      <div className="menu-filters isotope-filters mb-5">
        <ul>
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-starters">Starters</li>
          <li data-filter=".filter-main">Main Courses</li>
          <li data-filter=".filter-dessert">Desserts</li>
          <li data-filter=".filter-drinks">Drinks</li>
        </ul>
      </div>
      <div className="menu-container isotope-container row gy-4">
        {/* Regular Menu Items */}
        <div className="col-lg-6 isotope-item filter-starters">
          <div className="menu-item d-flex align-items-center gap-4">
            <img
              src="/images/restaurant/starter-2.webp"
              alt="Starter"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Bruschetta Trio <span className="menu-tag">Vegetarian</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$8.95</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 isotope-item filter-starters">
          <div className="d-flex menu-item align-items-center gap-4">
            <img
              src="/images/restaurant/starter-5.webp"
              alt="Starter"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Calamari Fritti <span className="menu-tag">Seafood</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$10.95</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 isotope-item filter-main">
          <div className="d-flex menu-item align-items-center gap-4">
            <img
              src="/images/restaurant/main-1.webp"
              alt="Main Course"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Wild Mushroom Risotto{" "}
                <span className="menu-tag">Vegetarian</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$18.95</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 isotope-item filter-main">
          <div className="d-flex menu-item align-items-center gap-4">
            <img
              src="/images/restaurant/main-4.webp"
              alt="Main Course"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Braised Lamb Shank{" "}
                <span className="menu-tag">Chef's Choice</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$26.95</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 isotope-item filter-dessert">
          <div className="d-flex menu-item align-items-center gap-4">
            <img
              src="/images/restaurant/dessert-2.webp"
              alt="Dessert"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Chocolate Lava Cake{" "}
                <span className="menu-tag">Gluten Free</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$9.95</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 isotope-item filter-dessert">
          <div className="d-flex menu-item align-items-center gap-4">
            <img
              src="/images/restaurant/dessert-7.webp"
              alt="Dessert"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Tiramisu <span className="menu-tag">Classic</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$8.95</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 isotope-item filter-drinks">
          <div className="d-flex menu-item align-items-center gap-4">
            <img
              src="/images/restaurant/drink-3.webp"
              alt="Drink"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Signature Cocktail <span className="menu-tag">Alcoholic</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$12.95</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 isotope-item filter-drinks">
          <div className="d-flex menu-item align-items-center gap-4">
            <img
              src="/images/restaurant/drink-8.webp"
              alt="Drink"
              className="menu-img img-fluid rounded-3"
            />
            <div className="menu-content">
              <h5>
                Berry Smoothie <span className="menu-tag">Non-Alcoholic</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                curabitur sed.
              </p>
              <div className="price">$7.95</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-5" data-aos="fade-up">
      <a href="#" className="download-menu">
        <i className="bi bi-file-earmark-pdf" /> Download Full Menu
      </a>
    </div>
    {/* Chef's Specials */}
    <div className="col-12 mt-5" data-aos="fade-up">
      <div className="specials-badge">
        <span>
          <i className="bi bi-award" /> Chef's Specials
        </span>
      </div>
      <div className="specials-container">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="menu-item special-item">
              <div className="menu-item-img">
                <img
                  src="/images/restaurant/main-3.webp"
                  alt="Special Dish"
                  className="img-fluid"
                />
                <div className="menu-item-badges">
                  <span className="badge-special">Special</span>
                  <span className="badge-vegan">Vegan</span>
                </div>
              </div>
              <div className="menu-item-content">
                <h4>Mediterranean Grilled Salmon</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent ut aliquam metus. Vivamus fermentum magna quis.
                </p>
                <div className="menu-item-price">$24.99</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="menu-item special-item">
              <div className="menu-item-img">
                <img
                  src="/images/restaurant/main-7.webp"
                  alt="Special Dish"
                  className="img-fluid"
                />
                <div className="menu-item-badges">
                  <span className="badge-special">Special</span>
                  <span className="badge-spicy">Spicy</span>
                </div>
              </div>
              <div className="menu-item-content">
                <h4>Signature Ribeye Steak</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  accumsan risus ut dui pretium, eget elementum nisi.
                </p>
                <div className="menu-item-price">$32.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default menu