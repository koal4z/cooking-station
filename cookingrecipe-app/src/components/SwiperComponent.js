import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
export default function SwiperComponent() {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
  };

  return (
    <Swiper {...params}>
      <div
        style={{
          backgroundImage:
            "url('https://hiptastes.com/wp-content/uploads/2019/11/getmedia_ae51f174-984f-4a70-ad3d-3f6b517b6da1_fruits-vegetables-healthy-fats.jpg_width1180height524ext.jpg')",
          backgroundSize: "cover",
          width: "100%",
          height: "30vh",
          minHeight: "200px"
        }}
      ></div>
      <div
        style={{
          backgroundImage:
            "url('https://www.prachachat.net/wp-content/uploads/2017/12/dlf01071260p1-728x546.jpg')",
          backgroundSize: "cover",
          width: "100%",
          height: "30vh",
          minHeight: "200px"
        }}
      ></div>
      <div
        style={{
          backgroundImage:
            "url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528')",
          backgroundSize: "cover",
          width: "100%",
          height: "30vh",
          minHeight: "200px"
        }}
      ></div>
      <div
        style={{
          backgroundImage:
            "url('https://crmrkitchen.com/wp-content/uploads/2019/11/10-Italian-Fun-Facts-The-Food-Fashion-and-Culture-of-Italy.jpg')",
          backgroundSize: "cover",
          width: "100%",
          height: "30vh",
          minHeight: "200px"
        }}
      ></div>
    </Swiper>
  );
}
