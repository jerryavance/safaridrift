import Image from 'next/image';
import Link from 'next/link';
import { RACE_STANDINGS } from '@/constants';

export default function RacingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/assets/images/race_line_up_poster_1.png"
            alt="Racing lineup"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-container padding-container px-4">
          <h1 className="bold-88 mb-3 sm:mb-4 drop-shadow-2xl">SafariDrift Pro Racing UG</h1>
          <p className="regular-24 mb-6 sm:mb-8 text-uganda-yellow">Uganda's First Professional Karting Championship</p>
          <div className="racing-gradient h-1.5 sm:h-2 w-24 sm:w-32 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Lubowa Grand Prix */}
      <section className="max-container padding-container py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-block bg-uganda-red text-white px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4">
            <span className="bold-16">RACE 1 - COMPLETED</span>
          </div>
          <h2 className="bold-64 mb-3 sm:mb-4">Lubowa Grand Prix 2025</h2>
          <p className="regular-20 text-gray-50 max-w-3xl mx-auto">
            The inaugural race of SafariDrift Pro Racing UG brought together 10 talented drivers for an unforgettable day of karting competition at Lubowa Racing Circuit.
          </p>
        </div>

        {/* Race Posters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/images/Safari_Drift_Race_1.png"
              alt="Race Announcement"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/images/winner.png"
              alt="Race Winner"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/images/standings.png"
              alt="Official Standings"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Winner Spotlight */}
        <div className="bg-gradient-to-r from-uganda-yellow via-orange-400 to-uganda-red rounded-2xl sm:rounded-3xl p-8 sm:p-12 mb-12 sm:mb-16 text-center">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🏆</div>
          <h3 className="bold-40 mb-2 text-white drop-shadow-lg">RACE WINNER</h3>
          <p className="bold-32 text-black mb-2">Joshua Mumbere</p>
          <p className="regular-24 text-gray-900">"Josh The Dev"</p>
          <p className="regular-16 text-gray-800 mt-3 sm:mt-4 font-semibold">Fastest Lap: 39.412s</p>
        </div>

        {/* Standings Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-black to-gray-900 p-4 sm:p-6">
            <h3 className="bold-32 text-uganda-yellow text-center">Final Standings</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left bold-16 sm:bold-18">Pos</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left bold-16 sm:bold-18">Racer</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left bold-16 sm:bold-18 hidden sm:table-cell">Alias</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left bold-16 sm:bold-18">Points</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left bold-16 sm:bold-18 hidden md:table-cell">Fastest</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left bold-16 sm:bold-18 hidden lg:table-cell">Gap</th>
                </tr>
              </thead>
              <tbody>
                {RACE_STANDINGS.map((standing, index) => (
                  <tr 
                    key={standing.position}
                    className={`border-b transition-colors hover:bg-gray-50 ${
                      index === 0 ? 'bg-yellow-50' : 
                      index === 1 ? 'bg-gray-50' : 
                      index === 2 ? 'bg-orange-50' : ''
                    }`}
                  >
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2">
                        <span className="bold-18 sm:bold-20">
                          {standing.position === 1 ? '🥇' : 
                           standing.position === 2 ? '🥈' : 
                           standing.position === 3 ? '🥉' : standing.position}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 bold-14 sm:bold-16">
                      <div className="max-w-[120px] sm:max-w-none truncate">{standing.racer}</div>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 regular-14 sm:regular-16 text-uganda-red hidden sm:table-cell">{standing.alias}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 bold-14 sm:bold-16">{standing.points}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 regular-14 sm:regular-16 text-gray-600 hidden md:table-cell">{standing.fastestLap}s</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 regular-14 sm:regular-16 text-gray-600 hidden lg:table-cell">{standing.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/racers">
            <button className="btn_yellow w-full sm:w-auto">View All Racers</button>
          </Link>
        </div>
      </section>

      {/* Race Highlights */}
      <section className="bg-gray-10 py-12 sm:py-16 md:py-20">
        <div className="max-container padding-container">
          <h2 className="bold-52 text-center mb-8 sm:mb-12 px-4">Race Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏁</div>
              <h3 className="bold-24 mb-3 sm:mb-4">Track Information</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-red text-lg sm:text-xl">📍</span>
                  <span className="regular-14 sm:regular-16">Lubowa Racing Circuit, Kampala</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-red text-lg sm:text-xl">🛣️</span>
                  <span className="regular-14 sm:regular-16">Track Length: 1.2 km</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-red text-lg sm:text-xl">🔄</span>
                  <span className="regular-14 sm:regular-16">15 Total Laps</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-red text-lg sm:text-xl">👥</span>
                  <span className="regular-14 sm:regular-16">10 Competitors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
              <h3 className="bold-24 mb-3 sm:mb-4">Race Statistics</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-yellow text-lg sm:text-xl">⚡</span>
                  <span className="regular-14 sm:regular-16">Fastest Lap: 39.412s (Josh The Dev)</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-yellow text-lg sm:text-xl">🏆</span>
                  <span className="regular-14 sm:regular-16">Best Single Lap: 38.907s (Amanda)</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-yellow text-lg sm:text-xl">🎯</span>
                  <span className="regular-14 sm:regular-16">10 Brave Finishers</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-uganda-yellow text-lg sm:text-xl">🎉</span>
                  <span className="regular-14 sm:regular-16">Incredible Atmosphere!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Race CTA */}
      <section className="max-container padding-container py-12 sm:py-16 md:py-20">
        <div className="bg-gradient-to-r from-uganda-red via-uganda-yellow to-black rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="bold-52 mb-3 sm:mb-4">Next Race Coming Soon!</h2>
          <p className="regular-20 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Stay tuned for the next race in the SafariDrift Pro Racing UG championship. Follow us on social media for updates!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/gallery" className="w-full sm:w-auto">
              <button className="btn_white w-full sm:w-auto">View Gallery</button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <button className="btn_white_text w-full sm:w-auto">Learn More</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




