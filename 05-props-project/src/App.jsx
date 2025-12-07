import Button from "./components/Button/Button";
import Card from "./components/Card";
import Header from "./components/Header/Header";




const App = () => {

const jobProfiles = [
  {
    profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Jennifer Smith",
    position: "Interactive Designer",
    jobProfile: "Freelancer",
    skills: ["HTML", "CSS", "JavaScript", "iOS", "PHP"],
    roleDescription:
      "Jennifer is an interactive designer who specializes in building clean, engaging UI experiences.",
    pay: 44
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Ethan Walker",
    position: "Full Stack Developer",
    jobProfile: "Epic Coders",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    roleDescription:
      "Ethan develops scalable full-stack web applications with modern frameworks.",
    pay: 52
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Ava Thompson",
    position: "UI/UX Designer",
    jobProfile: "Visual Madness",
    skills: ["Figma", "Sketch", "Wireframing", "Prototyping"],
    roleDescription:
      "Ava designs user-centered interfaces with a strong focus on accessibility.",
    pay: 38
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "Liam Carter",
    position: "Mobile App Developer",
    jobProfile: "Freelancer",
    skills: ["React Native", "Flutter", "Kotlin", "Swift"],
    roleDescription:
      "Liam builds high-performance mobile apps for both Android and iOS platforms.",
    pay: 60
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/48.jpg",
    name: "Sophia Martin",
    position: "Backend Engineer",
    jobProfile: "Epic Coders",
    skills: ["Python", "Django", "PostgreSQL", "REST APIs"],
    roleDescription:
      "Sophia creates highly optimized backend systems and APIs for large applications.",
    pay: 55
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "James Anderson",
    position: "Cloud Architect",
    jobProfile: "SkyNet Labs",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    roleDescription:
      "James designs and deploys cloud infrastructure with modern DevOps tools.",
    pay: 72
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Emily Johnson",
    position: "Frontend Developer",
    jobProfile: "Freelancer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    roleDescription:
      "Emily builds responsive and visually appealing web interfaces.",
    pay: 41
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Daniel Adams",
    position: "Data Analyst",
    jobProfile: "Visual Madness",
    skills: ["SQL", "Excel", "Power BI", "Python"],
    roleDescription:
      "Daniel analyzes data trends and builds insightful dashboards for businesses.",
    pay: 47
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Olivia Perez",
    position: "Product Designer",
    jobProfile: "Epic Coders",
    skills: ["Prototyping", "User Research", "UI Design"],
    roleDescription:
      "Olivia creates intuitive and user-friendly product experiences.",
    pay: 58
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
    name: "Noah Wilson",
    position: "Software Engineer",
    jobProfile: "Freelancer",
    skills: ["C++", "Java", "Python", "System Design"],
    roleDescription:
      "Noah builds scalable and efficient software systems with a strong engineering foundation.",
    pay: 65
  }
];


  return (
    <div className='parent'>

      {/* {jobProfiles.map(function (elem, idx){

        return <div key ={idx}>
         <Card  name={elem.name} role={elem.position} jobprofile = {elem.jobProfile} skills ={elem.skills}  jobdes= {elem.roleDescription} pay = {elem.pay}/>
        </div>
      })} */}


    <Button />
    <Header />
    

    </div>
  );
};

export default App;
