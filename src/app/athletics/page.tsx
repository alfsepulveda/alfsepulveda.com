import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

function ExternalLinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const honours = [
  {
    title: 'National Record — 400m Hurdles',
    detail: '49.62 · Cochabamba, BOL · 7 Jun 2018',
  },
  {
    title: 'Gold Medal — Ibero-American Championships',
    detail: '400m Hurdles',
  },
  {
    title: 'Silver Medal — South American Championships',
    detail: '400m Hurdles',
  },
  {
    title: 'Bronze Medal (×2) — South American Championships',
    detail: '400m Hurdles',
  },
  {
    title: 'Top 17 — World Ranking',
    detail: 'Men\'s 400m Hurdles',
  },
  {
    title: '8× Chilean National Champion',
    detail: '400m Hurdles · 2010–2024',
  },
  {
    title: 'Chilean National Team Captain',
    detail: '400m Hurdles & 4×400m Relay',
  },
]

const personalBests = [
  { event: '200m', mark: '21.92', date: '13 May 2018', venue: 'Cochabamba, BOL' },
  { event: '400m', mark: '46.44', date: '21 Jul 2018', venue: 'São Paulo, BRA' },
  { event: '800m', mark: '1:53.53', date: '21 Feb 2016', venue: 'Montevideo, URU' },
  { event: '400m Hurdles', mark: '49.62 NR', date: '7 Jun 2018', venue: 'Cochabamba, BOL' },
  { event: '4×400m Relay', mark: '3:07.56', date: '16 May 2016', venue: 'Rio de Janeiro, BRA' },
]

const season2025 = [
  { event: '400m', mark: '48.09', date: '29 Mar 2025' },
  { event: '400m Hurdles', mark: '52.70', date: '30 Mar 2025' },
]

export const metadata: Metadata = {
  title: 'Athletics',
  description:
    'Professional athlete, national record holder in 400m hurdles, and 8-time Chilean national champion.',
}

export default function Athletics() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          400m Hurdles. National record holder. 14 years competing internationally.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I competed professionally from 2010 to 2024, representing Chile as
          national team captain in the 400m hurdles and 4×400m relay. Top 17 in
          the world, 8-time national champion, and holder of the Chilean national
          record.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="https://worldathletics.org/athletes/chile/alfredo-sepulveda-14438212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            World Athletics Profile
          </Link>
          <Link
            href="https://en.wikipedia.org/wiki/Alfredo_Sep%C3%BAlveda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Wikipedia
          </Link>
        </div>
      </header>

      <div className="mt-16 sm:mt-20 space-y-16">

        {/* Honours */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            Career Highlights
          </h2>
          <ul className="mt-6 space-y-4">
            {honours.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-0.5 border-l-2 border-teal-500 pl-4"
              >
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  {item.title}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Personal Bests */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            Personal Bests
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-700/40">
                  <th className="pb-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                    Event
                  </th>
                  <th className="pb-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                    Mark
                  </th>
                  <th className="pb-3 text-left font-semibold text-zinc-600 dark:text-zinc-400 hidden sm:table-cell">
                    Date
                  </th>
                  <th className="pb-3 text-left font-semibold text-zinc-600 dark:text-zinc-400 hidden sm:table-cell">
                    Venue
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700/40">
                {personalBests.map((row) => (
                  <tr key={row.event}>
                    <td className="py-3 font-medium text-zinc-800 dark:text-zinc-100">
                      {row.event}
                    </td>
                    <td className="py-3 font-mono text-teal-600 dark:text-teal-400">
                      {row.mark}
                    </td>
                    <td className="py-3 text-zinc-500 dark:text-zinc-400 hidden sm:table-cell">
                      {row.date}
                    </td>
                    <td className="py-3 text-zinc-500 dark:text-zinc-400 hidden sm:table-cell">
                      {row.venue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2025 Season */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            2025 Season Bests
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-700/40">
                  <th className="pb-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                    Event
                  </th>
                  <th className="pb-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                    Mark
                  </th>
                  <th className="pb-3 text-left font-semibold text-zinc-600 dark:text-zinc-400 hidden sm:table-cell">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700/40">
                {season2025.map((row) => (
                  <tr key={row.event}>
                    <td className="py-3 font-medium text-zinc-800 dark:text-zinc-100">
                      {row.event}
                    </td>
                    <td className="py-3 font-mono text-teal-600 dark:text-teal-400">
                      {row.mark}
                    </td>
                    <td className="py-3 text-zinc-500 dark:text-zinc-400 hidden sm:table-cell">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </Container>
  )
}
