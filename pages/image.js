import Link from 'next/link';

function MyImage() {
  return (
    <Link href="/" as="/fake">
      <img src="/static/next.png" alt="my image" />
    </Link>);
}

export default MyImage;