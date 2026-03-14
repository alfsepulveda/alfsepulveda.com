import { type Metadata } from 'next'

import { RoleLayout } from '@/components/RoleLayout'

export const metadata: Metadata = {
  title: 'KeLevel – Founder & Builder',
}

export default function KeLevel() {
  return (
    <RoleLayout
      company="KeLevel"
      title="Founder & Builder"
      period="2024 – Present"
    >
      <p>
        KeLevel is a platform that uses sports performance data to give athletes
        visibility and help them fund their athletic careers. Built with a
        high-performance mindset, bridging the gap between athletic achievement
        and the tools athletes need to grow professionally and financially.
      </p>
      <ul>
        <li>
          Designing and building the full-stack platform using Next.js, React,
          and modern data infrastructure.
        </li>
        <li>
          Developing systems to collect, process, and display athlete
          performance data in meaningful ways.
        </li>
        <li>
          Creating funding mechanisms that connect athletes with sponsors and
          supporters based on verified performance records.
        </li>
        <li>
          Leveraging personal experience as a national record holder and
          international competitor to shape product decisions.
        </li>
      </ul>
    </RoleLayout>
  )
}
