"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

type Article = {
  id: string
  headline: string
  publisher_name: string
  ai_framing_direction: number
  ai_language_intensity: number
  ai_us_vs_them_score: number
}

export default function Home() {

  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {

    async function loadArticles() {

      const { data, error } = await supabase
        .from("processed_articles")
        .select("*")
        .order("publication_datetime", { ascending: false })
        .limit(50)

      if (!error && data) {
        setArticles(data)
      }

    }

    loadArticles()

  }, [])

  return (

    <main className="p-8 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        News Influence Observatory
      </h1>

      {articles.map(article => {

        const ideologyPercent =
          ((article.ai_framing_direction + 1) / 2) * 100

        return (

          <div
            key={article.id}
            className="border p-4 mb-4 rounded-lg"
          >

            <h2 className="text-xl font-semibold">
              {article.headline}
            </h2>

            <p className="text-sm text-gray-500">
              {article.publisher_name}
            </p>

            <div className="mt-3">

              <div className="text-xs mb-1">
                Political framing
              </div>

              <div className="w-full h-2 bg-gray-200 rounded">

                <div
                  className="bg-red-500 h-2 rounded"
                  style={{ width: ideologyPercent + "%" }}
                />

              </div>

            </div>

            <div className="mt-2 text-sm">
              Emotional intensity:
              {(article.ai_language_intensity * 100).toFixed(0)}%
            </div>

            <div className="text-sm">
              Tribal activation:
              {(article.ai_us_vs_them_score * 100).toFixed(0)}%
            </div>

          </div>

        )

      })}

    </main>

  )

}
