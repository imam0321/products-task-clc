"use client"

import { makeStore, store } from "@/lib/store/store"
import { useRef } from "react"
import { Provider } from "react-redux"

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}
