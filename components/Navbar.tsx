import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-3 sm:py-4 md:py-5 bg-white/95 backdrop-blur-md sticky top-0 shadow-sm">
      <Link href="/" className="transition-transform hover:scale-105">
        <Image 
          src="/logo-white.svg" 
          alt="SafariDrift" 
          width={180} 
          height={180}
          className="w-32 sm:w-48 md:w-60 lg:w-72 h-auto"
        />
      </Link>

      <ul className="hidden h-full gap-4 md:gap-6 lg:gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-uganda-red relative group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-uganda-yellow transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Join Us"
          icon="/user.svg"
          variant="btn_black"
        />
      </div>

      <Image 
        src="/menu.svg"
        alt="menu"
        width={28}
        height={28}
        className="inline-block cursor-pointer lg:hidden transition-transform hover:scale-110 w-7 h-7"
      />
    </nav>
  )
}

export default Navbar


// import { NAV_LINKS } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import Button from "./Button"

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5 bg-white/80 backdrop-blur-md sticky top-0 shadow-sm">
//       <Link href="/" className="transition-transform hover:scale-105">
//         <Image src="/logo-white.svg" alt="SafariDrift" width={300} height={300} />
//       </Link>

//       <ul className="hidden h-full gap-8 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <Link 
//             href={link.href} 
//             key={link.key} 
//             className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 relative group"
//           >
//             {link.label}
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-50 transition-all group-hover:w-full"></span>
//           </Link>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button 
//           type="button"
//           title="Join Us"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         />
//       </div>

//       <Image 
//         src="/menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden transition-transform hover:scale-110"
//       />
//     </nav>
//   )
// }

// export default Navbar