import Image from 'next/image';
import Link from 'next/link';
import { INITIATIVES } from '@/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/assets/images/group_photo_1.png"
            alt="SafariDrift Team"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-container padding-container py-20">
          <h1 className="bold-88 mb-6 drop-shadow-2xl">SafariDrift Technologies Limited</h1>
          <p className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400">
            "Built for adventure. Driven by passion."
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-container padding-container py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="bold-52 mb-8">Who We Are</h2>
          <p className="regular-20 text-gray-700 leading-relaxed mb-6">
            SafariDrift Technologies Limited is a lifestyle and technology company redefining how Africa experiences adventure, motion, and adrenaline. Born from a deep passion for aviation, motorsport, travel, and exploration, SafariDrift exists as a creative and technological vehicle to pursue and power extraordinary dreams.
          </p>
          <p className="regular-20 text-gray-700 leading-relaxed">
            From the roar of engines to the call of the wild, SafariDrift blends technology, tourism, and extreme sports into one vibrant ecosystem. We are inspired by brands like Red Bull and Monster—pioneers of energy, courage, and innovation—but with a uniquely African heartbeat.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-8 text-white text-center">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="bold-24 mb-4">Passion</h3>
            <p className="regular-16">
              Everything we do is fueled by genuine love for adventure and excellence
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 text-white text-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="bold-24 mb-4">Innovation</h3>
            <p className="regular-16">
              We pioneer new ways to experience and share Africa's adventures
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white text-center">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="bold-24 mb-4">Community</h3>
            <p className="regular-16">
              Building connections between adventurers, racers, and explorers
            </p>
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="bg-gray-50 py-20">
        <div className="max-container padding-container">
          <div className="text-center mb-16">
            <h2 className="bold-64 mb-4">Our Initiatives</h2>
            <p className="regular-20 text-gray-700 max-w-3xl mx-auto">
              SafariDrift operates across multiple verticals, each designed to push boundaries and create unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIATIVES.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-40 bg-gradient-to-br ${initiative.color} flex items-center justify-center`}>
                  <span className="text-8xl">{initiative.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="bold-24 mb-4">{initiative.title}</h3>
                  <p className="regular-16 text-gray-700 leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-container padding-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="bold-52 mb-6">Our Vision</h2>
            <p className="regular-18 text-gray-700 leading-relaxed mb-6">
              At its core, SafariDrift is not just a company—it's a movement. A platform where passion meets performance, and where Africa's boldest dreams take flight, drive, and drift into reality.
            </p>
            <p className="regular-18 text-gray-700 leading-relaxed mb-6">
              We envision a future where African motorsport, adventure tourism, and extreme sports are celebrated globally. Where technology seamlessly connects explorers to experiences, and where every journey becomes a story worth sharing.
            </p>
            <p className="regular-18 text-gray-700 leading-relaxed">
              From karting tracks in Kampala to mountain peaks in Rwenzori, from charter flights across the continent to digital platforms that make it all accessible—SafariDrift is building the infrastructure for Africa's adventure economy.
            </p>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/images/race_image_10.png"
              alt="SafariDrift Vision"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20 text-white">
        <div className="max-container padding-container">
          <h2 className="bold-52 text-center mb-16">Our Journey So Far</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-yellow-400 text-5xl mb-4">🏁</div>
              <h3 className="bold-24 mb-4">2025 - Lubowa Grand Prix</h3>
              <p className="regular-16 text-gray-300">
                Successfully launched our inaugural karting race with 10 talented racers, marking the beginning of SafariDrift Pro Racing UG.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-green-400 text-5xl mb-4">🚀</div>
              <h3 className="bold-24 mb-4">Building the Future</h3>
              <p className="regular-16 text-gray-300">
                Expanding into multiple verticals including travel tech, aviation services, and adventure expeditions across East Africa.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-blue-400 text-5xl mb-4">👥</div>
              <h3 className="bold-24 mb-4">Growing Community</h3>
              <p className="regular-16 text-gray-300">
                Building a vibrant community of racers, adventurers, and explorers who share our passion for pushing boundaries.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-purple-400 text-5xl mb-4">🌟</div>
              <h3 className="bold-24 mb-4">Next Chapter</h3>
              <p className="regular-16 text-gray-300">
                Preparing for more races, expeditions, and innovative tech solutions that will transform how Africa experiences adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contact */}
      <section className="max-container padding-container py-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 md:p-20 text-center text-white">
          <h2 className="bold-52 mb-4">Get In Touch</h2>
          <p className="regular-20 mb-8 max-w-2xl mx-auto">
            Whether you want to race with us, partner with us, or simply learn more about our initiatives, we'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-2">📞</div>
              <p className="bold-16 mb-1">Co-Founder</p>
              <p className="regular-14">+256 786 493685</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-2">📞</div>
              <p className="bold-16 mb-1">Co-Founder</p>
              <p className="regular-14">+256 700 503508</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-2">📧</div>
              <p className="bold-16 mb-1">Email</p>
              <p className="regular-14">safaridrifting@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/racing">
              <button className="btn_white">Join Pro Racing</button>
            </Link>
            <Link href="/gallery">
              <button className="btn_white_text">View Gallery</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}