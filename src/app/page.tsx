import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function TrophyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 15.75A6.75 6.75 0 0 0 18.75 9V3.75H5.25V9A6.75 6.75 0 0 0 12 15.75Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M8.25 20.25h7.5M12 15.75v4.5M5.25 5.25H3a1.5 1.5 0 0 0-1.5 1.5v.75A4.5 4.5 0 0 0 5.25 12M18.75 5.25H21a1.5 1.5 0 0 1 1.5 1.5v.75A4.5 4.5 0 0 1 18.75 12"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

const workRoles = [
  {
    company: 'KeLevel',
    title: 'Founder & Builder',
    period: '2026 – Present',
    href: '/professional/kelevel',
  },
  {
    company: 'Cumplo',
    title: 'Data Analyst | Analytics Engineer',
    period: 'Aug 2024 – Jan 2026',
    href: '/professional/cumplo',
  },
  {
    company: 'Deltamed',
    title: 'Data Analyst | Product Analyst',
    period: 'Dec 2023 – Aug 2024',
    href: '/professional/deltamed',
  },
]

const athleticsHighlights = [
  { label: 'National Record', value: '49.62', sub: '400m Hurdles' },
  { label: 'Best World Ranking', value: 'Top 17', sub: "Men's 400mH" },
  { label: 'National Titles', value: '8×', sub: 'Chilean Champion' },
  { label: 'Career', value: '2010–2024', sub: 'International competitor' },
]

function ProfessionalSummary() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workRoles.map((role) => (
          <li key={role.company}>
            <Link href={role.href} className="group flex flex-col gap-0.5">
              <span className="text-sm font-medium text-zinc-900 transition group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400">
                {role.company}
              </span>
              <span className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>{role.title}</span>
                <span>{role.period}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <Button href="/professional" variant="secondary" className="group mt-6 w-full">
        View all experience
      </Button>
    </div>
  )
}

function AthleticsSummary() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <TrophyIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Athletics</span>
      </h2>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        Chilean national team captain, 400m hurdles national record holder and
        +10x international medallist.
      </p>
      <dl className="mt-6 grid grid-cols-2 gap-4">
        {athleticsHighlights.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5">
            <dt className="text-xs text-zinc-500 dark:text-zinc-400">
              {item.label}
            </dt>
            <dd className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              {item.value}
            </dd>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              {item.sub}
            </dd>
          </div>
        ))}
      </dl>
      <Button href="/athletics" variant="secondary" className="group mt-6 w-full">
        View athletic career
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Data ninja, builder and professional athlete.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Alf, a business engineer and record-holding athlete based
            between Barcelona and Santiago. I&apos;m building Kelevel, a
            platform that uses sports data to give athletes visibility and help
            them fund their athletic careers.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/sepulvedalf/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/alfsepulveda"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/alfsepulveda"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
          <ProfessionalSummary />
          <AthleticsSummary />
        </div>
      </Container>
    </>
  )
}
