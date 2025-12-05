import Image from "next/image";
import Link from "next/link";
import { INITIATIVES, RACERS } from "@/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/images/race_image_1.png" 
            alt="Racing background"
            fill
            className="object-cover opacity-40"
          />
        </div>

        {/* Uganda colors overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-uganda-red/20 via-uganda-yellow/10 to-black/60"></div>
        
        <div className="relative z-10 max-container padding-container text-center text-white py-12 sm:py-16 md:py-20">
          <div className="slide-up">
            <h1 className="bold-88 mb-4 sm:mb-6 text-white drop-shadow-2xl">
              SafariDrift
            </h1>
            <p className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 text-uganda-yellow drop-shadow-lg">
              Built for adventure. Driven by passion.
            </p>
            <p className="regular-20 max-w-3xl mx-auto mb-8 sm:mb-12 text-gray-200 px-4">
              Redefining how Africa experiences adventure, motion, and adrenaline through racing, exploration, and extreme sports.
            </p>
            
            {/* Fixed buttons - equal size */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 px-4">
              <Link href="/racing" className="w-full sm:w-auto">
                <button className="btn_yellow w-full sm:w-auto whitespace-nowrap">
                  View Race Results
                </button>
              </Link>
              <Link href="/racers" className="w-full sm:w-auto">
                <button className="btn_white_text w-full sm:w-auto whitespace-nowrap">
                  Meet the Racers
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-uganda-yellow rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-uganda-yellow rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Lubowa Grand Prix Highlight */}
      <section className="max-container padding-container py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 slide-up px-4">
          <h2 className="bold-64 mb-3 sm:mb-4">Lubowa Grand Prix 2025</h2>
          <p className="regular-20 text-gray-50 max-w-2xl mx-auto">
            Our inaugural race event that brought together Uganda's finest karting talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl zoom-in">
            <Image 
              src="/assets/images/winner.png"
              alt="Race Winner"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl zoom-in">
            <Image 
              src="/assets/images/standings.png"
              alt="Race Standings"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="/racing">
            <button className="btn_black w-full sm:w-auto">
              View Full Results
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Racers */}
      <section className="bg-gray-10 py-12 sm:py-16 md:py-20">
        <div className="max-container padding-container">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="bold-64 mb-3 sm:mb-4">Our Racers</h2>
            <p className="regular-20 text-gray-50">
              Meet the talented drivers pushing the limits
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {RACERS.slice(0, 10).map((racer) => (
              <Link href="/racers" key={racer.id}>
                <div className="racer-card bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className="relative h-40 sm:h-52 md:h-64">
                    <Image 
                      src={racer.image}
                      alt={racer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 text-center">
                    <h3 className="bold-16 sm:bold-18 mb-1">{racer.alias}</h3>
                    <p className="regular-14 text-gray-50 text-xs sm:text-sm truncate">{racer.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/racers">
              <button className="btn_yellow w-full sm:w-auto">
                View All Racers
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-container padding-container py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="bold-64 mb-3 sm:mb-4">What We Do</h2>
          <p className="regular-20 text-gray-50 max-w-3xl mx-auto">
            SafariDrift is more than racing - we're building a complete ecosystem of adventure, technology, and extreme sports across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {INITIATIVES.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${initiative.color} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6`}>
                {initiative.icon}
              </div>
              <h3 className="bold-24 mb-3 sm:mb-4">{initiative.title}</h3>
              <p className="regular-16 text-gray-50">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/about">
            <button className="btn_black w-full sm:w-auto">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-black py-12 sm:py-16 md:py-20">
        <div className="max-container padding-container">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="bold-64 mb-3 sm:mb-4 text-white">Race Gallery</h2>
            <p className="regular-20 text-gray-30">
              Captured moments from the Lubowa Grand Prix
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="relative h-40 sm:h-52 md:h-64 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                <Image 
                  src={`/assets/images/race_image_${num}.png`}
                  alt={`Race moment ${num}`}
                  fill
                  className="object-cover image-hover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/gallery">
              <button className="btn_white w-full sm:w-auto">
                View Full Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-container padding-container py-12 sm:py-16 md:py-20">
        <div className="bg-gradient-to-r from-uganda-black via-uganda-red to-uganda-yellow rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-20 text-center text-white">
          <h2 className="bold-52 mb-4 sm:mb-6">Ready to Join the Adventure?</h2>
          <p className="regular-20 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Whether you're a racer, explorer, or adventure enthusiast, SafariDrift welcomes you to be part of Africa's most exciting movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/racing" className="w-full sm:w-auto">
              <button className="btn_white w-full sm:w-auto">
                Join Pro Racing
              </button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <button className="btn_white_text w-full sm:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}




// import Image from "next/image";
// import Link from "next/link";
// import Button from "@/components/Button";
// import { INITIATIVES, RACERS } from "@/constants";

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-black">
//         <div className="absolute inset-0 opacity-20">
//           <Image 
//             src="/assets/images/race_image_1.png" 
//             alt="Racing background"
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         <div className="relative z-10 max-container padding-container text-center text-white py-20">
//           <div className="slide-up">
//             <h1 className="bold-88 mb-6 text-white drop-shadow-2xl">
//               SafariDrift
//             </h1>
//             <p className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400">
//               Built for adventure. Driven by passion.
//             </p>
//             <p className="regular-20 max-w-3xl mx-auto mb-8 text-gray-200">
//               Redefining how Africa experiences adventure, motion, and adrenaline through racing, exploration, and extreme sports.
//             </p>
            
//             <div className="flex flex-wrap gap-4 justify-center mt-12">
//               <Link href="/racing">
//                 <button className="btn_green">
//                   View Race Results
//                 </button>
//               </Link>
//               <Link href="/racers">
//                 <button className="btn_white_text">
//                   Meet the Racers
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
//           </div>
//         </div>
//       </section>

//       {/* Lubowa Grand Prix Highlight */}
//       <section className="max-container padding-container py-20">
//         <div className="text-center mb-12 slide-up">
//           <h2 className="bold-64 mb-4">Lubowa Grand Prix 2025</h2>
//           <p className="regular-20 text-gray-30 max-w-2xl mx-auto">
//             Our inaugural race event that brought together Uganda's finest karting talent
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl zoom-in">
//             <Image 
//               src="/assets/images/winner.png"
//               alt="Race Winner"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl zoom-in">
//             <Image 
//               src="/assets/images/standings.png"
//               alt="Race Standings"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         <div className="text-center">
//           <Link href="/racing">
//             <button className="btn_dark_green">
//               View Full Results
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Featured Racers */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-container padding-container">
//           <div className="text-center mb-12">
//             <h2 className="bold-64 mb-4">Our Racers</h2>
//             <p className="regular-20 text-gray-30">
//               Meet the talented drivers pushing the limits
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {RACERS.slice(0, 10).map((racer) => (
//               <Link href="/racers" key={racer.id}>
//                 <div className="racer-card bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer">
//                   <div className="relative h-64">
//                     <Image 
//                       src={racer.image}
//                       alt={racer.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="p-4 text-center">
//                     <h3 className="bold-18 mb-1">{racer.alias}</h3>
//                     <p className="regular-14 text-gray-30 text-sm">{racer.name}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link href="/racers">
//               <button className="btn_green">
//                 View All Racers
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="max-container padding-container py-20">
//         <div className="text-center mb-16">
//           <h2 className="bold-64 mb-4">What We Do</h2>
//           <p className="regular-20 text-gray-30 max-w-3xl mx-auto">
//             SafariDrift is more than racing - we're building a complete ecosystem of adventure, technology, and extreme sports across Africa
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {INITIATIVES.map((initiative, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${initiative.color} flex items-center justify-center text-3xl mb-6`}>
//                 {initiative.icon}
//               </div>
//               <h3 className="bold-24 mb-4">{initiative.title}</h3>
//               <p className="regular-16 text-gray-30">{initiative.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link href="/about">
//             <button className="btn_dark_green">
//               Learn More About Us
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Gallery Preview */}
//       <section className="bg-black py-20">
//         <div className="max-container padding-container">
//           <div className="text-center mb-12">
//             <h2 className="bold-64 mb-4 text-white">Race Gallery</h2>
//             <p className="regular-20 text-gray-400">
//               Captured moments from the Lubowa Grand Prix
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//               <div key={num} className="relative h-64 rounded-2xl overflow-hidden">
//                 <Image 
//                   src={`/assets/images/race_image_${num}.png`}
//                   alt={`Race moment ${num}`}
//                   fill
//                   className="object-cover image-hover"
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link href="/gallery">
//               <button className="btn_white">
//                 View Full Gallery
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="max-container padding-container py-20">
//         <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 md:p-20 text-center text-white">
//           <h2 className="bold-52 mb-6">Ready to Join the Adventure?</h2>
//           <p className="regular-20 mb-8 max-w-2xl mx-auto">
//             Whether you're a racer, explorer, or adventure enthusiast, SafariDrift welcomes you to be part of Africa's most exciting movement.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link href="/racing">
//               <button className="btn_white">
//                 Join Pro Racing
//               </button>
//             </Link>
//             <Link href="/about">
//               <button className="btn_white_text">
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }