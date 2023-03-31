// import "@/public/extlib/simpleMDE/dist/simplemde.min.css"
// import "@/public/extlib/simpleMDE/dist/simplemde.min.js"

export default function Layout({children}: any) {
  return (
    <div className="w-full h-full flex flex-col">
      {children}
    </div>
  )
}
