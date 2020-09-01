import Layout from 'components/Layout'
import { NewsShowTemplate } from 'components/templates/news/ShowTemplate'

export default function NewsShow(/* props: Work */) {
  return (
    <Layout>
      <NewsShowTemplate />
      {/* <NewsShowTemplate {...props} /> */}
    </Layout>
  )
}

// export async function getServerSideProps({ params }: { params: Work }) {
//   const data = await fetchCMSonServer({
//     query: GetWorkDocument,
//     id: params.id,
//   }).then((result) => result.data.work_by_pk)

//   return { props: data }
// }
