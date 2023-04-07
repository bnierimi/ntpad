import Container from '@/components/Main/Container'
import Aside from '@/components/Aside/Main'
import ListOfSideBtns from '@/components/Aside/ListOfSideBtns'

export default function Page(){
	return (
    <>
      <Aside>
        <ListOfSideBtns/>
      </Aside>
      <main className="w-full md:w-9/12 h-full md:pr-1.5 md:py-2">
        <div className='flex h-full w-full space-x-1.5'>
          <Container>
            Help
          </Container>
        </div>
      </main>
    </>
	)
}