// import Image from 'next/image';
// import Link from 'next/link';
// import { RACE_STANDINGS } from '@/constants';

// export default function RacingPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <Image 
//             src="/assets/images/race_line_up_poster_1.png"
//             alt="Racing lineup"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-container padding-container">
//           <h1 className="bold-88 mb-4 drop-shadow-2xl">SafariDrift Pro Racing UG</h1>
//           <p className="regular-24 mb-8">Uganda's First Professional Karting Championship</p>
//           <div className="racing-gradient h-2 w-32 mx-auto rounded-full"></div>
//         </div>
//       </section>

//       {/* Lubowa Grand Prix */}
//       <section className="max-container padding-container py-20">
//         <div className="text-center mb-16">
//           <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-4">
//             <span className="bold-16">RACE 1 - COMPLETED</span>
//           </div>
//           <h2 className="bold-64 mb-4">Lubowa Grand Prix 2025</h2>
//           <p className="regular-20 text-gray-30 max-w-3xl mx-auto">
//             The inaugural race of SafariDrift Pro Racing UG brought together 10 talented drivers for an unforgettable day of karting competition at Lubowa Racing Circuit.
//           </p>
//         </div>

//         {/* Race Posters */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
//             <Image 
//               src="/assets/images/Safari_Drift_Race_1.png"
//               alt="Race Announcement"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
//             <Image 
//               src="/assets/images/winner.png"
//               alt="Race Winner"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
//             <Image 
//               src="/assets/images/standings.png"
//               alt="Official Standings"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Winner Spotlight */}
//         <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl p-12 mb-16 text-center">
//           <div className="text-6xl mb-4">🏆</div>
//           <h3 className="bold-40 mb-2 text-white">RACE WINNER</h3>
//           <p className="bold-32 text-gray-900 mb-2">Joshua Mumbere</p>
//           <p className="regular-24 text-gray-800">"Josh The Dev"</p>
//           <p className="regular-16 text-gray-700 mt-4">Fastest Lap: 39.412s</p>
//         </div>

//         {/* Standings Table */}
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-green-600 to-green-800 p-6">
//             <h3 className="bold-32 text-white text-center">Final Standings</h3>
//           </div>
          
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-4 text-left bold-18">Position</th>
//                   <th className="px-6 py-4 text-left bold-18">Racer</th>
//                   <th className="px-6 py-4 text-left bold-18">Alias</th>
//                   <th className="px-6 py-4 text-left bold-18">Points</th>
//                   <th className="px-6 py-4 text-left bold-18">Fastest Lap</th>
//                   <th className="px-6 py-4 text-left bold-18">Gap</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {RACE_STANDINGS.map((standing, index) => (
//                   <tr 
//                     key={standing.position}
//                     className={`border-b transition-colors hover:bg-gray-50 ${
//                       index === 0 ? 'bg-yellow-50' : 
//                       index === 1 ? 'bg-gray-50' : 
//                       index === 2 ? 'bg-orange-50' : ''
//                     }`}
//                   >
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <span className="bold-20">
//                           {standing.position === 1 ? '🥇' : 
//                            standing.position === 2 ? '🥈' : 
//                            standing.position === 3 ? '🥉' : standing.position}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 bold-16">{standing.racer}</td>
//                     <td className="px-6 py-4 regular-16 text-green-600">{standing.alias}</td>
//                     <td className="px-6 py-4 bold-16">{standing.points}</td>
//                     <td className="px-6 py-4 regular-16 text-gray-600">{standing.fastestLap}s</td>
//                     <td className="px-6 py-4 regular-16 text-gray-600">{standing.gap}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <Link href="/racers">
//             <button className="btn_green">View All Racers</button>
//           </Link>
//         </div>
//       </section>

//       {/* Race Highlights */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-container padding-container">
//           <h2 className="bold-52 text-center mb-12">Race Highlights</h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-3xl p-8 shadow-lg">
//               <div className="text-4xl mb-4">🏁</div>
//               <h3 className="bold-24 mb-4">Track Information</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">📍</span>
//                   <span className="regular-16">Lubowa Racing Circuit, Kampala</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">🛣️</span>
//                   <span className="regular-16">Track Length: 1.2 km</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">🔄</span>
//                   <span className="regular-16">15 Total Laps</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">👥</span>
//                   <span className="regular-16">10 Competitors</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-3xl p-8 shadow-lg">
//               <div className="text-4xl mb-4">📊</div>
//               <h3 className="bold-24 mb-4">Race Statistics</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">⚡</span>
//                   <span className="regular-16">Fastest Lap: 39.412s (Josh The Dev)</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">🏆</span>
//                   <span className="regular-16">Best Single Lap: 38.907s (Amanda)</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">🎯</span>
//                   <span className="regular-16">10 Brave Finishers</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-green-600">🎉</span>
//                   <span className="regular-16">Incredible Atmosphere!</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Next Race CTA */}
//       <section className="max-container padding-container py-20">
//         <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl p-12 text-center text-white">
//           <h2 className="bold-52 mb-4">Next Race Coming Soon!</h2>
//           <p className="regular-20 mb-8 max-w-2xl mx-auto">
//             Stay tuned for the next race in the SafariDrift Pro Racing UG championship. Follow us on social media for updates!
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link href="/gallery">
//               <button className="btn_white">View Gallery</button>
//             </Link>
//             <Link href="/about">
//               <button className="btn_white_text">Learn More</button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }