import './ControlBar.scss'

export const ControlBar = () => {
  return (
    <section className="header__control-bar control-bar">
      <article className="control-bar__left">
        <p className="control-bar__FAQ">FAQ</p>
        <p className="control-bar__help">HELP</p>
      </article>
      <article className="control-bar__center">More</article>
      <article className="control-bar__right">
        <p className="control-bar__previous">Previous</p>
        <p className="control-bar__next">Next</p>
      </article>
    </section>
  )
}
