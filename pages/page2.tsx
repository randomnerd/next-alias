import type { NextPage } from 'next'
import Link from 'next/link'

const Page2: NextPage = () => {
    return (
        <div style={{ backgroundColor: 'green', height: '100%' }}>
            <Link href="/">Back</Link>
        </div>
    )
}
export default Page2
