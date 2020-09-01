import Layout from 'components/Layout'
import { WorksShowTemplate } from 'components/templates/works/ShowTemplate'

export default function WorksShow(/* props: Work */) {
  return (
    <Layout>
      <WorksShowTemplate />
      {/* <WorksShowTemplate {...props} /> */}
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
