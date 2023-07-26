import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  gog,
  job_junction,
  threejs,
  bootstrap,
  mui,
  socketIO,
  python,
  jwt,
  firebase,
  expressJS,
  dataStructure,
  algorithm,
  redux,
  nextJS,
  amazonS3,
  amazonEc2,
  problemSolving,
} from "../assets/index";

export const navLinks = [
  {
    id: "/#about",
    title: "About",
    audio: "aboutMe",
  },
  {
    id: "/#work",
    title: "Work",
    audio: "myWork",
  },
  {
    id: "/#contact",
    title: "Contact",
    audio: "contactMe",
  },
  {
    id: "/blogs",
    title: "blogs",
    audio: "myBlogs",
  },
];

const services = [
  {
    title: "Leadership Development Manager",
    icon: mobile,
  },
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Js & Node JS Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Mui",
    icon: mui,
  },
  {
    name: "Socket io",
    icon: socketIO,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Express Js",
    icon: expressJS,
  },
  {
    name: "Data Structure",
    icon: dataStructure,
  },
  {
    name: "Algorithm",
    icon: algorithm,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Next Js",
    icon: nextJS,
  },
  {
    name: "Amazon S3",
    icon: amazonS3,
  },
  {
    name: "Amazon EC2",
    icon: amazonEc2,
  },
  {
    name: "Problem Solving",
    icon: problemSolving,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Sr. Full Stack Web Developer",
    company_name: "Geeks of Gurukul",
    icon: gog,
    iconBg: "#00909E",
    date: "April 2023 - July 2023",
    points: [
      "Led and managed a team of 7 developers and 2 UI/UX designers, fostering a productive and cohesive environment.",
      "Thrived on brainstorming, logic building, and meticulously analyzing the workflow to ensure successful project outcomes.",
      "Leveraged proficiency in various technologies, frameworks, and tools to develop robust and scalable web applications.",
      "Demonstrated a result-oriented professional mindset, consistently delivering high-quality solutions that exceeded client expectations.",
    ],
  },
  {
    title: "Leadership Development Manager",
    company_name: "Job Junction - Group Project",
    icon: job_junction,
    iconBg: "#00909E",
    date: "Feb 2023 - March 2023",
    points: [
      "Collaborated with designers, developers, and project managers to develop and maintain web applications.",
      "Wrote clean, maintainable, and efficient code, troubleshooting, debugging & testing, and deploying web applications.",
      "Stayed up to date with emerging web development trends and technologies.",
      "Led the planning, logic design, and solution implementation while effectively assigning tasks to team members.",
    ],
  },
];
const projects = [
  {
    _id: 4,

    projectName: "Medi_Selll -medicine donation and reselling",

    introduction:
      " To meet the increasing demand for improvements in the health care facilities & services we can utilize the power of internet technology & its wide network, by which people can help each other with just one click from their phone. The Medicine Donation system proposed here aims at providing an online platform for donating medicines or unused medicines to needy people. Users can register themselves on this system by submitting their necessary details. Once registered the users can donate and resell the medicines by providing accurate medicine details to NGOs and hospitals. The system has the authority to block the users if they raise a request to donate improper or expired medicines. The system will maintain a record of donated & available medicines.",
    objectives: [
      ,
      "To help the needy people by donating unused medicines.",
      "We can also resell medicines to the hospitals and NGOs with discount according to their expired date.",
      "To provide comprehensive care that reaches the needs of underdeveloped communities through people and technology.",
      "To dispose the expired medicine so that they cannot be misused.",
    ],
    systemFeatures: [
      "User can donate and resell medicine by providing medicine details and can buy medicines as per their requirement. They can report medicine with providing the valid reason.",
      "NGO can see the stock of the medicine given by the user had been donated will listed in medicines routes. NGO can assign volunteers to collect the medicines",
      "User and NGO both can report medicine with providing the valid reason. andd can scan the QR and Bar code also.",
      "Admin analyses and delete or blocks the user who posted damaged medicines.",
    ],

    toolsAndTechnologies: [
      "React JS",
      " Node JS",
      " Express JS",
      " Tailwind",
      " TanStack Query",
      " React hook form",
      " Firebase",
      " JWT",
      " Vercel",
      " Mongo DB",
      " Payment Gateway.",
    ],

    thumbNail: "https://i.ibb.co/wWk4VYM/Screenshot-2023-02-16-201325.png",
    clientSide:
      "https://github.com/KhalidMimMuzahid/medi-sell-react-app-client-side",
    serverSide: "https://github.com/KhalidMimMuzahid/medi-sell-server-side",
    liveSite: "https://medi-sell.web.app/",
  },
  {
    _id: 1,

    projectName: "Used Bike Bazar - A resale website for used bike.",
    introduction:
      "At present, the demand for the resale market in our country is increasing day by day. We often find that most people after buying a product, want to exchange that product after using it for some time, exchange their old product with a new product, so the resale market is a good way. on the other hand, a resale market is also a good option for those who cannot buy new products due to money problems. Because they get the product of their choice at a relatively low price.",
    objectives: [
      "To design a web-based application that make resale-product business easy and effective",
      "To design and integrate an automated system to improve the services.",
      "To get a opportunity to chose their product at home",
      "To pay their chosen product easily",
      "To selling product very quickly and effectively",
      "To manage all entire business at the same time as a admin",
    ],
    systemFeatures: [
      "Seller can create a selling post, delete post, can advertise a post and that post will go to the buyers home route and also can see their all buyers",
      "Buyer can see all the advertised unsold posts and can book bikes or report this post to admin, can see the product according to the product category. Can see their order and then can pay for this product.",
      "Admin can manage seller and buyer. Can verify seller then verified seller will get the checked mark",
    ],

    toolsAndTechnologies: [
      "React JS",
      "Node JS",
      "Express JS",
      "Tailwind",
      "TanStack Query",
      "react hook form",
      "Firebase",
      "JWT",
      "Vercel",
      "Mongo DB",
    ],

    thumbNail: "https://i.ibb.co/QYB0NLQ/image.png",

    clientSide:
      "https://github.com/KhalidMimMuzahid/used-bike-bazar-client-side-react-app",
    serverSide:
      "https://github.com/KhalidMimMuzahid/used-bike-bazar-server-side",
    liveSite: "https://used-bike-bazar.web.app/",
  },

  {
    _id: 2,

    projectName: "Need Aid -a online donation service for humanity.",
    introduction:
      "There have many poor people who need help and others who want to help them by giving money. But sometimes this process may be long and complex. Sometimes they can't get enough time to find out the actual helpless people. That’s why most of the time this helping process can't be happening, so we have made a solution for this. We are made a system that will help those who want to donate and who actually need helps.",
    objectives: [
      "To design a web-based application that helps the Donors and The organization ease their work.",
      "Design and integrate an automated system to improve the services.",
      "Donor is entirely concerned with knowing more about the service.",
      "To donate to individual places or organizations.",
      "Run some social projects to help the people.",
      "Speeding up the practical procedures.",
    ],
    systemFeatures: [
      "Donor can donate money for specific fund, can see the top donor list and can send a gift message to the top donor so that the top donor have got more inspired. If any top donor is got a gift message, he/she will notify from the system and then he/she can see the gift message.",
      "Any user can get sponsorship to advertise their product. When admin accept this sponsorship this advertise is shown somewhere of this system.",
      "Any User can buy a lottery ticket for raffle draw and only the admin can draw this raffle . after that the draw result will be published on this system.",
    ],

    toolsAndTechnologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      " React JS",
      "NodeJS",
      "ExpressJS",
      "Mongo DB",
      "FireBase",
      "JWT",
      "vercel",
    ],

    thumbNail: "https://i.ibb.co/pzHXVDx/image.png",
    clientSide:
      "https://github.com/KhalidMimMuzahid/need-aid-client-side-react-app",
    serverSide: "https://github.com/KhalidMimMuzahid/need-aid-server-side",
    liveSite: "https://need-aid.web.app/",
  },

  {
    _id: 3,

    projectName: "Pixel Shooter- A Photography service based website.",
    introduction:
      "Pixel Shooter is a web based application for photographers and their clients. All clients and photographers can connect with each other through this application. Client can book specific service and review service wise. And the photographer can update their services according to the client's reviews. Photographers can add a new service. And there are more opportunities to manage photography marketing using this system.",
    objectives: [
      "To design a web-based solution to manage the photography service",
      "To Design and integrate an automated system to improve the services.",
      "To know about the specific service that is provided by the photographer",
      "To have a opportunity to get review for each service",
      "To pre-book the specific service",
    ],
    systemFeatures: [
      "user can know about the specific service",
      "user can review the specific service according to service quality, for some reason then can delete and update their review",
      "photographer can add their services with details",
    ],

    toolsAndTechnologies: [
      ,
      "React JS",
      "Node JS",
      "Express JS",
      "Tailwind",
      "Firebase",
      "Mongo DB",
    ],

    thumbNail: "https://i.ibb.co/8MR0FLk/image.png",
    clientSide:
      "https://github.com/KhalidMimMuzahid/pixel-shooter-client-side-react-ap…",
    serverSide:
      "https://github.com/KhalidMimMuzahid/-pixel-shooter-server-side",
    liveSite: "https://pixel-shooter-3d676.web.app/",
  },
];
export { services, technologies, experiences, projects };
