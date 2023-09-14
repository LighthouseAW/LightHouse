import React from "react";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../public/carousel/Carousel1.jpeg';
import Image2 from '../public/carousel/Carousel2.jpeg';
import Image3 from '../public/carousel/Carousel3.jpeg';
import Image4 from '../public/carousel/Carousel4.jpeg';
import Image5 from '../public/carousel/Carousel5.jpeg';

export default function Carousel() {
  const images = [
    { image: Image1, url: "/mission", name: "Rania", title: "Our Mission", bg: 'bg-blue-100', text: "Rania is a Christian woman in her 40’s. She was an urgent case back in 2021 due to self harm and suicide attempts caused by domestic violence and abuse that took place in her household. We got in touch with her through Telegram and our team prayed and ministered to her needs. She continues to be discipled by us today." },
    { image: Image2, url: "/about/statementOfFaith", name: "Ashraf", title: "What we believe", bg: 'bg-blue-200', text: "Ashraf currently lives with his mother and has two siblings in middle school. He currently attends college where he studies engineering. Ashraf contacted us wanting to know the differences between Islam and Christianity. He has since put his faith in Christ, and currently attends a home church." },
    { image: Image3, url: "/projects/whereWeServe", name: "Hassan", title: "Where we serve", bg: 'bg-blue-300', text: "Hassan was with the Salafi Muslim Brotherhood. He believed in Jesus two years ago. Hassan had to deal with severe persecution once he announced his faith. Due to the dangerous  situation, he decided to go far away from where he used to live. We got to know him through BeLight and his story has touched us all!" },
    { image: Image4, url: "/projects", name: "Hossam",  title: "Our Work", bg: 'bg-blue-400', text: "Hossam is 45 years old and has one daughter. He contacted us through our BeLight Facebook page and was evangelized through our various Christian social media programs. He currently attends a local church in his city where he continues to be discipled and grow his faith in Jesus." },
    { image: Image5, url: "/about", name: "Hussein",  title: "About Us", bg: 'bg-blue-500', text: 'After watching "Life with Leticia," Hussein had dreams about following Jesus. He began to watch our content daily and communicate with us about Christ. He has some deformities in his physical appearance but with God he is conquering everything.  He has joined our discipleship program in order to learn the Gospel and be baptized.' },
    { image: Image5, url: "/about", name: "Yassin",  title: "About Us", bg: 'bg-blue-100', text: 'Yassin is 28 years old and has a degree in Medical Analysis. Through the influence of Christian friends, Yassin reached out to us for answers as to why we worship Jesus. Our team conveyed to him the message of the cross and brought clarity to his questions. He currently attends a home church, where he continues to develop his passion for Jesus.' },
    { image: Image5, url: "/about", name: "Nadia",  title: "About Us", bg: 'bg-blue-200', text: 'Nadia is a doctor in Morocco. She came to know Christ through our social media platforms and developed a deep relationship with our Lord by listening to our worship songs on BeLight.tv. She continues to attend a local church to this day and grow in Christ.' },
    { image: Image5, url: "/about", name: "Walid",  title: "About Us", bg: 'bg-blue-300', text: 'Walid reached out to us through "Life with Leticia." He and Leticia were diagnosed with the same auto-immune disorder, and this served as a door for us to share with him the hope of Jesus. He is now healed of his disorder, and his family has also come to Christ due to him witnessing his faith and healing to them.' },
    { image: Image5, url: "/about", name: "El Ghazali",  title: "About Us", bg: 'bg-blue-400', text: 'El Ghazali left Islam and began pursuing Jesus Christ when he heard the gospel through our social media platforms. He reached out to us, and our team has met with him in person many times. He is in the initial stage of discipleship, and we are helping him to find a local church. He has a newborn baby, and his wife is still Muslim. We pray for her salvation to come soon!' },
    { image: Image5, url: "/about", name: "Hussein-Ali",  title: "About Us", bg: 'bg-blue-400', text: 'Hussein-Ali has been watching our video series, "Life with Leticia" for several months now. He finally reached out to us asking for help in making Jesus Christ the Lord of his life. Since then, Hussein-Ali has been part of our discipleship program and will be baptized soon!' },
  ];

  const settings = {
    infinite: true,
    speed: 2500, // Adjust the speed for smoother scrolling
    slidesToShow: 3, // Set the number of slides to show
    slidesToScroll: 3, // Set the number of slides to scroll
    autoplay: true,
    autoplaySpeed: 2000, // Change the interval duration (in milliseconds) as needed
    centerMode: true, // Enable center mode
    centerPadding: "8", // Adjust the center padding as needed
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className=""> {/* Add margin to control slide size */}
            <div className="slide-content">
              <CarouselCard
                image={image.image}
                name={image.name}
                button={createButton(image.url, image.title)}
                bg={image.bg}
                text={image.text}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function createButton(url, title) {
  return (
    <>
      <button className="px-5 bg-white hover:bg-slate text-black font-bold py-2 rounded-full">
        <a href={url}>{title}</a>
      </button>
    </>
  );
}