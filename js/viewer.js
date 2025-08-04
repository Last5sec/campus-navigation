// === Select DOM Elements ===
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const markers = document.querySelectorAll('.marker');

const infoBox = document.getElementById('info-box');
const infoImg = document.getElementById('info-img');
const infoTitle = document.getElementById('info-title');
const infoDescription = document.getElementById('info-description');
const closeBtn = document.querySelector('.close-btn');
const navigateBtn = document.getElementById('navigate-btn');
const backToStreetBtn = document.getElementById('back-to-street');

// === Info Data ===
const infoData = [
  {
    name: "LHC",
    image: "img/info box/lhc.jpg",
    description: "The Lecture Hall Complex (LHC) hosts lectures, seminars, and academic activities for students and faculty."
  },
  {
    name: "Mess & Canteen",
    image: "img/info box/Mess.jpg",
    description: "The Mess & Canteen provides dining services with a variety of affordable meals and snacks."
  },
  {
    name: "R&D Block",
    image: "img/info box/rnd.png",
    description: "The Research and Development (R&D) Block is dedicated to innovation, research labs, and faculty offices."
  },
  {
    name: "Sports Block",
    image: "img/sportsblock.jpg",
    description: "The Sports Block includes facilities for indoor sports, fitness training, and recreation."
  },
  {
    name: "Old Academic Block",
    image: "img/info box/old academic.jpg",
    description: "The Old Academic Block houses early classrooms, faculty rooms, and administrative offices."
  },
  {
    name: "Library",
    image: "img/info box/library.jpg",
    description: "The Library is a central hub for academic resources, research, and quiet study."
  },
  {
    name: "Girls Hostel",
    image: "img/info box/girls hostel.jpg",
    description: "The Girls Hostel provides comfortable accommodation for female students."
  },
  {
    name: "Old Boys Hostel",
    image: "img/info box/old boys.jpg",
    description: "The Old Boys Hostel offers accommodation for male students."
  },
  {
    name: "H1 Hostel",
    image: "img/info box/H1 hostel.jpg",
    description: "The H1 Hostel offers accommodation for male students."
  },
  {
    name: "H2 Hostel",
    image: "img/info box/H2 hostel.jpg",
    description: "The H2 Hostel offers accommodation for male students."
  },
  {
    name: "Guest House",
    image: "img/info box/guest house.jpg",
    description: "The Guest House provides accommodation for visiting faculty, guests, and staff."
  },
  {
    name: "Anuj Grover Sir",
    image: "img/info box/search box/A610.jpg",
    description: "A610 is a faculty office of Anuj Grover Sir"

  },
  {
    name: "LHC 101",
    image: "img/info box/search box/101.jpg",
    description: "101 is a Lecture Hall in LHC"
  },
  {
    name: "LHC 102",
    image: "img/info box/search box/102.jpg",
    description: "102 is a Lecture Hall in LHC"
  },
  {
    name: "LHC 201",
    image: "img/info box/search box/201.jpg",
    description: "201 is a Lecture Hall in LHC"
  },
  {
    name: "LHC 208",
    image: "img/info box/search box/208.jpg",
    description: "208 is a Tutorial room in LHC"
  },
  {
    name: "LHC 209",
    image: "img/info box/search box/209.jpg",
    description: "209 is a Tutorial room in LHC"
  },
  {
    name: "LHC 210",
    image: "img/info box/search box/210.jpg",
    description: "210 is a Tutorial room in LHC"
  },
  {
    name: "LHC 211",
    image: "img/info box/search box/211.jpg",
    description: "211 is a Tutorial room in LHC"
  },
  {
    name: "LHC 212",
    image: "img/info box/search box/212.jpg",
    description: "212 is a Tutorial room in LHC"
  },
  {
    name: "LHC 213",
    image: "img/info box/search box/213.jpg",
    description: "213 is a Tutorial room in LHC"
  },
  {
    name: "LHC 214",
    image: "img/info box/search box/214.jpg",
    description: "214 is a Tutorial room in LHC"
  },
  {
    name: "LHC 215",
    image: "img/info box/search box/215.jpg",
    description: "215 is a Tutorial room in LHC"
  },
  {
    name: "LHC 216",
    image: "img/info box/search box/216.jpg",
    description: "216 is a Tutorial room in LHC"
  },
  {
    name: "LHC 301",
    image: "img/info box/search box/301.jpg",
    description: "301 is the Digital Circuits Lab in LHC"
  },
  {
    name: "LHC 302",
    image: "img/info box/search box/302.jpg",
    description: "302 is the Circuits & Innovation Lab in LHC"
  },
  {
    name: "LHC 303",
    image: "img/info box/search box/303.jpg",
    description: "303 is the Basic Electronics Lab in LHC"
  },
  {
    name: "LHC 304",
    image: "img/info box/search box/304.jpg",
    description: "304 is the RF & Applied Electromagentics Lab in LHC"
  },
  {
    name: "LHC 305",
    image: "img/info box/search box/305.jpg",
    description: "305 is the Shannon Lab in LHC"
  },
  {
    name: "LHC 306",
    image: "img/info box/search box/306.jpg",
    description: "306 is the Boyd Lab in LHC"
  },
  {
    name: "LHC 307",
    image: "img/info box/search box/307.jpg",
    description: "307 is the Meeting Room in LHC"
  },
  {
    name: "LHC 315",
    image: "img/info box/search box/315.jpg",
    description: "315 is the Computer Lab (Computer Centre - A) in LHC"
  },
  {
    name: "LHC 316",
    image: "img/info box/search box/316.jpg",
    description: "316 is the Computer Lab (Computer Centre - B) in LHC"
  },
  {
    name: "LHC 317",
    image: "img/info box/search box/317.jpg",
    description: "317 is the Computer Lab (Computer Centre - C) in LHC"
  },
  {
    name: "LHC 318",
    image: "img/info box/search box/318.jpg",
    description: "318 is the Molecular & Cellular Biology Laboratory in LHC"
  },
  {
    name: "LHC 319",
    image: "img/info box/search box/319.jpg",
    description: "319 is the Microscopy Laboratory in LHC"
  },
  {
    name: "LHC 320",
    image: "img/info box/search box/320.jpg",
    description: "320 is the Computer Lab (Computer Centre - D) in LHC"
  },
  {
    name: "LHC 321",
    image: "img/info box/search box/321.jpg",
    description: "321 is the Computer Lab (Computer Centre - E) in LHC"
  },
  {
    name: "LHC 322",
    image: "img/info box/search box/322.jpg",
    description: "322 is the Meeting Room in LHC"
  },
  {
    name: "Kapil Chawla Sir",
    image: "img/info box/search box/A-102.jpg",
    description: "A-102 is the Office of Kapil Chawla Sir"

  },
  {
    name: "Shishir Jain Sir",
    image: "img/info box/search box/A-103.jpg",
    description: "A-103 is the Office of Shishir Jain Sir"
  },
  {
    name: "Store Room",
    image: "img/info box/search box/A-106.jpg",
    description: "A-106 is the Store Room in LHC"
  },
  {
    name: "Nidhi Yadav Mam",
    image: "img/info box/search box/A-107.jpg",
    description: "A-107 is the Office of Nidhi Yadav Mam"
  },
  {
    name: "Finance & Accounts",
    image: "img/info box/search box/A-109.jpg",
    description: "A-109 is the Office of Finance & Accounts"
  },
  {
    name: "Anurag Tyagi Sir",
    image: "img/info box/search box/A-201.jpg",
    description: "A-201 is the Office of Anurag Tyagi Sir"
  },
  {
    name: "Umesh Singhania Sir",
    image: "img/info box/search box/A-202.jpg",
    description: "A-202 is the Office of Umesh Singhania Sir"
  },
  {
    name: "Visiting Psychiatrist",
    image: "img/info box/search box/A-205.jpg",
    description: "A-205 is the Office of Psychiatrist"
  },
  {
    name: "Visiting Psychologist",
    image: "img/info box/search box/A-205.jpg",
    description: "A-205 is the Office of Psychologist"
  },
  {
    name: "Counselling Psychologist",
    image: "img/info box/search box/A-206.jpg",
    description: "A-206 is the Office of Khushpinder Sharma (Counselling Psychologist)"
  },
  {
    name: "Khushpinder Sharma Sir",
    image: "img/info box/search box/A-206.jpg",
    description: "A-206 is the Office of Khushpinder Sharma (Counselling Psychologist)"
  },
  {
    name: "Student Affairs Office",
    image: "img/info box/search box/A-207.jpg",
    description: "A-207 is the Office of Student Affairs"
  },
  // {
  //   name: "A208",
  //   image: "img/info box/search box/A-208.jpg",
  //   description: "A-208 is the Office of A-208"
  // },
  // {
  //   name: "A209",
  //   image: "img/info box/search box/A-209.jpg",
  //   description: "A-209 is the Office of A-209"
  // },
  {
    name: "Anupam Saronwala Sir",
    image: "img/info box/search box/A-301.jpg",
    description: "A-301 is the Office of Anupam Saronwala Sir"
  },
  {
    name: "Alok Nikhil Jha Sir",
    image: "img/info box/search box/A-303.jpg",
    description: "A-303 is the Office of Alok Nikhil Jha Sir"
  },
  {
    name: "Nayana Samuel Sir",
    image: "img/info box/search box/A-304.jpg",
    description: "A-304 is the Office of Nayana Samuel Sir"
  },
  {
    name: "Pankaj Vajpayee Sir",
    image: "img/info box/search box/A-305.jpg",
    description: "A-305 is the Office of Pankaj Vajpayee Sir"
  },
  {
    name: "Center For Quantum Technologies",
    image: "img/info box/search box/A-308.jpg",
    description: "A-308 is the Office of Center For Quantum Technologies"
  },
  {
    name: "Sankha Suvra Bhaumik Mam",
    image: "img/info box/search box/A-401.jpg",
    description: "A-401 is the Office of Sankha Suvra Bhaumik Mam"
  },
  {
    name: "Anoop Ratn Sir",
    image: "img/info box/search box/A-402.jpg",
    description: "A-402 is the Office of Anoop Ratn Sir"
  },
  {
    name: "Aman Samuel Sir",
    image: "img/info box/search box/A-403.jpg",
    description: "A-403 is the Office of Aman Samuel Sir"
  },
  {
    name: "Vinish Kathuria Sir",
    image: "img/info box/search box/A-405.jpg",
    description: "A-405 is the Office of Vinish Kathuria Sir"
  },
  {
    name: "Angshu Das Sir",
    image: "img/info box/search box/A-406.jpg",
    description: "A-406 is the Office of Angshu Das Sir"
  },
  {
    name: "A001",
    image: "img/info box/search box/A001.jpg",
    description: "A001 is the Lecture Hall in RND"
  },
  {
    name: "A002",
    image: "img/info box/search box/A002.jpg",
    description: "A002 is the Lecture Hall in RND"
  },
  {
    name: "A003",
    image: "img/info box/search box/A003.jpg",
    description: "A003 is the Lecture Hall in RND"
  },
  {
    name: "A004",
    image: "img/info box/search box/A004.jpg",
    description: "A004 is the Lecture Hall in RND"
  },
  {
    name: "Audio Visual",
    image: "img/info box/search box/A005.jpg",
    description: "A005 is the Audio Visual in RND"
  },
  {
    name: "A006",
    image: "img/info box/search box/A006.jpg",
    description: "A006 is the Lecture Hall in RND"
  },
  {
    name: "A007",
    image: "img/info box/search box/A007.jpg",
    description: "A007 is the Lecture Hall in RND"
  },
  {
    name: "A101",
    image: "img/info box/search box/A101.jpg",
    description: "A101 is the Lecture Hall in RND"
  },
  {
    name: "Audio Studio",
    image: "img/info box/search box/A102.jpg",
    description: "A102 is the Audio Studio in RND"
  },
  {
    name: "Production Control Room",
    image: "img/info box/search box/A103.jpg",
    description: "A103 is the Production Control Room in RND"
  },
  {
    name: "Video Studio",
    image: "img/info box/search box/A104.jpg",
    description: "A104 is the Video Studio in RND"
  },
  {
    name: "A106",
    image: "img/info box/search box/A106.jpg",
    description: "A106 is the Lecture Hall in RND"
  },
  {
    name: "Mrinmoy Chakrabarty",
    image: "img/info box/search box/A202.jpg",
    description: "A202 is the office of Mrinmoy Chakrabarty in RND"
  },
  {
    name: "Praveen Priyadarshi Sir",
    image: "img/info box/search box/A203.jpg",
    description: "A203 is the office of Praveen Priyadarshi Sir in RND"
  },
  {
    name: "Soibam Haripriya",
    image: "img/info box/search box/A204.jpg",
    description: "A204 is the office of Soibam Haripriya in RND"
  },
  {
    name: "Nishad Patnaik Sir",
    image: "img/info box/search box/A205.jpg",
    description: "A205 is the office of Nishad Patnaik Sir in RND"
  },
  {
    name: "Satish Kumar Pandey Sir",
    image: "img/info box/search box/A206.jpg",
    description: "A206 is the office of Satish Kumar Pandey Sir in RND"
  },
  {
    name: "Deepak Prince Sir",
    image: "img/info box/search box/A210.jpg",
    description: "A210 is the office of Deepak Prince Sir in RND"
  },
  {
    name: "Prahllad Deb Sir",
    image: "img/info box/search box/A209.jpg",
    description: "A209 is the office of Prahllad Deb Sir in RND"
  },
  {
    name: "Ruhi Sonal Mam",
    image: "img/info box/search box/A211.jpg",
    description: "A211 is the office of Ruhi Sonal Mam in RND"
  },
  {
    name: "Garima Rani Mam",
    image: "img/info box/search box/A301.jpg",
    description: "A301 is the office of Garima Rani Mam in RND"
  },
  {
    name: "G.P.S Raghava Sir",
    image: "img/info box/search box/A302.jpg",
    description: "A302 is the office of G.P.S Raghava Sir in RND"
  },
  {
    name: "Gaurav Ahuja Sir",
    image: "img/info box/search box/A303.jpg",
    description: "A303 is the office of Gaurav Ahuja Sir in RND"
  },
  {
    name: "Vibhor Kumar Sir",
    image: "img/info box/search box/A304.jpg",
    description: "A304 is the office of Vibhor Kumar Sir in RND"
  },
  {
    name: "Ganesh Bagler Sir",
    image: "img/info box/search box/A305.jpg",
    description: "A305 is the office of Ganesh Bagler Sir in RND"
  },
  {
    name: "Debarkar Sengupta Sir",
    image: "img/info box/search box/A306.jpg",
    description: "A306 is the office of Debarkar Sengupta Sir in RND"
  },
  {
    name: "Jaspreet Kaur Dhanjal Mam",
    image: "img/info box/search box/A307.jpg",
    description: "A307 is the office of Jaspreet Kaur Dhanjal Mam in RND"
  },
  {
    name: "Sriram K. Sir",
    image: "img/info box/search box/A308.jpg",
    description: "A308 is the office of Sriram K. Sir in RND"
  },
  {
    name: "Tavpritesh Sethi Sir",
    image: "img/info box/search box/A309.jpg",
    description: "A309 is the office of Tavpritesh Sethi Sir in RND"
  },
  {
    name: "Arjun Ray Sir",
    image: "img/info box/search box/A310.jpg",
    description: "A310 is the office of Arjun Ray Sir in RND"
  },
  {
    name: "N.Arul Murugan Sir",
    image: "img/info box/search box/A311.jpg",
    description: "A311 is the office of N.Arul Murugan Sir in RND"
  },
  {
    name: "Tarini Shankar Ghosh Sir",
    image: "img/info box/search box/A312.jpg",
    description: "A312 is the office of Tarini Shankar Ghosh Sir in RND"
  },
  {
    name: "Public Health Lab",
    image: "img/info box/search box/A316.jpg",
    description: "A316 is the AI/ML for Medicine and Public Health Lab in RND"
  },
  {
    name: "A320",
    image: "img/info box/search box/A320.jpg",
    description: "A320 is the Meeting Room in RND"
  },
  {
    name: "Binu Annu Joseph Sir",
    image: "img/info box/search box/A401.jpg",
    description: "A401 is the office of Binu Annu Joseph Sir in RND"
  },
  {
    name: "Kalpana Shankhwar Mam",
    image: "img/info box/search box/A403.jpg",
    description: "A403 is the office of Kalpana Shankhwar Mam in RND"
  },
  {
    name: "Anmol Srivastava Sir",
    image: "img/info box/search box/A404.jpg",
    description: "A404 is the office of Anmol Srivastava Sir in RND"
  },
  {
    name: "Sonal Keshwani Mam",
    image: "img/info box/search box/A405.jpg",
    description: "A405 is the office of Sonal Keshwani Mam in RND"
  },
  {
    name: "Richa Gupta Mam",
    image: "img/info box/search box/A406.jpg",
    description: "A406 is the office of Richa Gupta Mam in RND"
  },
  {
    name: "Rajiv Ratn Shah Sir",
    image: "img/info box/search box/A409.jpg",
    description: "A409 is the office of Rajiv Ratn Shah Sir in RND"
  },
  {
    name: "Jainendra Shukla Sir",
    image: "img/info box/search box/A410.jpg",
    description: "A410 is the office of Jainendra Shukla Sir in RND"
  },
  {
    name: "Pragma Kar Mam",
    image: "img/info box/search box/A411.jpg",
    description: "A411 is the office of Pragma Kar Mam in RND"
  },
  {
    name: "Midas Lab",
    image: "img/info box/search box/A415.jpg",
    description: "A415 is the Midas Lab in RND"
  },
  {
    name: "Creative Interfaces Lab",
    image: "img/info box/search box/A416.jpg",
    description: "A416 is the Creative Interfaces Lab in RND"
  },
  {
    name: "Dreamrs Lab",
    image: "img/info box/search box/A418.jpg",
    description: "A418 is the Dreamrs Lab in RND"
  },
  {
    name: "Design Studio",
    image: "img/info box/search box/A419.jpg",
    description: "A419 is the Design Studio in RND"
  },
  {
    name: "Imran Khan Sir",
    image: "img/info box/search box/A501.jpg",
    description: "A501 is the office of Imran Khan Sir in RND"
  },
  {
    name: "Piyush Bagga Sir",
    image: "img/info box/search box/A501.jpg",
    description: "A501 is the office of Piyush Bagga Sir in RND"
  },
  {
    name: "Pushpendra Singh Sir",
    image: "img/info box/search box/A502.jpg",
    description: "A502 is the office of Pushpendra Singh Sir in RND"
  },
  {
    name: "Ravi Anand Sir",
    image: "img/info box/search box/A503.jpg",
    description: "A503 is the office of Ravi Anand Sir in RND"
  },
  {
    name: "Piyus Kedia Sir",
    image: "img/info box/search box/A505.jpg",
    description: "A505 is the office of Piyus Kedia Sir in RND"
  },
  {
    name: "Dhruv Kumar Sir",
    image: "img/info box/search box/A506.jpg",
    description: "A506 is the office of Dhruv Kumar Sir in RND"
  },
  {
    name: "Mukesh Mohania Sir",
    image: "img/info box/search box/A507.jpg",
    description: "A507 is the office of Mukesh Mohania Sir in RND"
  },
  {
    name: "Vikram Goyal Sir",
    image: "img/info box/search box/A508.jpg",
    description: "A508 is the office of Vikram Goyal Sir in RND"
  },
  {
    name: "B.N Jain Sir",
    image: "img/info box/search box/A509.jpg",
    description: "A509 is the office of B.N Jain Sir in RND"
  },
  {
    name: "Gautam Shroff Sir",
    image: "img/info box/search box/A510.jpg",
    description: "A510 is the office of Gautam Shroff Sir in RND"
  },
  {
    name: "Ojaswa Sharma Sir",
    image: "img/info box/search box/A511.jpg",
    description: "A511 is the office of Ojaswa Sharma Sir in RND"
  },
  {
    name: "Tanmoy Kundu Sir",
    image: "img/info box/search box/A512.jpg",
    description: "A512 is the office of Tanmoy Kundu Sir in RND"
  },
  {
    name: "Graphics Research Group",
    image: "img/info box/search box/A513.jpg",
    description: "A513 is the office of Graphics Research Group in RND"
  },
  {
    name: "Systems & Software Engineering",
    image: "img/info box/search box/A518.jpg",
    description: "A518 is the office of Systems and Software Engineering in RND"
  },
  {
    name: "General Computing Lab",
    image: "img/info box/search box/A519.jpg",
    description: "A519 is the General Computing Lab in RND"
  },
  {
    name: "A520",
    image: "img/info box/search box/A520.jpg",
    description: "A520 is the Meeting Room in RND"
  },
  {
    name: "Sanjna Khosla Mam",
    image: "img/info box/search box/A601.jpg",
    description: "A601 is the office of Sanjna Khosla Mam in RND"
  },
  {
    name: "Tammam Tilo Sir",
    image: "img/info box/search box/A602.jpg",
    description: "A602 is the office of Tammam Tilo Sir in RND"
  },
  {
    name: "Sayan Basu Roy Sir",
    image: "img/info box/search box/A603.jpg",
    description: "A603 is the office of Sayan Basu Roy Sir in RND"
  },
  {
    name: "Pravesh Biyani Sir",
    image: "img/info box/search box/A604.jpg",
    description: "A604 is the office of Pravesh Biyani Sir in RND"
  },
  {
    name: "Abhijit Mitra Sir",
    image: "img/info box/search box/A605.jpg",
    description: "A605 is the office of Abhijit Mitra Sir in RND"
  },
  {
    name: "Debidas Kundu Sir",
    image: "img/info box/search box/A606.jpg",
    description: "A606 is the office of Debidas Kundu Sir in RND"
  },
  {
    name: "Sujay Deb Sir",
    image: "img/info box/search box/A607.jpg",
    description: "A607 is the office of Sujay Deb Sir in RND"
  },
  {
    name: "Manuj Mukherjee Sir",
    image: "img/info box/search box/A608.jpg",
    description: "A608 is the office of Manuj Mukherjee Sir in RND"
  },
  {
    name: "Vivek Ashok Bohara Sir",
    image: "img/info box/search box/A609.jpg",
    description: "A609 is the office of Vivek Ashok Bohara Sir in RND"
  },
  {
    name: "Mobility & Optimisation Lab",
    image: "img/info box/search box/A611.jpg",
    description: "A611 is the Mobility & Optimisation Lab in RND"
  },
  {
    name: "Advanced Multi-Core Systems Lab",
    image: "img/info box/search box/A613.jpg",
    description: "A613 is the Advanced Multi-Core Systems Lab in RND"
  },
  {
    name: "Metasurface Research Lab",
    image: "img/info box/search box/A614.jpg",
    description: "A614 is the Metasurface Research Lab in RND"
  },
  {
    name: "Centre of excellence - LiFi",
    image: "img/info box/search box/A614.jpg",
    description: "A614 is the Centre of excellence - LiFi in RND"
  },
  {
    name: "Optical Networks Lab",
    image: "img/info box/search box/A614.jpg",
    description: "A614 is the Optical Networks Lab in RND"
  },
  {
    name: "Advanced Electronics & Communication Lab",
    image: "img/info box/search box/A616.jpg",
    description: "A616 is the Advanced Electronics & Communication Lab in RND"
  },
  {
    name: "M.Tech Lab",
    image: "img/info box/search box/A617.jpg",
    description: "A617 is the M.Tech Lab in RND"
  },
  {
    name: "A618",
    image: "img/info box/search box/A618.jpg",
    description: "A618 is the Meeting Room in RND"
  },
  {
    name: "Ajay Kumar Sir",
    image: "img/info box/search box/AJAY KUMAR.jpg",
    description: "Ajay Kumar Sir office in Old Academic Building"
  },
  {
    name: "Ankit Agarwal Sir",
    image: "img/info box/search box/B-101.jpg",
    description: "B-101 is the office of Ankit Agarwal Sir in Old Academic Building"
  },
  {
    name: "IT Helpdesk",
    image: "img/info box/search box/B-102.jpg",
    description: "B-102 is the IT Helpdesk in Old Academic Building"
  },
  {
    name: "Adarsh Agarwal Sir",
    image: "img/info box/search box/B-104.jpg",
    description: "B-104 is the office of Adarsh Agarwal in Old Academic Building"
  },
  {
    name: "Bhawani Shah Mam",
    image: "img/info box/search box/B-104.jpg",
    description: "B-104 is the office of Bhawani Shah Mam in Old Academic Building"
  },
  {
    name: "Rahul Verma Sir",
    image: "img/info box/search box/B-104.jpg",
    description: "B-104 is the office of Rahul Verma Sir in Old Academic Building"
  },
  {
    name: "Yogesh Sangwan Sir",
    image: "img/info box/search box/B-104.jpg",
    description: "B-104 is the office of Yogesh Sangwan Sir in Old Academic Building"
  },
  {
    name: "Abhinay Saxena Sir",
    image: "img/info box/search box/B-105.jpg",
    description: "B-105 is the office of Abhinay Saxena Sir in Old Academic Building"
  },
  {
    name: "IT Training Room",
    image: "img/info box/search box/B-106.jpg",
    description: "B-106 is the IT Training Room in Old Academic Building"
  },
  {
    name: "Ravi Bhasin Sir",
    image: "img/info box/search box/B-201.jpg",
    description: "B-201 is the office of Ravi Bhasin Sir in Old Academic Building"
  },
  {
    name: "Audit Room & Legal Cell",
    image: "img/info box/search box/B-202.jpg",
    description: "B-202 is the Audit Room & Legal Cell in Old Academic Building"
  },
  {
    name: "Deepika Bhaskar Mam",
    image: "img/info box/search box/B-204.jpg",
    description: "B-204 is the office of Deepika Bhaskar Mam in Old Academic Building"
  },
  {
    name: "Registrar Office",
    image: "img/info box/search box/B-204.jpg",
    description: "B-204 is the office of Registrar in Old Academic Building"
  },
  {
    name: "Pallavi Kaushik Mam",
    image: "img/info box/search box/B-206.jpg",
    description: "B-206 is the office of Pallavi Kaushik Mam in Old Academic Building"
  },
  {
    name: "Deepali Gupta Mam",
    image: "img/info box/search box/B-206.jpg",
    description: "B-206 is the office of Deepali Gupta Mam in Old Academic Building"
  },
  {
    name: "B207",
    image: "img/info box/search box/B-207.jpg",
    description: "B-207 is a room in Old Academic Building"
  },
  {
    name: "B208",
    image: "img/info box/search box/B-208.jpg",
    description: "B-208 is a room in Old Academic Building"
  },
  {
    name: "B001",
    image: "img/info box/search box/B001.jpg",
    description: "B-001 is a Meeting room in RND"
  },
  {
    name: "B002",
    image: "img/info box/search box/B002.jpg",
    description: "B-002 is a Meeting room in RND"
  },
  {
    name: "B003",
    image: "img/info box/search box/B003.jpg",
    description: "B-003 is a Lecture Hall in RND"
  },
  {
    name: "Design & Innovation Lab",
    image: "img/info box/search box/B004.jpg",
    description: "B-004 is a Design & Innovation Lab in RND"
  },
  {
    name: "B101",
    image: "img/info box/search box/B101.jpg",
    description: "B-101 is a Lecture Hall in RND"
  },
  {
    name: "Faculty Lounge",
    image: "img/info box/search box/B102.jpg",
    description: "B-102 is a Faculty Lounge in RND"
  },
  {
    name: "B105",
    image: "img/info box/search box/B105.jpg",
    description: "B-105 is a Lecture Hall in RND"
  },
  {
    name: "Venkata Ratnadeep Suri Sir",
    image: "img/info box/search box/B204.jpg",
    description: "B-204 is the office of Venkata Ratnadeep Suri Sir in RND"
  },
  {
    name: "J.V Meenakshi Mam",
    image: "img/info box/search box/B205.jpg",
    description: "B-205 is the office of J.V Meenakshi Mam in RND"
  },
  {
    name: "Gaurav Arora Sir",
    image: "img/info box/search box/B206.jpg",
    description: "B-206 is the office of Gaurav Arora Sir in RND"
  },
  {
    name: "Manohar Kumar Sir",
    image: "img/info box/search box/B207.jpg",
    description: "B-207 is the office of Manohar Kumar Sir in RND"
  },
  {
    name: "Kiriti Kanjilal Mam",
    image: "img/info box/search box/B208.jpg",
    description: "B-208 is the office of Kiriti Kanjilal Mam in RND"
  },
  {
    name: "Paro Mishra Mam",
    image: "img/info box/search box/B209.jpg",
    description: "B-209 is the office of Paro Mishra Mam in RND"
  },
  {
    name: "Sonia Baloni Ray Mam",
    image: "img/info box/search box/B210.jpg",
    description: "B-210 is the office of Sonia Baloni Ray Mam in RND"
  },
  {
    name: "Smriti Singh Mam",
    image: "img/info box/search box/B211.jpg",
    description: "B-211 is the office of Smriti Singh Mam in RND"
  },
  {
    name: "Gayatri Nair Mam",
    image: "img/info box/search box/B212.jpg",
    description: "B-212 is the office of Gayatri Nair Mam in RND"
  },
  {
    name: "Urban Research Lab",
    image: "img/info box/search box/B215.jpg",
    description: "B-215 is the Urban Research Lab in RND"
  },
  {
    name: "Computational Social Sciences Lab",
    image: "img/info box/search box/B216.jpg",
    description: "B-216 is the Computational Social Sciences Lab in RND"
  },
  {
    name: "Cognitive Science Lab",
    image: "img/info box/search box/B218.jpg",
    description: "B-218 is the Cognitive Science Lab in RND"
  },
  {
    name: "Game Theory & Market Design Lab",
    image: "img/info box/search box/B219.jpg",
    description: "B-219 is the Game Theory & Market Design Lab in RND"
  },
  {
    name: "Kaushik Kalyanaraman Sir",
    image: "img/info box/search box/B302.jpg",
    description: "B-302 is the office of Kaushik Kalyanaraman Sir in RND"
  },
  {
    name: "Sarthok Sircar Sir",
    image: "img/info box/search box/B303.jpg",
    description: "B-303 is the office of Sarthok Sircar Sir in RND"
  },
  {
    name: "Monika Arora Mam",
    image: "img/info box/search box/B304.jpg",
    description: "B-304 is the office of Monika Arora Mam in RND"
  },
  {
    name: "Prahllad Deb Sir",
    image: "img/info box/search box/B305.jpg",
    description: "B-305 is the office of Prahllad Deb Sir in RND"
  },
  {
    name: "Sankha S Basu Sir",
    image: "img/info box/search box/B306.jpg",
    description: "B-306 is the office of Sankha S Basu Sir in RND"
  },
  {
    name: "Ashish Kumar Pandey Sir",
    image: "img/info box/search box/B307.jpg",
    description: "B-307 is the office of Ashish Kumar Pandey Sir in RND"
  },
  {
    name: "Sneha Chaubey Mam",
    image: "img/info box/search box/B308.jpg",
    description: "B-308 is the office of Sneha Chaubey Mam in RND"
  },
  {
    name: "Subhashree Mohapatra Mam",
    image: "img/info box/search box/B309.jpg",
    description: "B-309 is the office of Subhashree Mohapatra Mam in RND"
  },
  {
    name: "Debika Banerjee Mam",
    image: "img/info box/search box/B310.jpg",
    description: "B-310 is the office of Debika Banerjee Mam in RND"
  },
  {
    name: "Anuradha Sharma Mam",
    image: "img/info box/search box/B311.jpg",
    description: "B-311 is the office of Anuradha Sharma Mam in RND"
  },
  {
    name: "Nabanita Ray Mam",
    image: "img/info box/search box/B312.jpg",
    description: "B-312 is the office of Nabanita Ray Mam in RND"
  },
  {
    name: "Maryam Mirzakhani Research Lab",
    image: "img/info box/search box/B313.jpg",
    description: "B-313 is the Maryam Mirzakhani Research Lab in RND"
  },
  {
    name: "Paul Erdos Research Lab",
    image: "img/info box/search box/B315.jpg",
    description: "B-315 is the Paul Erdos Research Lab in RND"
  },
  {
    name: "Math Innovation Lab",
    image: "img/info box/search box/B316.jpg",
    description: "B-316 is the Math Innovation Lab in RND"
  },
  {
    name: "M.Tech Lab 2",
    image: "img/info box/search box/B318.jpg",
    description: "B-318 is the M.Tech Lab 2 in RND"
  },
  {
    name: "M.Tech Lab 1",
    image: "img/info box/search box/B319.jpg",
    description: "B-319 is the M.Tech Lab 1 in RND"
  },
  {
    name: "Aayushi Shishodia Mam",
    image: "img/info box/search box/B401.jpg",
    description: "B-401 is the office of Aayushi Shishodia Mam in RND"
  },
  {
    name: "Bapi Chatterjee Sir",
    image: "img/info box/search box/B402.jpg",
    description: "B-402 is the office of Bapi Chatterjee Sir in RND"
  },
  {
    name: "Ranjitha Prasad Mam",
    image: "img/info box/search box/B403.jpg",
    description: "B-403 is the office of Ranjitha Prasad Mam in RND"
  },
  {
    name: "Raghava Mutharaju Sir",
    image: "img/info box/search box/B404.jpg",
    description: "B-404 is the office of Raghava Mutharaju Sir in RND"
  },
  {
    name: "Md.Shad Akhtar Sir",
    image: "img/info box/search box/B406.jpg",
    description: "B-406 is the office of Md.Shad Akhtar Sir in RND"
  },
  {
    name: "Vinayak Abrol Sir",
    image: "img/info box/search box/B409.jpg",
    description: "B-409 is the office of Vinayak Abrol Sir in RND"
  },
  {
    name: "Saket Anand Sir",
    image: "img/info box/search box/B410.jpg",
    description: "B-410 is the office of Saket Anand Sir in RND"
  },
  {
    name: "Sanjit Kaul Sir",
    image: "img/info box/search box/B411.jpg",
    description: "B-411 is the office of Sanjit Kaul Sir in RND"
  },
  {
    name: "Shamik Sarkar Sir",
    image: "img/info box/search box/B412.jpg",
    description: "B-412 is the office of Shamik Sarkar Sir in RND"
  },
  {
    name: "NAS Lab",
    image: "img/info box/search box/B413.jpg",
    description: "B-413 is the NAS Lab in RND"
  },
  {
    name: "Vision Lab",
    image: "img/info box/search box/B413.jpg",
    description: "B-413 is the Vision Lab in RND"

  },
  {
    name: "Flame",
    image: "img/info box/search box/B415.jpg",
    description: "B-415 is the Flame in RND"
  },
  {
    name: "Nice Lab",
    image: "img/info box/search box/B416.jpg",
    description: "B-416 is the Nice Lab in RND"
  },
  {
    name: "Kracr Lab",
    image: "img/info box/search box/B416.jpg",
    description: "B-416 is the Kracr Lab in RND"
  },
  {
    name: "Cross-Caps Lab",
    image: "img/info box/search box/B418.jpg",
    description: "B-418 is the Cross-Caps Lab in RND"
  },
  {
    name: "Distributed Computing & Learning Lab",
    image: "img/info box/search box/B418.jpg",
    description: "B-418 is the Distributed Computing & Learning Lab in RND"
  },
  {
    name: "Iras Hub",
    image: "img/info box/search box/B419.jpg",
    description: "B-419 is the Iras Hub in RND"
  },
  {
    name: "Diptapriyo Majumdar Mam",
    image: "img/info box/search box/B501.jpg",
    description: "B-501 is the office of Diptapriyo Majumdar Mam in RND"
  },
  {
    name: "Rinku Shah Sir",
    image: "img/info box/search box/B502.jpg",
    description: "B-502 is the office of Rinku Shah Sir in RND"
  },
  {
    name: "Sambuddho Sir",
    image: "img/info box/search box/B503.jpg",
    description: "B-503 is the office of Sambuddho Sir in RND"
  },
  {
    name: "Arun Balaji Buduru Sir",
    image: "img/info box/search box/B504.jpg",
    description: "B-504 is the office of Arun Balaji Buduru Sir in RND"
  },
  {
    name: "Syamantak Das Sir",
    image: "img/info box/search box/B505.jpg",
    description: "B-505 is the office of Syamantak Das Sir in RND"
  },
  {
    name: "Vivek Kumar Sir",
    image: "img/info box/search box/B506.jpg",
    description: "B-506 is the office of Vivek Kumar Sir in RND"
  },
  {
    name: "Rajiv Raman Sir",
    image: "img/info box/search box/B507.jpg",
    description: "B-507 is the office of Rajiv Raman Sir in RND"
  },
  {
    name: "Debajyoti Bera Mam",
    image: "img/info box/search box/B508.jpg",
    description: "B-508 is the office of Debajyoti Bera Mam in RND"
  },
  {
    name: "Mukulika Maity Mam",
    image: "img/info box/search box/B509.jpg",
    description: "B-509 is the office of Mukulika Maity Mam in RND"
  },
  {
    name: "Arani Bhattacharya Sir",
    image: "img/info box/search box/B510.jpg",
    description: "B-510 is the office of Arani Bhattacharya Sir in RND"
  },
  {
    name: "Nikhil Gupta Sir",
    image: "img/info box/search box/B511.jpg",
    description: "B-511 is the office of Nikhil Gupta Sir in RND"
  },
  {
    name: "Supratim Shit Sir",
    image: "img/info box/search box/B512.jpg",
    description: "B-512 is the office of Supratim Shit Sir in RND"
  },
  {
    name: "Theoretical Computer Science Lab",
    image: "img/info box/search box/B513.jpg",
    description: "B-513 is the Theoretical Computer Science Lab in RND"
  },
  {
    name: "Systems & Networks Lab",
    image: "img/info box/search box/B515.jpg",
    description: "B-515 is the Systems & Networks Lab in RND"
  },
  {
    name: "Usable Security Group",
    image: "img/info box/search box/B516.jpg",
    description: "B-516 is the Usable Security Group in RND"
  },
  {
    name: "Cryptography Lab",
    image: "img/info box/search box/B518.jpg",
    description: "B-518 is the Cryptography Lab in RND"
  },
  // {
  //   name: "General Computing Lab",
  //   image: "img/info box/search box/B519.jpg",
  //   description: "B-519 is the General Computing Lab in RND"
  // },
  {
    name: "Ram Krishna Ghosh Sir",
    image: "img/info box/search box/B601.jpg",
    description: "B-601 is the office of Ram Krishna Ghosh Sir in RND"
  },
  {
    name: "Sanat K Biswas Sir",
    image: "img/info box/search box/B602.jpg",
    description: "B-602 is the office of Sanat K Biswas Sir in RND"
  },
  {
    name: "Sayak Bhattacharya Sir",
    image: "img/info box/search box/B603.jpg",
    description: "B-603 is the office of Sayak Bhattacharya Sir in RND"
  },
  {
    name: "A V Subramanyam Sir",
    image: "img/info box/search box/B604.jpg",
    description: "B-604 is the office of A V Subramanyam Sir in RND"
  },
  {
    name: "Sumit J Darak Sir",
    image: "img/info box/search box/B605.jpg",
    description: "B-605 is the office of Sumit J Darak Sir in RND"
  },
  {
    name: "Shobha Sundar Ram Sir",
    image: "img/info box/search box/B606.jpg",
    description: "B-606 is the office of Shobha Sundar Ram Sir in RND"
  },
  {
    name: "Pragya Kosta Mam",
    image: "img/info box/search box/B607.jpg",
    description: "B-607 is the office of Pragya Kosta Mam in RND"
  },
  {
    name: "Sneh Saurabh Sir",
    image: "img/info box/search box/B608.jpg",
    description: "B-608 is the office of Sneh Saurabh Sir in RND"
  },
  {
    name: "Anubha Gupta Mam",
    image: "img/info box/search box/B609.jpg",
    description: "B-609 is the office of Anubha Gupta Mam in RND"
  },
  {
    name: "Prasad Vilas Chanekar Sir",
    image: "img/info box/search box/B610.jpg",
    description: "B-610 is the office of Prasad Vilas Chanekar Sir in RND"
  },
  {
    name: "SBI Lab",
    image: "img/info box/search box/B611.jpg",
    description: "B-611 is the SBI Lab in RND"
  },
  {
    name: "Algorithms to Architecture Lab",
    image: "img/info box/search box/B613.jpg",
    description: "B-613 is the Algorithms to Architecture Lab in RND"
  },
  {
    name: "Space Systems Lab",
    image: "img/info box/search box/B616.jpg",
    description: "B-616 is the Space Systems Lab in RND"
  },
  {
    name: "Automatic Control Lab",
    image: "img/info box/search box/B616.jpg",
    description: "B-616 is the Automatic Control Lab in RND"
  },
  {
    name: "C01",
    image: "img/info box/search box/C01.jpg",
    description: "C-01 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C02",
    image: "img/info box/search box/C02.jpg",
    description: "C-02 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C03",
    image: "img/info box/search box/C03.jpg",
    description: "C-03 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C11",
    image: "img/info box/search box/C11.jpg",
    description: "C-11 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C12",
    image: "img/info box/search box/C12.jpg",
    description: "C-12 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C13",
    image: "img/info box/search box/C13.jpg",
    description: "C-13 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C21",
    image: "img/info box/search box/C21.jpg",
    description: "C-21 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C22",
    image: "img/info box/search box/C22.jpg",
    description: "C-22 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C23",
    image: "img/info box/search box/C23.jpg",
    description: "C-23 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "C24",
    image: "img/info box/search box/C24.jpg",
    description: "C-24 is the Tutorial Room in Old Academic Building"
  },
  {
    name: "Center For Technology & Policing",
    image: "img/info box/search box/CENTER FOR TECH.jpg",
    description: "Center For Technology & Policing is the Center in Old Academic Building"
  },
  {
    name: "Finance Executive",
    image: "img/info box/search box/CHETAN AGGARWAL.jpg",
    description: "Chetan Aggarwal Sir is the Finance Executive in Old Academic Building"
  },
  {
    name: "Chetan Aggarwal Sir",
    image: "img/info box/search box/CHETAN AGGARWAL.jpg",
    description: "Chetan Aggarwal Sir is the Finance Executive in Old Academic Building"
  },
  {
    name: "Finance & Account Dept",
    image: "img/info box/search box/FINANCE & PURCHASE DEPT.jpg",
    description: "Finance & Account Dept is in Old Academic Building"
  },
  {
    name: "Store & Purchase Dept",
    image: "img/info box/search box/FINANCE & PURCHASE DEPT.jpg",
    description: "Store & Purchase Dept is in Old Academic Building"
  },
  {
    name: "Health Center",
    image: "img/info box/search box/HEALTH CENTER.jpg",
    description: "Health Center is in the Mess & Canteen Area"
  },
  {
    name: "HR Dept",
    image: "img/info box/search box/HR & STUDENT DEPT.jpg",
    description: "HR Dept is in Old Academic Building"
  },
  {
    name: "Student Affairs Dept",
    image: "img/info box/search box/HR & STUDENT DEPT.jpg",
    description: "Student Affairs Dept is in Old Academic Building"
  },
  {
    name: "Project & Operation Dept",
    image: "img/info box/search box/HR & STUDENT DEPT.jpg",
    description: "Project & Operation Dept is in Old Academic Building"
  },
  {
    name: "Chief Operating Officer",
    image: "img/info box/search box/IMRAN YUSUF.jpg",
    description: "Imran Yusuf Sir is the Chief Operating Officer in Old Academic Building"
  },
  {
    name: "Imran Yusuf Sir",
    image: "img/info box/search box/IMRAN YUSUF.jpg",
    description: "Imran Yusuf Sir is the Chief Operating Officer in Old Academic Building"
  },
  {
    name: "IT Dept",
    image: "img/info box/search box/IT DEPT.jpg",
    description: "IT Dept is in Old Academic Building"
  },
  {
    name: "Placement & IOP Office",
    image: "img/info box/search box/PLACEMENT OFFICE.jpg",
    description: "Placement & IOP Office is in LHC"
  },
  {
    name: "Registrar Office",
    image: "img/info box/search box/REGISTRAR & ACAD DEPT.jpg",
    description: "Registrar Office is in Old Academic Building"
  },
  {
    name: "Academic Dept",
    image: "img/info box/search box/REGISTRAR & ACAD DEPT.jpg",
    description: "Academic Dept is in Old Academic Building"
  },
  {
    name: "Comm & Alumni Dept",
    image: "img/info box/search box/REGISTRAR & ACAD DEPT.jpg",
    description: "Comm & Alumni Dept is in Old Academic Building"
  },
  {
    name: "Rubina Thakur Mam",
    image: "img/info box/search box/RUBINA.jpg",
    description: "Office of Rubina Thakur Mam is in RND"
  },
  {
    name: "Sanjay Roy Sir",
    image: "img/info box/search box/SANJAY ROY.jpg",
    description: "Office of Sanjay Roy Sir is in Old Academic Building"
  },
  

  
];

