import { Navbar } from '@/components/ui/Navbar'
import { Profile } from '@/components/sections/Profile'
import { History } from '@/components/sections/History'
import { Watchtower } from '@/components/sections/Watchtower'
import { Infrastructure } from '@/components/sections/Infrastructure'
import { Packages } from '@/components/sections/Packages'
import { Shipped } from '@/components/sections/Shipped'
import { Stack } from '@/components/sections/Stack'
import { Contact } from '@/components/sections/Contact'

/** Regenerate daily so the engagement timeline and footer year never go stale. */
export const revalidate = 86400

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-[2px] focus:bg-role-employment focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Profile />
        <History />
        <Watchtower />
        <Infrastructure />
        <Packages />
        <Shipped />
        <Stack />
        <Contact />
      </main>
    </>
  )
}
