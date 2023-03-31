import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Avatar from "boring-avatars";

export default function EachNote({ url, title }: any) {
	return (
		<div className="bg-red-">
      <Link href={`/${url}`}>
        <div className="p-1 rounded-lg border border-gray-400 hover:bg-gray-200 flex items-center space-x-2">
          <Avatar
            size={35}
            name={url}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <p>{title}</p>
        </div>
      </Link>
    </div>
	)
}