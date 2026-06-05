import Hero from '@/components/sections/Hero'
import Pain from '@/components/sections/Pain'
import NotNeeded from '@/components/sections/NotNeeded'
import Mechanism from '@/components/sections/Mechanism'
import Curriculum from '@/components/sections/Curriculum'
import About from '@/components/sections/About'
import Equipment from '@/components/sections/Equipment'
import Transformation from '@/components/sections/Transformation'
import Bonus from '@/components/sections/Bonus'
import ForWhom from '@/components/sections/ForWhom'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Pain />
      <NotNeeded />
      <Mechanism />
      <Curriculum />
      <About />
      <Equipment />
      <Transformation />
      <Bonus />
      <ForWhom />
      <CTAFinal />
      <FAQ />
      <Footer />
    </main>
  )
}
