import React, { useState } from 'react'

export default function useProduct() {
    const [quantity, setQuantity] = useState(1);
  return {
    quantity,
    setQuantity,
  }
}
