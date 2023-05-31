'use client';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

export default function SearchBar() {
	const [val, setVal] = useState<string>('');

	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setVal(e.target.value);

		if (e.target.value.length > 1) {
			router.push('?search=' + val);
         return;
		}

      router.push('');
	};

	return (
		<div className="w-full max-w-lg ml-auto">
			<input
				value={val}
				onChange={handleChange}
				className="h-12 px-4 w-full bg-gray-200 rounded-md outline-none"
				type="text"
				name=""
				id=""
				placeholder="Search...."
			/>
		</div>
	);
}
