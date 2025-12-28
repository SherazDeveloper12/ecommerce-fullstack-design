import React from 'react'
import { Star } from 'lucide-react'
export default function Stars(props) {
  return (
   
        <span className='flex '>
                                        {Array.from({ length: props.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                fill='orange'
                                                stroke='0'
                                            />
                                        ))}
                                        {Array.from({ length: 5 - props.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                fill='#dee2e7'
                                                stroke='0'
                                            />
                                        ))}
                                    </span>
   
  )
}
