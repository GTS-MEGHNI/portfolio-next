import { ArrowUpRight } from 'lucide-react'
import { packages } from '@/data/projects'
import { Unit, UnitHeader } from '@/components/ui/Unit'

/** Shorter lines for the port legend; full descriptions stay in the data file. */
const PORT_NOTE: Record<string, string> = {
  'nestjs-satim': 'CIB and Edahabia card payments through Algeria’s SATIM gateway, for NestJS.',
  'laravel-satim': 'The same SATIM payment lifecycle behind a Laravel-native API.',
  'laravel-essentials-kit': 'API boilerplate generated into your app as code you own.',
  'laravel-captcha': 'Image CAPTCHA generation and validation, no third-party service.',
  'laravel-captcha-js': 'Client for laravel-captcha: image display and proof-of-work solving.',
}

const port = (i: number): string => `P${String(i + 1).padStart(2, '0')}`

export function Packages() {
  return (
    <Unit id="open-source" labelledBy="open-source-heading">
      <UnitHeader
        id="open-source"
        headingId="open-source-heading"
        title="Open source"
        summary="Open-source packages Mohamed maintains, including Laravel and NestJS integrations for Algeria’s national SATIM card gateway."
      />

      {/* The patch panel: one strip of numbered ports, silkscreen names above each socket. */}
      <div aria-hidden="true" className="rounded-[2px] bg-rail px-3 pt-3 pb-4 sm:px-5">
        <div className="grid grid-cols-5 gap-2 sm:gap-4">
          {packages.map((pkg, i) => (
            <div key={pkg.title} className="flex flex-col items-center gap-2">
              <span className="hidden w-full truncate text-center font-mono text-[10px] text-rail-text lg:block">
                {pkg.title}
              </span>
              <span className="grid h-11 w-full max-w-24 place-items-end rounded-[2px] bg-[#15191c] p-1.5 ring-1 ring-rail-raised">
                <span className="h-2 w-full rounded-[1px] bg-role-oss" />
              </span>
              <span className="font-mono text-[11px] text-white tabular">{port(i)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Port legend: what is patched into each socket. */}
      <ol className="m-0 mt-2 list-none p-0">
        {packages.map((pkg, i) => (
          <li key={pkg.title} className="border-b border-seam">
            <a
              href={pkg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[2.5rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-4 gap-y-1 py-4 transition-colors duration-150 hover:bg-plate-sunk md:grid-cols-[3rem_16rem_minmax(0,1fr)_10rem_1.25rem]"
            >
              <span className="font-mono text-xs text-muted tabular">{port(i)}</span>
              <span className="font-mono text-[14px] font-medium [overflow-wrap:anywhere] text-text group-hover:text-role-oss">
                {pkg.title}
              </span>
              <span className="col-start-2 leading-snug text-muted md:col-start-auto">
                {PORT_NOTE[pkg.title] ?? pkg.description}
              </span>
              <span className="col-start-2 text-[15px] text-muted md:col-start-auto">
                {pkg.stack.join(' · ')}
              </span>
              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="col-start-3 row-start-1 self-center text-edge group-hover:text-role-oss md:col-start-auto md:row-start-auto"
              />
              <span className="sr-only">(GitHub, opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ol>
    </Unit>
  )
}
