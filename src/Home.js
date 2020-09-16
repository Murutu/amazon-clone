import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB420684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Nintendo Switch"
            price={200.0}
            image="https://snpi.dell.com/snp/images2/300/en-us~AA787660_v1/AA787660_v1.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Pioneer DDJ-800 Rekordbox DJ Controller"
            price={250.0}
            rating={4}
            image="https://www.westenddj.co.uk/media/catalog/product/cache/3/image/1000x/040ec09b1e35df139433887a97daa66f/d/d/ddj800-fa.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC493G 49' Curved
          LED Gaming Monitor"
            price={300.0}
            rating={5}
            image="https://www.courts.com.sg/media/catalog/product/i/p/ip151136_00.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
          />
          <Product
          id="453689" 
          title="Bose SoundLink Revolve Portable"
          price={250.00}
          rating={4}
          image="data:image/jpeg;base64,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"/>
          <Product 
          id="987654"
          title="PlayStation 4 Pro 1TB console"
          price={300.00}
          rating={4}
          image="https://c1.neweggimages.com/ProductImage/68-110-214-05.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
          id="456543"
          title="Apple 13.3 MacBook Pro with Touch Bar"
          price={400.00}
          rating={4}
          image="https://static.bhphoto.com/images/images2000x2000/1559148656_1481045.jpg"
          />
          <Product
          id="9890876"
          title="Beats by Dr. Dre Wireless Bluetooth Headphones"
          price={300.00}
          rating={5}
          image="https://static.bhphoto.com/images/images2500x2500/1572448186_1512397.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
