"use client"

import type React from "react"
import { useEffect } from "react"

let hasRetried = false

const ErrorPage: React.FC<{ retry: () => void }> = ({ retry }) => {
  useEffect(() => {
    if (hasRetried) return

    const timer = setTimeout(() => {
      hasRetried = true
      retry()
    }, 3000)

    return () => clearTimeout(timer)
  }, [retry])

  if (hasRetried) {
    return (
      <div>
        <h2>The aisle is closed right now</h2>
        <p>We couldn&apos;t load the movies. Please try again later</p>
      </div>
    )
  }
  return <p>Something went wrong. Trying again...</p>
}

export default ErrorPage
