// import { useEffect, useState } from 'react'

// export const useMedia = () => {
//   const [isDesktop, setIsDesktop] = useState(false)
//   const [isTablet, setIsTablet] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkDesktop = window.matchMedia('(min-width: 1280px)').matches
//     const checkTablet = window.matchMedia(
//       '(min-width: 768px) and (max-width: 1279px)'
//     ).matches
//     const checkMobile = window.matchMedia('(max-width: 767px)').matches

//     setIsDesktop(checkDesktop)
//     setIsTablet(checkTablet)
//     setIsMobile(checkMobile)

//     const handleResize = () => {
//       setIsDesktop(window.matchMedia('(min-width: 1280px)').matches)
//       setIsTablet(
//         window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
//       )
//       setIsMobile(window.matchMedia('(max-width: 767px)').matches)
//     }

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return { isDesktop, isTablet, isMobile }
// }
