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
      "Hello! I’m Akshat Jain. A passionate Software Developer 🚀 having an experience of building Full Stack Web Applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",

    // remove the field that you don't want on your portfolio home page and contacts page
    email: "developer.akshatjain@gmail.com",
    phone: "+91-8979297928",
    location: "Jaipur, India",
    freelance: "Available",
  },

  //   provide direct links to resume and vCard resource to allow downloading
  //   vCard : virtual business card
  resume:
    "https://drive.google.com/file/d/1zc5WXMfsXM7KkkOdwYPdus5J9D9jHLIX/view?usp=sharing",
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
      description: "CGPA : 9.29",
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
      description: "94.8%",
    },
  ],

  experience: [
    {
      title: "Software Development Engineering Intern",
      //   write in exact format as you want it to be displayed
      startDate: "May 2020",
      endDate: "Jul 2020",
      organisation: {
        name: "Innovaccer",
        link: "https://innovaccer.com/",
      },
      description:
        "Worked on implementing high quality react component from scratch as per scrum methodologies",
    },
    {
      title: "Software Development Engineering Intern",
      //   write in exact format as you want it to be displayed
      startDate: "Aug 2019",
      endDate: "Mar 2020",
      organisation: {
        name: "Namekart",
        link: "https://namekart.com/",
      },
      description: "Worked on automating business procedures with reactJS",
    },
    {
      title: "Full Stack Developer Intern",
      //   write in exact format as you want it to be displayed
      startDate: "May 2019",
      endDate: "Aug 2019",
      organisation: {
        name: "Planet Tech Labs LLP",
      },
      description:
        "Worked on creating an event management application with reactJS",
    },
  ],

  //   TODO : write these again
  skills: {
    coding: [
      "C++",
      "Javascript",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "REST API",
      "MySQL",
      "Git",
      "HTML5",
      "CSS3",
      "Python",
    ],
    tools: [
      "Github",
      "Redux",
      "Bootstrap",
      "Linux",
      "Postman",
      "VS Code",
      "Firestore",
      "Heroku",
    ],
    familiar: [
      "Ionic",
      "Capacitor",
      "Web Scraping",
      "Google-Puppeteer",
      "LaTex",
    ],
  },
  portfolio: {
    projects: [
      {
        title: "Gramin Mitra",
        description:
          "Aims to help educate rural people, especially women about basic hygiene, nutrition, diseases and other common problems. An easy to use application in native language (Hindi) with voice based guidance and video",
        thumbnail:
          "https://res.cloudinary.com/dndf9znin/image/upload/v1595932996/Gramin_mitra_logo_d5059c7482.png",
        link: "https://github.com/iamakshatjain/rural-companion",
      },
      {
        title: "Relice",
        description:
          "Aimed to help find missing people with the help of facial recognition",
        link: "https://github.com/iamakshatjain/Relice",
      },
      {
        title: "Driliyo",
        description:
          "Drive it like your own. Bike rental startup. Worked as a backend developer, created entire API with nodeJS",
        thumbnail:
          "https://res.cloudinary.com/whiteknight/image/upload/v1597435710/Screenshot_from_2020-08-15_01-37-08_s1v78w.png",
      },
      {
        title: "Yelp Camp",
        description:
          "This is a campground and picnic spots finding site. The website if deployed to use aims at providing full-fledged information about any campground near you. You would not need to spend hours to look for a place to go for a small picnic or a long drive with your friends",
        thumbnail:
          "https://github.com/iamakshatjain/Yelp-Camp/blob/master/public/icons/ms-icon-310x310.png?raw=true",
        link: "https://github.com/iamakshatjain/Yelp-Camp",
      },
      {
        title: "Streamy",
        description: "Online video streaming application made with react js",
        link: "https://github.com/iamakshatjain/Streamy",
      },
      {
        title: "LNMIIT Sync",
        description:
          "Aims to help students, guest and event organisers with event management during college fests and other cultural programs",
        link: "http://lnmiitsync.herokuapp.com/",
      },
    ],
    hackathons: [
      {
        title: "Project Name",
        description:
          "Worked on implementing high quality react component from scratch as per scrum methodologies i",
        thumbnail:
          "https://d2slcw3kip6qmk.cloudfront.net/marketing/techblog/angular-directives/5-angular-directives-you-can-use-in-your-project-header@2x.png",
        link:
          "https://d2slcw3kip6qmk.cloudfront.net/marketing/techblog/angular-directives/5-angular-directives-you-can-use-in-your-project-header@2x.png",
      },
    ],
    volunteering: [],
  },
};
