"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

import ArticleCard from "../components/ArticleCard"
import IdeologyMap from "../components/IdeologyMap"
import SystemStats from "../components/SystemStats"

export default function Home() {

  const [articles, setArticles] = useState([])

  useEffect(()=>{

    async function load(){

      const { data } = await supabase
        .from("processed_articles")
        .select("*")
        .limit(200)

      setArticles(data || [])

    }

    load()

  },[])

  return (

    <main className="p-8 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        News Influence Observatory
      </h1>

      <SystemStats articles={articles} />

      <IdeologyMap articles={articles} />

      <div className="mt-6 space-y-4">

        {articles.map(article => (

          <ArticleCard
            key={article.id}
            article={article}
          />

        ))}

      </div>

    </main>

  )
}
