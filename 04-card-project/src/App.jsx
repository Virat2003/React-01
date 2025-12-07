import Card from "./components/Card"

const App = () => {

const arr = [10,20,30,40]

const names = ["virat","rane","aba"]

const obj = [
  {
    user:"virat",
    age:22
  },
  {
    user:"ravi",
    age:45
  },
  {
    user:"kumar",
    age:63
  }
]



  const jobOpenings = [

  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 month ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "GPU Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$88/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "5 weeks ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Bangalore, India"
  }
];

console.log(jobOpenings);


  

  return (
    <div className="parent">
    {/* <Card  />
    <Card  />
    <Card  /> */}

    {/* <User /> */}

    {/* {arr.map(function(element) {
      return <h1>{element / 2}</h1>
      
    }) }

    {names.map(function () {
      return 14
    })}


  {obj.map(function (element1) {
    console.log(element1);
    
  })} */}


  {/* {arr.map(function (elem) {
    return <User name= {elem} />
  })} */}



  {jobOpenings.map(function (elem, idx) {
    return <div key={idx}>
    <Card company = {elem.companyName} post ={elem.post} pay={elem.pay}  tag1={elem.tag1} tag2={elem.tag2} datePosted = {elem.datePosted} location = {elem.location} brandlogo={elem.brandLogo} />
  </div>
  })}

    </div>

  );
};

export default App;
