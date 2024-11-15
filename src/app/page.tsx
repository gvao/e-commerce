import Link from "./components/Link";
import Button from "./components/Button"

export default function HomePage() {
    return <>
        <Link href="/products">
            <Button>
                Products
            </Button>
        </Link>
    </>
}