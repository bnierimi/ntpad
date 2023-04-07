import Link from "next/link";

export default function Label({ label }: any) {
  return (
    <Link href={`/l/${label.id}`}>
      <div className="px-2 py-1 rounded bg-gray-200">
        {label.name}
      </div>
    </Link>
  )
}
