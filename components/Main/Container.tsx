export default function Container({ children }: any) {
  return (
    <div className="bg-gray-100 w-full h-full md:rounded-lg p-4 ">
      {children}
    </div>
  )
}
