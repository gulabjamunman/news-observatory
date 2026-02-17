"use client"

import Plot from "react-plotly.js"

export default function IdeologyMap({ articles }) {

  return (

    <Plot

      data={[{
        x: articles.map(a => a.ai_framing_direction),
        y: articles.map(a => a.ai_language_intensity),
        text: articles.map(a => a.headline),
        mode: "markers",

        marker: {
          size: articles.map(a => 10 + a.ai_us_vs_them_score * 20),
          color: articles.map(a => a.ai_framing_direction),
          colorscale: "RdBu"
        }

      }]}

      layout={{
        title: "Ideological Landscape",
        height: 500
      }}

    />

  )
}
