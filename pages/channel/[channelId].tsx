import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'

export default function ChannelReadPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { channelId } = router.query

  return (
    <div>
      <div>ChannelReadPage</div>
      <div>{channelId}</div>
      <div>채널 OG-TAG-DATA : {data}</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // 서버사이드에서 채널 관련 OG-TAG
  // const data = await axios();
  return {
    props: {
      data: '채널 OG-TAG 데이터',
    },
  }
}
