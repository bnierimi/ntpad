import Container from '@/components/Main/Container'
import Image from 'next/image'
import Notes from './notes'


export default function Home() {
  return (
    <div className='flex h-full w-full space-x-1.5'>
      <Container>
        <Notes/>
      </Container>
    </div>
  )
}
