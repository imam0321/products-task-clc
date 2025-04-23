"use client"

import { add } from "@/lib/store/features/cart/cartSlice"
import { makeStore, store } from "@/lib/store/store"
import { useRef } from "react"
import { Provider } from "react-redux"

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)
  
  if (!storeRef.current) {
    storeRef.current = makeStore()
    // storeRef.current.dispatch(add(cartItems))
  }

  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}
