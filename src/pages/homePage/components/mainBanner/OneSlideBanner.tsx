import Image from "next/image";
import {FC} from "react";
import Link from "next/link";

type OneSLideProps = {
    imgSrc: string;
    linkHref: string;
    linkTitle: string;
};

export const OneSlideBanner: FC<OneSLideProps> = ({imgSrc, linkHref, linkTitle}) => {
    return (
        <div>
            <Image
                src={imgSrc}
                alt="second slide"
                fill
                style={{
                    objectFit: "cover",
                    display: "block",
                }}
            />
            <Link href={linkHref}>{linkTitle}</Link>
        </div>
    )
}

