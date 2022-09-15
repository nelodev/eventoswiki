import type { FC, PropsWithChildren } from 'react'

type ButtonVariant = 'default' | 'outline' | 'text'

type ButtonProps = {
  type?: 'button' | 'link'
  href?: string
  onClick?(): void
  variant?: ButtonVariant
  className?: string
}

const BUTTON_DEFAULT_CLASSES =
  'inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'

const BUTTON_VARIANT_CLASSES: { [variant in ButtonVariant]: string } = {
  outline: 'bg-transparent border-primary text-primary hover:bg-gray-100',
  text: 'bg-transparent border-transparent text-primary hover:bg-gray-50',
  default: '',
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    type = 'button',
    variant = 'default',
    onClick,
    href,
    className = '',
    children,
  } = props

  return type === 'link' ? (
    <a
      href={href}
      type='button'
      className={`${BUTTON_DEFAULT_CLASSES} ${BUTTON_VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      className={`${BUTTON_DEFAULT_CLASSES} ${BUTTON_VARIANT_CLASSES[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}