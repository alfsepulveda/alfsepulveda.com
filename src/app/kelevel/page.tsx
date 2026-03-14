import { type Metadata } from 'next'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'KeLevel',
  description:
    'A platform that uses sports performance data to give athletes visibility and help them fund their athletic careers.',
}

export default function KeLevel() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          KeLevel
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A platform that uses sports performance data to give athletes
          visibility and help them fund their athletic careers. Built from the
          perspective of a national record holder who knows firsthand what
          athletes need to grow professionally and financially.
        </p>
      </div>
      <p className="mt-24 text-7xl font-bold tracking-tight text-zinc-200 sm:text-8xl dark:text-zinc-700">
        soon...
      </p>
    </Container>
  )
}
