import { lazy, Suspense } from 'react';
import { FadeLoader } from 'react-spinners';
const ExprienceCarouselItemLazy = lazy(() => import('./ExperienceCarouselItemRaw'));

type props = {
    title: React.ReactNode,
    period?: string,
    imgSrc: string[],
    imgAlt: string[],
    imgRef?: null | (string|null)[],
    header?: string | React.ReactNode,
    putImgLeft?: boolean,
    children: React.ReactNode
}
export default function ExperienceCarouselItem({
    title, period="", imgSrc, imgAlt, imgRef=null, header="", putImgLeft=true, children
}: props) {
    return <Suspense fallback={<div> <FadeLoader/> Loading...</div>}>
        <ExprienceCarouselItemLazy
            title={title}
            period={period}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            imgRef={imgRef}
            header={header}
            putImgLeft={putImgLeft}
            children={children}
        />
    </Suspense>
}