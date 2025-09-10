import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero'
import ToolShowCase from '@/components/ToolShowCase'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='px-9'>
      <Hero/>
      <ToolShowCase/>
    </div>
    
  )
}
