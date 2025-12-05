import Image from 'next/image';
import { RACERS } from '@/constants';

export default function RacersPage() {
  // Sort racers by position
  const sortedRacers = [...RACERS].sort((a, b) => a.position - b.position);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/assets/images/group_photo_1.png"
            alt="All racers"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-container padding-container">
          <h1 className="bold-88 mb-4 drop-shadow-2xl">Our Racers</h1>
          <p className="regular-24">Meet the talented drivers of SafariDrift Pro Racing UG</p>
        </div>
      </section>

      {/* Racers Grid */}
      <section className="max-container padding-container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedRacers.map((racer, index) => (
            <div 
              key={racer.id}
              className="racer-card bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Position Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg ${
                    racer.position === 1 ? 'bg-yellow-400 text-gray-900' :
                    racer.position === 2 ? 'bg-gray-300 text-gray-900' :
                    racer.position === 3 ? 'bg-orange-400 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    {racer.position === 1 ? '🥇' :
                     racer.position === 2 ? '🥈' :
                     racer.position === 3 ? '🥉' :
                     `#${racer.position}`}
                  </div>
                </div>

                {/* Racer Image */}
                <div className="relative h-96">
                  <Image 
                    src={racer.image}
                    alt={racer.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Racer Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="bold-24 mb-1">{racer.alias}</h3>
                  <p className="regular-16 text-gray-600">{racer.name}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600">🏁</span>
                    <span className="regular-14 text-gray-600">
                      Position: {racer.position} / 10
                    </span>
                  </div>
                </div>

                <p className="regular-16 text-gray-700 leading-relaxed">
                  {racer.bio}
                </p>

                {/* Trophy for top 3 */}
                {racer.position <= 3 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-yellow-600">
                      <span>🏆</span>
                      <span className="bold-14">
                        {racer.position === 1 ? 'CHAMPION' :
                         racer.position === 2 ? 'RUNNER-UP' :
                         'THIRD PLACE'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-container padding-container">
          <h2 className="bold-52 text-center mb-12">Team SafariDrift</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/images/group_photo_1.png"
                alt="Team photo 1"
                fill
                className="object-cover image-hover"
              />
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/images/group_photo_2.png"
                alt="Team photo 2"
                fill
                className="object-cover image-hover"
              />
            </div>
          </div>

          {/* Ladies of SafariDrift */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/images/race_girlies.png"
              alt="Ladies of SafariDrift"
              fill
              className="object-cover image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="bold-40 mb-2">Ladies of SafariDrift</h3>
                <p className="regular-20">Breaking barriers and driving change in motorsport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-container padding-container py-20">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-center text-white">
            <div className="text-5xl font-bold mb-2">10</div>
            <p className="regular-18">Total Racers</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-center text-white">
            <div className="text-5xl font-bold mb-2">3</div>
            <p className="regular-18">Female Racers</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-center text-white">
            <div className="text-5xl font-bold mb-2">15</div>
            <p className="regular-18">Total Laps</p>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-8 text-center text-white">
            <div className="text-5xl font-bold mb-2">1</div>
            <p className="regular-18">Championship</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-container padding-container py-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-center text-white">
          <h2 className="bold-52 mb-4">Want to Join Our Team?</h2>
          <p className="regular-20 mb-8 max-w-2xl mx-auto">
            SafariDrift Pro Racing UG is always looking for talented drivers who share our passion for speed and competition.
          </p>
          <button className="btn_white">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}