// === Current State ===
let currentIndex = 0;
let isInNavigation = false;
let currentPath = [];
let pathIndex = 0;

// 🔄 Change slide
function changeSlide(direction) {
  if (isInNavigation) {
    pathIndex = (pathIndex + direction + currentPath.length) % currentPath.length;
    currentIndex = currentPath[pathIndex];
  } else {
    currentIndex = (currentIndex + direction + slideElements.length) % slideElements.length;
  }
  updateSlide();
}

// 🔄 Update slide view
function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
  updateActiveMarker();
}

// 🎯 Highlight active marker
function updateActiveMarker() {
  markers.forEach((marker, index) => {
    marker.classList.toggle('active', index === currentIndex);
  });
}

// ℹ️ Show info box by name
function showInfoBoxByName(name) {
  const data = infoData.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (!data) {
    alert(`No information available for "${name}"`);
    return;
  }
  infoImg.src = data.image;
  infoTitle.textContent = data.name;
  infoDescription.textContent = data.description;
  infoBox.classList.remove('hidden');
}

// ❌ Close info box
closeBtn.addEventListener('click', () => {
  infoBox.classList.add('hidden');
});

// 🎯 Marker click handling
markers.forEach(marker => {
  marker.addEventListener('click', () => {
    const name = marker.getAttribute('data-name');
    showInfoBoxByName(name);
  });

  marker.addEventListener('mouseenter', () => {
    marker.classList.add('active');
  });

  marker.addEventListener('mouseleave', () => {
    marker.classList.remove('active');
  });
});

