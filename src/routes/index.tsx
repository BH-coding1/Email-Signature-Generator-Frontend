import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero'
import ToolShowCase from '@/components/ToolShowCase'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
    <div className='px-9'>
      <Hero/>
      <ToolShowCase/>
      <FeaturesSection/>
      <PricingSection/>
      
    </div>
    <Footer/>
    </>
  )
}
