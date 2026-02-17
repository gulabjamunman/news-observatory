export default function ArticleCard({ article }) {

  const ideology = article.ai_framing_direction ?? 0
  const intensity = article.ai_language_intensity ?? 0
  const tribal = article.ai_us_vs_them_score ?? 0

  const ideologyPercent = ((ideology + 1) / 2) * 100

  return (

    <div className="border p-4 rounded-lg hover:bg-gray-50">

      <h2 className="text-lg font-semibold">
        {article.headline}
      </h2>

      <p className="text-sm text-gray-500">
        {article.publisher_name}
      </p>

      <div className="mt-2">

        <div className="text-xs">Political framing</div>

        <div className="w-full bg-gray-200 h-2 rounded">

          <div
            className="bg-red-500 h-2 rounded"
            style={{ width: ideologyPercent + "%" }}
          />

        </div>

      </div>

      <div className="mt-2">

        Emotional intensity:
        {(intensity*100).toFixed(0)}%

      </div>

      <div>

        Tribal activation:
        {(tribal*100).toFixed(0)}%

      </div>

    </div>

  )
}
