import { type Metadata } from 'next'

import { RoleLayout } from '@/components/RoleLayout'

export const metadata: Metadata = {
  title: 'Cumplo – Data Analyst | Analytics Engineer',
}

export default function Cumplo() {
  return (
    <RoleLayout
      company="Cumplo"
      title="Data Analyst | Analytics Engineer"
      period="Aug 2024 – Jan 2026"
    >
      <ul>
        <li>
          Developed and maintained layers of the company&apos;s new Medallion
          Data Lake architecture. Automated AWS S3 backups for analytical
          queries and multi-channel automated report distribution systems and
          ETL. Headed the migration from legacy reports to the new Data Lake
          architecture.
        </li>
        <li>
          Engineered a desktop application using Python for legal automation,
          eliminating 100% of manual contract generation for the{' '}
          <em>Bono Serviu</em> product.
        </li>
        <li>
          Designed and deployed multiple web scrapers to automate the collection
          of specific operational data for financial products, and their ETL
          into the Data Lake.
        </li>
        <li>
          Developed and deployed an automated SSO system for QuickSight,
          automating role-based access control and asset provisioning.
        </li>
        <li>
          Assumed full administration of the corporate CRM, optimizing data
          workflows and lead management workflows.
        </li>
      </ul>
    </RoleLayout>
  )
}
