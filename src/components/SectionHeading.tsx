interface SectionHeadingProps {
  index: string
  title: string
  jap: string
}

export function SectionHeading({ index, title, jap }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        <div className="index">{index}</div>
        <h2>{title}</h2>
      </div>
      <div className="jap" aria-hidden="true">
        {jap}
      </div>
    </div>
  )
}
