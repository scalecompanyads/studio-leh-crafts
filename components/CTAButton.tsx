import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'dark' | 'outline'
  size?: 'md' | 'lg'
  className?: string
}

export default function CTAButton({
  href = '#',
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  const base =
    'btn-shine relative overflow-hidden inline-flex items-center justify-center text-center gap-3 rounded-full font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group'

  const variants = {
    primary:
      'bg-primary text-white shadow-[0_8px_32px_rgba(196,107,75,0.32)] hover:shadow-[0_16px_48px_rgba(196,107,75,0.48)] hover:brightness-105',
    dark: 'bg-dark text-white shadow-[0_8px_32px_rgba(0,0,0,0.28)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.44)] hover:bg-dark-deep',
    outline:
      'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
  }

  const sizes = {
    md: 'px-8 py-4 text-[15px]',
    lg: 'px-12 py-5 text-base',
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  )
}
