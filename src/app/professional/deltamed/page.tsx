import { type Metadata } from 'next'

import { RoleLayout } from '@/components/RoleLayout'

export const metadata: Metadata = {
  title: 'Deltamed – Data Analyst | Product Analyst',
}

export default function Deltamed() {
  return (
    <RoleLayout
      company="Deltamed"
      title="Data Analyst | Product Analyst"
      period="Dec 2023 – Aug 2024"
    >
      <ul>
        <li>
          Enhanced the ERP with a predictive alerting system, preventing
          stock-outs through demand forecasting and import lag estimation.
          Managed inventory tracking for over 2,000 SKUs.
        </li>
        <li>
          Built automated sales performance dashboards to streamline commercial
          decision-making across the organization.
        </li>
        <li>
          Analyzed competitive landscapes, market sizing, and legal frameworks
          for new products and services.
        </li>
      </ul>
    </RoleLayout>
  )
}
