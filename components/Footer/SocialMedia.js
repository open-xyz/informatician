import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import Link from "next/link";

export default function SocialMedia() {
    return (
        <div className="flex mt-0 space-x-6 sm:justify-center sm:mt-0 mr-14 2xl:mr-0">
            <Link href="/develop">
                <BsTwitter className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 twitter" />
            </Link>
            <Link href="https://github.com/rohansx/informatician">
                <BsGithub className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 github" />
            </Link>
            <Link href="#">
                <BsDiscord className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 discord" />
            </Link>
        </div>
    )
}
