import { lazy, Suspense } from 'react';
import { FadeLoader } from 'react-spinners';
const ExprienceItemLazy = lazy(() => import('./ExperienceItemRaw'));

type props = {
    title: React.ReactNode,
    period?: string,
    imgSrc: string,
    imgAlt: string,
    imgRef?: string,
    putImgLeft?: boolean,
    header?: string | React.ReactNode,
    children: React.ReactNode
}
export default function ExperienceItem({
    title, period="", imgSrc, imgAlt, imgRef="", putImgLeft=true, header="", children
}: props) {
    return <Suspense fallback={<div> <FadeLoader/> Loading...</div>}>
        <ExprienceItemLazy
            title={title}
            period={period}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            imgRef={imgRef}
            putImgLeft={putImgLeft}
            header={header}
            children={children}
        />
    </Suspense>
}