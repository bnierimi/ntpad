import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Avatar from "boring-avatars";

export default function EachNote({ url, title }: any) {
	return (
		<div className="bg-red-">
      <Link href={`/${url}`}>
        <div className="py-1.5 px-2.5 md:rounded rounded-lg border border-gray-400 md:border-transparent hover:bg-gray-300 flex items-center space-x-2">
          <div className="rounded-full overflow-hidden">
            <Avatar
              size={35}
              name={title}
              variant="bauhaus"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          </div>
          <p className="text- font-medium">{title}</p>
        </div>
      </Link>
    </div>
	)
}