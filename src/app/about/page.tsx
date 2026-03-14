import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Alf. I've run in circles professionally for over a decade — 400 meters at a time, over hurdles, across three continents.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;ve run in circles professionally for over a decade. On
            purpose.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              It started when I was a kid, and it started fast. By the time I
              was 17 I had already won the South American U18 championship in
              the 400m hurdles — that peculiar event where you sprint a full lap
              while jumping over ten obstacles placed specifically to ruin your
              day. I figured that if I was willing to do that voluntarily, I
              might as well make a career of it.
            </p>
            <p>
              Over the next decade I did exactly that. I competed internationally
              representing Chile, became national team captain, and chased one
              number obsessively: the national record. I got it — 49.62 seconds,
              set in Cochabamba in 2018. I also reached the top 17 in the world
              ranking and collected 8 national titles along the way, which is
              either impressive or a sign I spent too much time in stadiums.
              Probably both.
            </p>
            <p>
              In parallel — and I use that word loosely, because it was more
              like a slow-motion juggling act — I studied Business Engineering
              at Universidad de Chile. It took longer than the standard plan
              suggests. Competing at the highest level internationally while
              finishing a degree is possible, I can confirm. I just
              wouldn&apos;t recommend it as a time management strategy.
            </p>
            <p>
              The athletic pursuit took me far. I trained with coaches in Chile,
              Uruguay, the Dominican Republic, and most recently in Barcelona,
              where I also discovered that European bureaucracy is its own kind
              of endurance sport.
            </p>
            <p>
              When I started my professional career data, I quickly realized technology could solve
              problems I had lived firsthand as an athlete, invisibility and lack
              of funding. That's why now I&apos;m building KeLevel: software to give athletes
              the visibility and financial tools they deserve. 
              
              Turns out running
              in circles was just research.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/sepulvedalf/"
              icon={InstagramIcon}
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/alfsepulveda"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/alfsepulveda"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:alfsepulve@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              alfsepulve@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
