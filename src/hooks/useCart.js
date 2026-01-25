import React from 'react'

export default function useCart() {
    const [isOpen, setIsOpen] = React.useState(true);
  return {
    isOpen,
    setIsOpen,
  }
}
