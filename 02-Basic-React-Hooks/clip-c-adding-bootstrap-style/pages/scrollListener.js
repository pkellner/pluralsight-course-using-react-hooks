import React, { useEffect, useState } from "react";

const ScrollListener = () => {
  const isScrolledIntoView = elem => {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  };

  const handleScroll = x => {
    console.log("handleScroll");
    debugger;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("done");
    };
  });

  return (
    <div>
      {[1124, 187, 823].map(speakerId => {
        return (
          <div>
            <img src={`/static/speakers/Speaker-${speakerId}.jpg`}  alt="" />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ScrollListener;

// import React from 'react';
//
// let lastScrollY = 0;
// let ticking = false;
//
// class App extends React.Component {
//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll);
//
//
//     componentWillUnmount() {
//         window.removeEventListener('scroll', this.handleScroll);
//     }
//
//     nav = React.createRef();
//
//     handleScroll = () => {
//         lastScrollY = window.scrollY;
//
//         if (!ticking) {
//             window.requestAnimationFrame(() => {
//                 this.nav.current.style.top = `${lastScrollY}px`;
//                 ticking = false;
//             });
//
//             ticking = true;
//         }
//     };
//
//     render() {
//         return (
//             <div>
//                 <nav ref={this.nav}>
//                 </nav>
//                 <div>
//                     );
//                     }
//                     }
//
//                     export default App;