// 🧭 Navigate button
navigateBtn.addEventListener('click', () => {
  const destination = infoTitle.textContent;
  window.location.href = `streetview/index.html?destination=${encodeURIComponent(destination)}`;
});

// 🗺️ Start navigation (optional in home)
function startNavigation(destination) {
  const path = PATH_MAP[destination]; // Using PATH_MAP from path.js
  if (!path) {
    alert(`No path defined for ${destination}`);
    return;
  }
  isInNavigation = true;
  currentPath = path;
  pathIndex = 0;
  currentIndex = path[0];
  updateSlide();
  backToStreetBtn.classList.remove('hidden');
}

// 🔙 Exit navigation
backToStreetBtn?.addEventListener('click', () => {
  isInNavigation = false;
  currentPath = [];
  pathIndex = 0;
  backToStreetBtn.classList.add('hidden');
  updateSlide();
});

// === Loader Handling ===
function hideLoader() {
  document.body.classList.add('loaded');
}

window.addEventListener('load', hideLoader);

setTimeout(() => {
  if (!document.body.classList.contains('loaded')) {
    console.warn('Loader timeout triggered!');
    hideLoader();
  }
}, 6000);

// === Search and Suggestions ===

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchContainer = document.querySelector('.search-container');

// Create suggestion box
const suggestionBox = document.createElement('div');
suggestionBox.classList.add('suggestion-box');
searchContainer.appendChild(suggestionBox);

// List of locations for search
const searchLocations = infoData.map(loc => loc.name);

// Listen to input for suggestions
searchInput.addEventListener('input', () => {
  const input = searchInput.value.trim();
  suggestionBox.innerHTML = '';

  if (input.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  const filtered = searchLocations.filter(name =>
    name.toLowerCase().includes(input.toLowerCase())
  );

  if (filtered.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  filtered.forEach(name => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item');
    div.textContent = name;
    div.addEventListener('click', () => {
      searchInput.value = name;
      suggestionBox.style.display = 'none';
      handleSearchSelection(name);
    });
    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = 'block';
});

// 🔍 Search Button Click
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    handleSearchSelection(query);
  }
});

// 🔥 Function to handle search result
function handleSearchSelection(destination) {
  showInfoBoxByName(destination);
}

