"use client"

import { useEffect, useState } from "react"
import { buildWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp-link"

export function useWhatsAppLink(message?: string) {
  const [whatsAppLink, setWhatsAppLink] = useState(WHATSAPP_NUMBER ? buildWhatsAppLink(message) : "")

  useEffect(() => {
    setWhatsAppLink(buildWhatsAppLink(message))
  }, [message])

  return whatsAppLink
}
