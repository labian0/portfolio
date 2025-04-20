import React from "react"

export type RetexModel = {
    name: string
    description: string
    logoUrl: string
    imageUrl?: string
    paragraph: React.ReactNode
    badges: React.ReactNode[]
    websiteUrl?: string
}