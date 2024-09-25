import { Poppins } from 'next/font/google'
import { Raleway } from 'next/font/google'
export const poppins = Poppins({ subsets: ['latin'], weight: "600" })
export const raleway = Raleway({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })