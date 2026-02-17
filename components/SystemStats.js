export default function SystemStats({ articles }) {

  if (!articles.length) return null

  const avgIdeology =
    articles.reduce((s,a)=>s+a.ai_framing_direction,0)/articles.length

  const avgEmotion =
    articles.reduce((s,a)=>s+a.ai_language_intensity,0)/articles.length

  const avgTribal =
    articles.reduce((s,a)=>s+a.ai_us_vs_them_score,0)/articles.length

  return (

    <div className="grid grid-cols-3 gap-4 mb-6">

      <Stat label="Ideology" value={avgIdeology.toFixed(2)} />

      <Stat label="Emotion" value={(avgEmotion*100).toFixed(0)+"%"} />

      <Stat label="Tribal" value={(avgTribal*100).toFixed(0)+"%"} />

    </div>

  )
}

function Stat({ label, value }) {

  return (

    <div className="border p-4 rounded">

      <div className="text-sm text-gray-500">
        {label}
      </div>

      <div className="text-xl font-bold">
        {value}
      </div>

    </div>

  )
}
