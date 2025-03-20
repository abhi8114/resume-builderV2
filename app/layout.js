
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Resume Builder",
  description: "Build your resume with AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
         
      >
        <Header />

        {children}
        
        <Footer />
      </body>
   

    </html>
    </ClerkProvider>
  );
}
