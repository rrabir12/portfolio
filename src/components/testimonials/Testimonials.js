import "./Testimonials.css"

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Tom Cart",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: "./Assets/twiter.webp",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum neque et pulvinar varius.",
    },
    {
    id: 2,
    name: "Alex Kalin",
    title: "Founder of ITech",
    img: "https://images.pexels.com/photos/7792782/pexels-photo-7792782.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: "./Assets/twiter.webp",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum neque et pulvinar varius.",
    featured: true,
  },
  {
  id: 3,
  name: "Rojor Deo",
  title: "Co-Founder of ITech",
  img: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600",
  icon: "./Assets/twiter.webp",
  desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum neque et pulvinar varius.",
},
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=>(
        <div className="card">
            <div className="top">
              <img src="./Assets/arrow.png" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
            {d.desc}
            </div>
            <div className="buttom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}
