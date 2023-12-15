import { TextDecorator } from '../../TextDecorator/TextDecorator'

export const HelpNavbar = () => {
  return (
    <>
      <h4 className="menu__title">
        HOW CAN WE <TextDecorator>Help</TextDecorator> YOU?
      </h4>

      <section className="menu__body-text">
        <p className="menu__text">
          Welcome to our help center. Our goal is to make the process of getting
          acquainted and purchase as easy and pleasant as possible. Need help
          with your KAT VR loco product? Many product questions can be resolved
          by reviewing our Product Support FAQs.
        </p>
        <p>
          Please also feel free to Contact Us directly should you need anything
          further. We’re happy to help.
        </p>
      </section>

      <section className="menu__support">
        <article className="menu__support-link">Instruction manual</article>
        <article className="menu__support-link">
          Where to go for a warranty
        </article>
        <article className="menu__support-link">Service Policy</article>
      </section>

      <section className="menu__contacts">
        <article className="menu__contact">+86-0571-86105373</article>
        <article className="menu__contact">global@katvr.com</article>
        <article className="menu__contact">overseas@katvr.com</article>
      </section>
    </>
  )
}
