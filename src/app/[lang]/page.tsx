// import './styles/page.scss'
// import './styles/globals.scss'

// import './styles/page.scss'
// import './styles/globals.scss'

const Page: React.FC<{ params: { lang: string } }> = ({ params }) => {
  return <div>Hello {params.lang}</div>
}

export default Page
