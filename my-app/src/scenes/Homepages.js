import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Sections";
import Card from "elements/Card";
import Lists from "elements/Lists";
import Buttons from "elements/Buttons";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Feature from "parts/Feature";
import Footer from "parts/Footer";

import HeroImages from "assets/images/hero-image.png";
import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";
export default function Homepages() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: "Feature tile icon 01",
      title: "Join RestoMen",
      description: "StartUp kuliner yang mengedepankan bumbu asli indonesia",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: "Feature tile icon 02",
      title: "Join A-Figs Garden",
      description:
        "StartUp dibidang segala sesuatu yang berkaitan dengan pertanian modern.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: "Feature tile icon 03",
      title: "Join A-Family Good & Happy",
      description:
        "Keluarga Adalah kita yang bisa saling memahami dan berbagi rasa.",
    },
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Jadilah Developer terdepan & memotivasi",
      features: [
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: false, content: "Jadi Software Developer Muda" },
        { isChecked: false, content: "Jadi Software Developer Muda" },
        { isChecked: false, content: "Jadi Software Developer Muda" },
      ],
    },
    {
      price: 47,
      currencySymbol: "$",
      description: "Jadilah FrondEnd masa depan",
      features: [
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: false, content: "Jadi Software Developer Muda" },
        { isChecked: false, content: "Jadi Software Developer Muda" },
      ],
    },
    {
      price: 67,
      currencySymbol: "$",
      description: "Jadilah BackEnd Unggul dan terdepan",
      features: [
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: true, content: "Jadi Software Developer Muda" },
        { isChecked: false, content: "Jadi Software Developer Muda" },
      ],
    },
  ];

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={1000}>
                  <h1 className="mt-0 mb-16">
                    Welcome to the A&A Design & Dev.
                  </h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={1000}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom delay={1500}>
                  <img
                    className="has-shadow"
                    src={HeroImages}
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients></Clients>
        <Section className="features-tiles">
          <div class="container">
            <div class="features-tiles-inner section-inner">
              <div class="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index * 500}
                    delayInMS={2000}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                {listPricing.map((list, index) => (
                  <Card hasShadow>
                    <div class="pricing-item-content">
                      <div class="pricing-item-header pb-24 mb-24">
                        <div class="pricing-item-price mb-4">
                          <span class="pricing-item-price-currency h2">
                            {list.currencySymbol}
                          </span>
                          <span
                            class="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="74"
                            data-pricing-yearly="67"
                          >
                            {list.price}
                          </span>
                        </div>
                        <div class="text-xs text-color-low">
                          {list.description}
                        </div>
                      </div>
                      <div class="pricing-item-features mb-40">
                        <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <Lists
                          data={list.features}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        ></Lists>
                      </div>
                    </div>
                    <div className="pricing-item-cta mb-8">
                      <Buttons isPrimary isBlock>
                        Start free trial
                      </Buttons>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </div>
  );
}
