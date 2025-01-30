"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { OrganizeTournamentModal } from "../components/Admin"

function OrganizePageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const openParam = searchParams.get("open")
    console.log("Search Params:", openParam) // Debugging the searchParams
    if (openParam === "true") {
      setIsModalOpen(true)
    }
  }, [searchParams])

  const handleCloseModal = () => {
    setIsModalOpen(false)
    router.push("/") // Redirect back to home page
  }

  return (
    <OrganizeTournamentModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    />
  )
}

export default function OrganizePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrganizePageContent />
    </Suspense>
  )
}
