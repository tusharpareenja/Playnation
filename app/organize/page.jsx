"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { OrganizeTournamentModal } from "../components/Admin"

export default function OrganizePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get("open") === "true") {
      setIsModalOpen(true)
    }
  }, [searchParams])

  const handleCloseModal = () => {
    setIsModalOpen(false)
    router.push("/") // Redirect back to home page
  }

  return <OrganizeTournamentModal isOpen={isModalOpen} onClose={handleCloseModal} />
}