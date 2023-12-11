export default function ProductsPage({ params }: any) {
  const { lang } = params

  console.log(lang)

  return <div>{lang}</div>
}
