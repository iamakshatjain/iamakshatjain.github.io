export default {
  // Home page
  name: "Akshat Jain",
  title: "Software Engineer",
  //   either add a photo to src/Assets/images/ with the name photo.png or link here
  photo:
    "https://res.cloudinary.com/whiteknight/image/upload/v1597427491/White_bg_potrait_tpdl4q.png",

  links: {
    // links would be displayed in the below order
    // currently support for only these, if you find your favourite one missing, raise an issue at https://github.com/iamakshatjain/iamakshatjain.github.io/issues
    linkedIn: "https://www.linkedin.com/in/iamakshtjain/",
    twitter: "https://twitter.com/iamakshtjain",
    github: "https://github.com/iamakshatjain",
    stackOverflow: "https://stackoverflow.com/users/8520377/iamakshatjain",
  },

  aboutMe: {
    // manadatory
    description:
      "Hello! I’m Akshat Jain. A passionate Software Developer 🚀 with strong computer science fundamentals and having an experience of building Full Stack Web Applications with JavaScript / Reactjs / Nodejs /MongoDB and some other cool libraries and frameworks.",

    // remove the field that you don't want on your portfolio home page and contacts page
    email: "developer.akshatjain@gmail.com",
    phone: "+91-8979297928",
    location: "India 🇮🇳",
    freelance: "Available",
  },

  //   provide direct links to resume and vCard resource to allow downloading
  //   vCard : virtual business card
  resume:
    "https://drive.google.com/uc?id=12nz_vzyff3QK6yay0QhI2COVZYzrDAZZ",
  vCard:
    "https://res.cloudinary.com/whiteknight/image/upload/v1597427637/Screenshot_from_2020-08-14_23-23-26_qzbhw8.png",

  //    Resume
  //    Provide details about education, experience and skills
  education: [
    {
      title: "B.Tech, Communication and Computer Engineering",
      //   write in exact format as you want it to be displayed
      startDate: "2017",
      endDate: "2021",
      organisation: {
        name: "The LNM Institute of Information technology",
        link: "https://www.lnmiit.ac.in/",
      },
      description: [
        "CGPA : 9.31",
        "Recieved merit scholarship every year of engineering for my academic performance",
      ],
    },
    {
      title: "Senior Secondary",
      //   write in exact format as you want it to be displayed
      startDate: "2016",
      endDate: "2017",
      organisation: {
        name: "St. Mary's Academy",
        link: "https://www.stmaryssaharanpur.org/",
      },
      description: [
        "Overall 94.8% in Physics, Chemistry, Mathematics with Computer Science",
        "Recieved merit scholarship for being amongst most meritorious students",
        "Scored highest marks (99/100) in Computer Science (Python)",
      ],
    },
  ],

  experience: [
    {
      title: "Software Development Engineer",
      //   write in exact format as you want it to be displayed
      startDate: "Aug 2021",
      endDate: "Present",
      organisation: {
        name: "Innovaccer Analytics Pvt. Ltd.",
        link: "https://innovaccer.com/",
      },
      description: [
        "According to CMS 9115, the payer organizations need to provide patients with access to their personal PHI data and also facilitate payer-to-payer data exchange.",
        "Developed a payer-member portal to provide easy data access to patients with best possible user experience on any of their devices.",
        "Developed a payer registry which is being used by major US payer organizations to efficiently facilitate payer-to-payer data exchange.",
      ],
      skills: [
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "HTML",
        "CSS",
        "Jest",
        "Enzyme",
        "react-testing-library",
        "Git",
        "Scrum",
      ],
    },
    {
      title: "Software Development Engineering Intern",
      //   write in exact format as you want it to be displayed
      startDate: "Jan 2021",
      endDate: "Jul 2021",
      organisation: {
        name: "Innovaccer Analytics Pvt. Ltd.",
        link: "https://innovaccer.com/",
      },
      description: [
        "Utilization management (UM) is a process that helps evaluate the facilities provided to patients on a case-by-case basis.",
        "Developed an effective UM system that entirely digitized and significantly expedited the prior auth process.",
        "Refactored 1500+ lines of code to reduce the bundle size and implement rendering optimizations.",
      ],
      skills: [
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "HTML",
        "CSS",
        "Git",
        "Scrum",
      ],
    },
    {
      title: "Software Development Engineering Intern",
      //   write in exact format as you want it to be displayed
      startDate: "May 2020",
      endDate: "Jul 2020",
      organisation: {
        name: "Innovaccer Analytics Pvt. Ltd.",
        link: "https://innovaccer.com/",
      },
      description: [
        "Developed front end systems for effective utilization management by payer organisations",
        "Collaborated with Product Designers and Back-end Engineers according to scrum model with daily scrum meetings",
        "Removed 1500+ redundant lines of code to reduce the bundle size and implement rendering optimizations",
        "Built highly customizable and interoperable components from scratch while maintaining code quality standards",
      ],
      skills: [
        "ReactJS",
        "Redux",
        "NodeJS",
        "Scrum",
        "HTML5",
        "CSS3",
        "Javascript",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      //   write in exact format as you want it to be displayed
      startDate: "May 2019",
      endDate: "Aug 2019",
      organisation: {
        name: "Planet Tech Labs LLP",
      },
      description: [
        "Collaborate with the CEO to brainstorm and deliver best user experience",
        "Developed front-end, back-end and an admin panel for monitoring of an event management application",
      ],
      skills: ["ReactJS", "Firebase", "HTML5", "CSS3", "Javascript"],
    },
  ],

  skills: {
    Frontend: ["Javascript", "ReactJS", "Redux", "HTML5", "CSS3"],
    Backend: ["Javascript", "NodeJS", "MongoDB", "ExpressJS", "REST API"],
    "Dev tools": [
      "Git",
      "Jest",
      "Enzyme",
      "testing-library",
      "Webpack",
      "Babel",
      "NPM",
      "Jira",
      "Bootstrap",
      "Semantic-UI",
      "Material-UI",
      "Linux",
      "Postman",
      "VS Code",
      "Firebase",
      "Heroku",
      "Strapi (CMS)",
    ],
    familiar: [
      "TypeScript",
      "Python",
      "C++",
      "Java",
      "MySQL",
      "PostgreSQL",
      "Ionic",
      "Web Scraping",
      "Browser automation",
      "LaTex",
      "VHDL",
      "D3.js",
    ],
  },
  portfolio: {
    projects: [
      {
        title: "Gramin Mitra",
        description: [
          "A health awareness application for rural people, especially women and children",
          "Easy to use application in native language (Hindi) with voice based guidance and video content",
        ],
        skills: [
          "ReactJS",
          "Redux",
          "Headless CMS",
          "MongoDB",
          "Youtube API",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
        thumbnail:
          "https://res.cloudinary.com/dndf9znin/image/upload/v1595932996/Gramin_mitra_logo_d5059c7482.png",
        link: "https://github.com/iamakshatjain/rural-companion",
      },
      {
        title: "Modular Portfolio",
        description: [
          "Virtual Business Card theme",
          "Change and customize all the data based on your need with just one file",
          "Completely Open Source for anyone to use",
          "Sections include : Home, Resume, Portfolio, Contact",
          "Timeline display of Resume and highly customizable portfolio section",
        ],
        skills: [
          "ReactJS",
          "Cloudinary CDN",
          "Github Pages",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597427637/Screenshot_from_2020-08-14_23-23-26_qzbhw8.png",
        link: "https://github.com/iamakshatjain/iamakshatjain.github.io",
      },
      {
        title: "Quizspot",
        description: [
          "Developed the app to aid my startup OppSpot in taking quizes during different stages of the hiring process.",
          "It was used by 300+ students to give tests for 20+ companies.",
        ],
        thumbnail:
          "https://docs.google.com/uc?id=1D5KCZ6cfCAnZpbJqxFHPfuppSOjNOJ7g",
        link: "https://github.com/iamakshatjain/quizspot",
        skills: ["Javascript", "ReactJS", "Firebase", "HTML5", "CSS", "Git"],
      },
      {
        title: "LNMIIT Sync",
        description: [
          "Aims to help students, guest and event organisers with event management during college fests and other cultural programs",
          "Developed the entire frontend of the web application of the project",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597476205/ic_launcher-web_ctwqbr.png",
        link: "http://lnmiitsync.herokuapp.com/",
        skills: [
          "NodeJS",
          "ExpressJS",
          "MongoDB",
          "OAuth",
          "Heroku",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
      },
      {
        title: "ReUnite",
        description: [
          "This application aims at helping administration to find missing people with face recognition",
          "Dashboard can be used to generate complaints of missing people and displays all the possible matches with all the details",
          "Complaints are generated by administration and images are uploaded by public cameras",
        ],
        skills: [
          "ReactJS",
          "Microsoft Azure",
          "Cloudinary CDN",
          "Tensorflow.js",
          "REST API",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
        link: "https://github.com/iamakshatjain/Relice",
      },
      {
        title: "ProctorX",
        description: [
          "Solves the issue of cheating during an online exam.",
          "Full Screen detection, Tab Switching detection, Window Switching detection, no clipboard access, no screenshots",
          "Eye movement detection, Camera covering detection using OpenCV",
        ],
        skills: [
          "JavaScript",
          "ReactJS",
          "Material-UI",
          "Tensorflow.js",
          "WebSpeech API",
          "Python",
          "PyTorch",
          "OpenCV",
        ],
        link: "https://youtu.be/7Q_lfauqAsc",
      },
      {
        title: "Yelp Camp",
        description: [
          "This is a campground and picnic spots finding site.",
          "Aims at providing full-fledged information about any campground near you.",
          "You would not need to spend hours to look for a place to go for a small picnic or a long drive with your friends",
        ],
        skills: [
          "HTML5",
          "CSS3",
          "Javascript",
          "NodeJS",
          "ExpressJS",
          "MongoDB",
          "Heroku",
          "Git",
        ],
        thumbnail:
          "https://github.com/iamakshatjain/Yelp-Camp/blob/master/public/icons/ms-icon-310x310.png?raw=true",
        link: "https://github.com/iamakshatjain/Yelp-Camp",
      },

      {
        title: "NetLogo-ICM",
        description: [
          "Social Network Analysis",
          "Creating a scale free model with NetLogo",
          "Applying ICM (Independent Cascade Model) to find the maximum number steps required to get to the maximum number of nodes",
        ],
        skills: ["NetLogo", "Social Network Analysis"],
        thumbnail: "https://i.ibb.co/n86g8Lp/ICM-Model-Performance.png",
        link: "https://github.com/iamakshatjain/NetLogo-ICM",
      },
      {
        title: "Information Visualization using D3.js",
        description: [
          "Visualizing Fund Released under Smart Cities Mission during 2015-16 to 2019-20",
          "Visualizing of total funds and further displaying Used Funds and Available Funds for each state (stacked bar chart - states vs funds)",
          "Visualizing of total funds and further displaying Used Funds and Available Funds for each city of a state (stacked bar chart - funds vs cities)",
        ],
        skills: [
          "Information Visualization",
          "D3.js",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        link: "https://github.com/iamakshatjain/Information-Visualization-D3",
      },
      {
        title: "Entry Management System",
        description: [
          "For the visitors coming to an organisation's office",
          "Capture the Name, email address, contact number of the visitor",
          "Backend stores all of the information with time stamp of the entry",
          "Triggers an email and an SMS to the host informing him of the details of the visitor",
          "While leaving, triggers a notification email to visitor with visit details",
        ],
        skills: [
          "ReactJS",
          "Semantic-UI",
          "NodeJS",
          "ExpressJS",
          "MongoDB",
          "MailJet(Email API)",
          "Nexmo (SMS API)",
          "Heroku",
          "Git",
          "HTML5",
          "CSS3",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597498378/ems_aybka6.jpg",
        link: "https://github.com/iamakshatjain/Innovacer_entry_management_system",
      },
      {
        title: "TechGyan",
        description: [
          "Mock template for an event named TechGyan",
          "Animations with CSS and Javascript",
        ],
        skills: ["HTML5", "CSS3", "Javascript", "Bootstrap"],
        thumbnail:
          "https://iamakshatjain.github.io/TechGyan/public/images/logo.png",
        link: "https://github.com/iamakshatjain/TechGyan",
      },
      {
        title: "Streamy",
        description: ["Online real time video streaming application"],
        skills: [
          "ReactJS",
          "Redux",
          "Redux-form",
          "OBS - Open Broadcaster Software",
          "JSON Server",
          "RTMP(Real Time Messaging Protocol) Server",
          "lodash",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
        link: "https://github.com/iamakshatjain/Streamy",
      },
      {
        title: "Driliyo",
        description: [
          "Drive it like your own. Bike rental startup.",
          "Worked as a backend developer, developed API to be used by Android App and Web App",
          "Location Selection, Filtering Vehicles based on preference",
        ],
        skills: [
          "NodeJS",
          "ExpressJS",
          "MongoDB",
          "OAuth",
          "Heroku",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597435710/Screenshot_from_2020-08-15_01-37-08_s1v78w.png",
        link: "https://www.facebook.com/driliyo/",
      },
    ],
    hackathons: [
      {
        title: "VersionBeta3.0",
        description: [
          "⭐ Won the First Prize",
          "Developed an online exam proctoring tool",
          "Organised by Maulana Azad National Institute of Technology, Bhopal",
        ],
        thumbnail: "https://i.ibb.co/7gLh7ym/hackathon.jpg",
        link: "https://youtu.be/7Q_lfauqAsc",
        skills: [
          "JavaScript",
          "ReactJS",
          "Material-UI",
          "Tensorflow.js",
          "WebSpeech API",
          "Python",
          "PyTorch",
        ],
      },
      {
        title: "Cybros Hackathon 2019",
        description: [
          "⭐ Won the 'Most voted project' title in the hackathon",
          "Developed digital business cards that can be shared with QR codes",
        ],
        thumbnail:
          "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/795/384/datas/medium.png",
        link: "https://devpost.com/software/bytecard",
        skills: [
          "ReactJS",
          "Ionic",
          "NodeJS",
          "ExpressJS",
          "MongoDB",
          "OAuth",
          "Heroku",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
      },
      {
        title: "LNMHacks 4.0",
        description: [
          "⭐ Won the 'Most innovative project' title in azure category",
          "Developed an application to find missing people",
        ],
        thumbnail: "https://i.ibb.co/TrfNGc1/lnmhacks.jpg",
        link: "https://github.com/iamakshatjain/LNMHacks4-Submissions",
        skills: [
          "NodeJS",
          "ExpressJS",
          "MongoDB",
          "Heroku",
          "Git",
          "HTML5",
          "CSS3",
          "Javascript",
        ],
      },
    ],
    trainings: [
      {
        title: "Student Developer, Crio Launch 2020",
        description: [
          "Crio Launch is a unique program from Crio.Do to get internship-like experience, build a portfolio",
          "Engage with Entrepreneurs and Creators of Crio.do to learn various concepts",
          "Worked on QBox : Created pre-install scripts to run system checks, install and configure QBox, worked vith VSFTPD Server",
          "Worked on QMoney : Implemented the core logic of the portfolio manager to make trade recommendations for their clients",
          "Learned about problem solving methodologies, understanding trade-offs and writing pseudocode for the chosen approach.",
        ],
        skills: [
          "Applied DSA",
          "Linux",
          "OS Concepts",
          "Networking Concepts",
          "REST API",
          "Code Refactoring",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597497082/crio_semhem.png",
        link: "https://criodo.github.io/Crio-Launch-Feb-2020-developer-akshatjain/",
      },
    ],
    "extra Curriculars": [
      {
        title: "Startup Weekend",
        description: [
          "Organised Startup Weekend in first year of college at LNMIIT",
          "Hackathon for entrepreneurship and business",
          "Managed to sell 100+ tickets",
          "Powered by Google",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597491709/startup_weekend_dh6vhy.png",
        link: "https://startupweekend.org/",
        skills: ["Marketing", "Management", "Networking", "Sales"],
      },
      {
        title: "Startup Intern Fair",
        description: [
          "Organised Startup Intern Fair and in first and second year of college at LNMIIT",
          "Managed to get 30+ startups",
          "Registered 300+ applicants",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597491997/Screenshot_from_2020-08-15_17-16-17_lzts06.png",
        link: "https://www.facebook.com/events/375021799921363/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%7D",
        skills: [
          "Marketing",
          "Management",
          "Leadership",
          "Networking",
          "Sales",
        ],
      },
      {
        title: "Internshala Student Partner",
        description: [
          "Internshala Student Partner (ISP) 13.0",
          "Helped internshala in providing the right opportunities to the right people",
          "Got 300+ students registered over the platform",
        ],
        skills: ["Marketing", "Advertisement", "Public Speaking"],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597496037/internshala_og_image_pcjejp.webp",
        link: "https://www.linkedin.com/in/iamakshtjain/detail/treasury/position:1466658733/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACS21yQBfPLlst3-FvzFE8lf5TSN17pmTgI%2C1561052235795)&parentEntityUrn=urn%3Ali%3Afsd_profilePosition%3A(ACoAACS21yQBfPLlst3-FvzFE8lf5TSN17pmTgI%2C1466658733)&section=position%3A1466658733&treasuryCount=2",
      },
    ],
    "co Curriculars": [
      {
        title: "Teaching Assistant",
        description: [
          "Assisted in Data Structures and Algorithms Lab",
          "Mentored student with lab assignments and taught basics about data structures and algorithms",
        ],
        skills: ["Data Structures", "Algorithms"],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597495510/lnmiit-logo_rj6owp.png",
      },
    ],
    volunteer: [
      {
        title: "MWEP",
        description: [
          "Taught basic English, Maths, Hindi and Computers to mess workers",
        ],
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597495176/mwep_d3jvsz.jpg",
        link: "https://www.facebook.com/mwep16",
      },
    ],
  },
};
