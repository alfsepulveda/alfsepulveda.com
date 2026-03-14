import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const roles = [
  {
    company: 'KeLevel',
    title: 'Founder & Builder',
    period: '2024 – Present',
    description:
      'Building a platform that uses sports performance data to give athletes visibility and help them fund their athletic careers.',
    slug: 'kelevel',
  },
  {
    company: 'Cumplo',
    title: 'Data Analyst | Analytics Engineer',
    period: 'Aug 2024 – Jan 2026',
    description:
      'Developed Medallion Data Lake architecture, automated ETL pipelines, built legal automation tools, and managed corporate CRM.',
    slug: 'cumplo',
  },
  {
    company: 'Deltamed',
    title: 'Data Analyst | Product Analyst',
    period: 'Dec 2023 – Aug 2024',
    description:
      'Enhanced ERP with predictive alerting, built automated sales dashboards, and analyzed competitive landscapes for new products.',
    slug: 'deltamed',
  },
]

export const metadata: Metadata = {
  title: 'Professional Experience',
  description:
    'My professional career in data engineering, analytics, and product building.',
}

export default function Professional() {
  return (
    <SimpleLayout
      title="Building data-driven systems and scalable solutions."
      intro="Business engineer from Universidad de Chile. My professional experience spans data engineering, analytics, and product building — always with a high-performance mindset."
    >
      <div className="flex flex-col gap-12">
        {roles.map((role) => (
          <Card as="article" key={role.slug}>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {role.period}
              </p>
              <Card.Title href={`/professional/${role.slug}`}>
                {role.company}
              </Card.Title>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {role.title}
              </p>
            </div>
            <Card.Description>{role.description}</Card.Description>
            <Card.Cta>View details</Card.Cta>
          </Card>
        ))}
      </div>
    </SimpleLayout>
  )
}
