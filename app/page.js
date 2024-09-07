import Image from "next/image";
import data from '/public/members.json';
import Link from "next/link"

export default function Home() {
  return (
    <>
      {
        data.map((member)=>(
          <section className="members" key={member.username}>
            <Link
              className="link"
              href={`/${member.username}`}
            >
              {member.username}
            </Link>
          </section>
        ))
      }
    </>
  );
}
