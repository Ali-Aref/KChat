import React from 'react'

export default function PrivateLayout({
	children,
}: {
	children: React.ReactNode
}) {
  return (
    <>
			<nav className='p-2 mt-4 flex flex-row w-[95%] justify-between'>
				<ul className=''>
					<li>
						<a href="/private/dashboard">Dashboard</a>
					</li>
				</ul>
				<ul className='flex flex-row gap-5'>
					<li>
						<a href="/private/dashboard">Todos</a>
					</li>
					<li>
						<a href="/private/dashboard">Users</a>
					</li>
					<li>
						<a href="/private/dashboard">Settings</a>
					</li>
					<li>
						<a href="/private/dashboard">Logout</a>
					</li>
				</ul>
			</nav>
			{children}
		</>
  )
}

