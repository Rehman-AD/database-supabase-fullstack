import { getAnchor, removeAnchor } from './CustomMDX.utils'

const H4 = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h4 id={anchor} className="group flex gap-1 items-center scroll-mt-24">
      {removeAnchor(children)}
      {anchor && (
        <a href={link} className="opacity-0 group-hover:opacity-100 transition">
          #
        </a>
      )}
    </h4>
  )
}
export default H4
