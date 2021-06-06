import Link from 'next/link';

export default function Nav(){
    return (
        <nav>
            <Link href="/staff">Staff</Link>
            <Link href="/book">Book Sessions</Link>
            {/* might make the shop a separate repo or link to his shopify 👇 */}
            <Link href="/shop">Shop No Grin9 No Glory</Link>
            <Link href="/profile">My Grin9</Link>
        </nav>
    )
}