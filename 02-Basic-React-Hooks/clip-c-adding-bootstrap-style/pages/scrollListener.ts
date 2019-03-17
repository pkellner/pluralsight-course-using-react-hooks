// import React from 'react';
//
// let lastScrollY = 0;
// let ticking = false;
//
// class App extends React.Component {
//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll);
//     }
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