import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mostafa Ahangarha",
      title: "Full-stack Developer",
      img: "https://media-exp2.licdn.com/dms/image/D4D35AQEpzRy2DOXjbw/profile-framedphoto-shrink_400_400/0/1657218232693?e=1658790000&v=beta&t=EGAHeh3VtXlHJJYIik7LBNAyIUvvFU_UlqmbPLx3Pvc",
      icon: "assets/linkedin.png",
      desc: "Omar was a good mentor for me. I was his mentee at Microvese. He provided me with the kind of support I needed during the first few months of the course. He listened and understood my issues carefully and referred me to the right resources and people. He is a valuable asset to any team.",
    },
    {
      id: 2,
      name: "Jos Kalenda",
      title: "Full-stack Developer",
      img: "https://media-exp2.licdn.com/dms/image/D4D35AQFbME2qJ0FSTg/profile-framedphoto-shrink_100_100/0/1642715751507?e=1658793600&v=beta&t=wFRz6jLPn7pbUS-G6NMgAbfXUP6s1dr_RYoOWj7FPZs",
      icon: "assets/linkedin.png",
      desc: "Omar is a friend and exactly the sort of software developer any company would love. his collaboration skills and his detail-oriented approach made him a pleasure to work with. Definitely knows his way around JavaScript, React and, is always willing to help out anyone that is stuck or facing problems. He's great at what he's doing and I'm sure he would be a great addition to any professional team.",
      featured: true,
    },
    {
      id: 3,
      name: "Selma Belhadj",
      title: "Software Engineer",
      img: "https://media-exp2.licdn.com/dms/image/C5603AQG5UzwuR0-F2A/profile-displayphoto-shrink_100_100/0/1657899989102?e=1663804800&v=beta&t=0i-KVBgHu5QkHl73t3mXgY8Qvt2welRVX0nzVyLvUDo",
      icon: "assets/linkedin.png",
      desc: "Omar Salem is so good of a team player. He has the capacity to revive the mood of the other members of the team. He is a very dedicated developer is highly-technically skilled. He is a strong critical thinker as well and I believe that he'd be an asset to any team that's lucky enough to have him.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
