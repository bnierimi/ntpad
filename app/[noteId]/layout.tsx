// import "@/public/extlib/simpleMDE/dist/simplemde.min.css"
// import "@/public/extlib/simpleMDE/dist/simplemde.min.js"
import Aside from '@/components/Aside/Main'
import Notes from '../notes'

export default function Layout({children}: any) {
  return (
    <>
      {/* <div className=""> */}
      <div className="w-full h-full">
        {children}
      </div>
    </>
  )
}
