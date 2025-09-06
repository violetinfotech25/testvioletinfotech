import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mobileFrame from "../assets/image/websitegallery/mobile.png";
import tabletFrame from "../assets/image/websitegallery/tab.png";
import laptopFrame from "../assets/image/websitegallery/lap.png";

import mobile1 from "../assets/image/websitegallery/ms-1.png";
import mobile2 from "../assets/image/websitegallery/ms-2.png";
import mobile3 from "../assets/image/websitegallery/ms-3.png";
import mobile4 from "../assets/image/websitegallery/ms-4.png";
import mobile5 from "../assets/image/websitegallery/ms-5.png";

import tablet1 from "../assets/image/websitegallery/ts-1.png";
import tablet2 from "../assets/image/websitegallery/ts-2.png";
import tablet3 from "../assets/image/websitegallery/ts-3.png";
import tablet4 from "../assets/image/websitegallery/ts-4.png";
import tablet5 from "../assets/image/websitegallery/ts-5.png";

import laptop1 from "../assets/image/websitegallery/ls-1.png";
import laptop2 from "../assets/image/websitegallery/ls-2.png";
import laptop3 from "../assets/image/websitegallery/ls-3.png";
import laptop4 from "../assets/image/websitegallery/ls-4.png";
import laptop5 from "../assets/image/websitegallery/ls-5.png";

import "../assets/css/websitegallery.css";

const DevicePreviewCarousel: React.FC = () => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "laptop">("mobile");
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    fade: true,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  const getDeviceFrame = () => {
    switch (device) {
      case "tablet":
        return tabletFrame;
      case "laptop":
        return laptopFrame;
      default:
        return mobileFrame;
    }
  };

  const getScreenshots = () => {
    switch (device) {
      case "tablet":
        return [tablet1, tablet2, tablet3, tablet4, tablet5];
      case "laptop":
        return [laptop1, laptop2, laptop3, laptop4, laptop5];
      default:
        return [mobile1, mobile2, mobile3, mobile4, mobile5];
    }
  };

  const screenshots = getScreenshots();

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index); // ✅ Correct usage via ref
  };

  const handleDeviceChange = (deviceType: "mobile" | "tablet" | "laptop") => {
    setDevice(deviceType);
    setActiveIndex(0);
    sliderRef.current?.slickGoTo(0);
  };

  return (
    <div className="mobile-preview-container">
      <div className="device-toggle">
        <button
          className={`toggle-button ${device === "mobile" ? "active" : ""}`}
          onClick={() => handleDeviceChange("mobile")}
        >
          Mobile
        </button>
        <button
          className={`toggle-button ${device === "tablet" ? "active" : ""}`}
          onClick={() => handleDeviceChange("tablet")}
        >
          Tablet
        </button>
        <button
          className={`toggle-button ${device === "laptop" ? "active" : ""}`}
          onClick={() => handleDeviceChange("laptop")}
        >
          Laptop
        </button>
      </div>

      <div className={`frame-wrapper ${device}`}>
        <img src={getDeviceFrame()} alt={`${device} frame`} className="device-frame" />
        <div className={`carousel-inside ${device}`}>
          <Slider ref={sliderRef} {...settings}>
            {screenshots.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Screenshot ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="thumbnail-selector">
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      <div className="frame-caption">
        <h2 className="caption-title">See Your Website in Action</h2>
        <p className="caption-text">Develop your website with us — fully responsive across mobile, tablet, laptop, and monitor devices.</p>
      </div>
    </div>
  );
};

export default DevicePreviewCarousel;