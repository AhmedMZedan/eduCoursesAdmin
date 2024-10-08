import { useEffect, useRef } from 'react'

export function useClickOutSideModel(handler) {
  const ref = useRef()

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler()
        }
      }

      document.addEventListener('click', handleClick, true)

      return function () {
        document.removeEventListener('click', handleClick, true)
      }
    },
    [handler],
  )

  return ref
}
