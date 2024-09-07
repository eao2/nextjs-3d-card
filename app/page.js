import Image from "next/image";
import data from '/public/members.json';
import Link from "next/link"

export default function Home() {
  console.log(process.env.PUBLIC_URL)
  return (
    <>
      {
        data.map((member)=>(
          <section className="members" key={member.username}>
            <Link
              className="link"
              href={`/member/${member.username}`}
            >
              {member.username}
            </Link>
          </section>
        ))
      }
    </>
  );
}
