import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import images and video
import LockedInLogo from "/LockedInLogo.png";
import UnlockIcon from "/Unlock.png";
import ConceptVideoMP4 from "/video.mp4";
import ConceptVideo from "/video.mov";

// Add this type definition and team members array before the App component
type TeamMember = {
  name: string;
  photo: string;
  role: string
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Alexander Y.",
    photo: "Alex.jpg",
    role: "Designer/Developer",
    bio: "Alexander is a sophomore studying Physics and Computer Science at Stanford. He conducts research on fast Machine Learning and Quantum Information Technology, but is also passionate about about building products that are both useful and accessible to everyone.",
  },
  {
    name: "Evan H.",
    photo: "Evan.jpg",
    role: "Designer/Developer",
    bio: "Evan is a coterm at Stanford studying Human-Computer Interaction. When he’s not playing fingerstyle guitar, he’s teaching—co-leading Ravenswood Reads and a karate class for Kids with Dreams. ",
  },
  {
    name: "Diego V.D.",
    photo: "Diego.jpg",
    role: "Designer/Developer",
    bio: "Diego is master's student studying HCI with an AI undergraduate background at Stanford University. He’s interested in integrated AI systems within everyday applications to better people’s lives. ",
  },
  {
    name: "Ecem Y.",
    photo: "Ecem.jpg",
    role: "Designer/Developer",
    bio: "Ecem is a senior studying Computer Science at Stanford. ",
  },
];

// Add this type definition and features array before the App component
type Feature = {
  title: string;
  details: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Join Public Study Sessions",
    details: "View and host study sessions for your whole campus.",
    image: "EventsGraphic.JPEG",
  },
  {
    title: "Deconstruct Assignments",
    details:
      "Upload class materials and assignments and let our AI deconstruct them into manageable tasks.",
    image: "TasksGraphic.JPEG",
  },
  {
    title: "Match With Study Buddies",
    details:
      "Create a study profile and get matched with compatible study buddies in your classes for weekly study sessions.",
    image: "GroupsGraphic.JPEG",
  },
];

export default function App() {
  const projects = [
    {
      title: "Needfinding",
      description: "Interviews and observations",
      details:
        "We listened to the stories of students and professionals, in order to build a clear understanding of both sides of education.",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A1slides.pdf",
        },
        {
          title: "Powerpoint",
          url: window.location.href + "A1.pptx",
        },
      ],
      icon: "fa fa-search", // Search icon for needfinding
    },
    {
      title: "Brainstorming",
      description: "POVs, HMWs, and assumption testing",
      details:
        "After defining issues in the education space, we set out to brainstorm ideas and test assumptions.",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A2slides.pdf",
        },
        {
          title: "Powerpoint",
          url: window.location.href + "A2.pptx",
        },
      ],
      icon: "fa fa-lightbulb", // Lightbulb icon for brainstorming
    },
    {
      title: "Concept Video",
      description: "",
      details:
        "We produced this concept video to illustrate our solution and tasks that we set out to solve.",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A4slides.pdf",
        },
        {
          title: "Powerpoint",
          url: window.location.href + "A4.pptx",
        },
        {
          title: "Video",
          url: window.location.href + "video.mov",
        },
      ],
      icon: "fa fa-video", // Video icon for concept video
    },
    {
      title: "Sketching",
      description: "Low-fidelity prototyping and user testing",
      details:
        "After sketching out some storyboards and task flows, we created a lo-fi prototype on Miro.",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A5slides.pdf",
        },
        {
          title: "Powerpoint",
          url: window.location.href + "A5.pptx",
        },
      ],
      icon: "fa fa-pencil-alt", // Pencil icon for sketching
    },
    {
      title: "First Prototype",
      description: "Medium-fidelity prototyping",
      details:
        "We incorporated feedback from our lo-fi testing to revise our design and create a medium-fi prototype in Figma.",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A6slides.pdf",
        },
        {
          title: "Powerpoint",
          url: window.location.href + "A6.pptx",
        },
        {
          title: "Prototype",
          url: "https://www.figma.com/proto/OCFo0SgSrsXFMxZrXMB7Am/LockedIn-Med-Fi-Prototype?node-id=0-1&t=8s75gByDfe2TJ0c0-1",
        },
        {
          title: "README",
          url: window.location.href + "README.pdf",
        },
      ],
      icon: "fa fa-cube", // Cube icon for prototyping
    },
    {
      title: "Second Prototype",
      description: "High-fidelity prototyping",
      details: "We coded our high-fi prototype, utiliizing React Native...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A8slides.pdf",
        },
        {
          title: "Powerpoint",
          url: window.location.href + "A8.pptx",
        },
        {
          title: "Prototype",
          url: window.location.href + "prototype.pdf",
        },
        {
          title: "README",
          url: window.location.href + "README.md",
        },
      ],
      icon: "fa fa-laptop-code", // Laptop code icon for high-fidelity prototyping
    },
    {
      title: "Heruistic Evaluation",
      description: "",
      details:
        "Using Jakob Nielsen's 'Ten Usability Heuristics' and some additional ones defined in class, our peers created the following report to help guide us in creating a better hi-fi prototype.",
      links: [
        {
          title: "Report",
          url: window.location.href + "A9HE.pdf",
        },
        {
          title: "XLSX",
          url: window.location.href + "A9.xlsx",
        },
      ],
      icon: "fa fa-check-circle", // Check-circle icon for evaluation
    },
    {
      title: "Pitch",
      description: "Poster, pitch deck, and demo video",
      details: "Project details go here...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A10slides.pdf",
        },
        {
          title: "Powerpoint",
          url: window.location.href + "A10.pptx",
        },
        {
          title: "Script",
          url: window.location.href + "script.pdf",
        },
        {
          title: "Poster",
          url: window.location.href + "poster.pdf",
        },
        {
          title: "Demo Video",
          url: window.location.href + "demo.mov",
        },
      ],
      icon: "fa fa-microphone", // Microphone icon for pitch
    },
    {
      title: "Final Report",
      description: "",
      details: "Project details go here...",
      links: [
        {
          title: "Report",
          url: window.location.href + "FR_Midpoint.pdf",
        },
        {
          title: "Word Doc",
          url: window.location.href + "FR_Midpoint.docx",
        },
      ],
      icon: "fa fa-file-alt", // File icon for final report
    },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(true);
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLinks, setSelectedLinks] = useState<
    { title: string; url: string }[]
  >([]);

  useEffect(() => {
    setAnimateLogo(true);
    const timer = setTimeout(() => setAnimateLogo(false), 600); // Changed from 1000 to 600
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimateLogo(true);
    setTimeout(() => setAnimateLogo(false), 600); // Changed from 1000 to 600
  };

  const openDialogAtPosition = (
    x: number,
    y: number,
    projectLinks: { title: string; url: string }[]
  ) => {
    setDialogPosition({ x, y });
    setSelectedLinks(projectLinks);
    setDialogOpen(true);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-darkBlue min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-lightBlue bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-darkBlue/95 dark:border-blue">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <a
                href="#"
                className="mr-6 flex items-center space-x-2"
                onClick={triggerAnimation}
              >
                <span className="font-bold text-blue dark:text-lightBlue">
                  LockedIn
                </span>
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue dark:text-lightBlue"
                >
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white dark:bg-darkBlue">
                <SheetHeader>
                  <SheetTitle className="text-blue dark:text-lightBlue">
                    Navigation
                  </SheetTitle>
                  <SheetDescription>
                    <nav className="flex flex-col space-y-4">
                      <a
                        href="#features"
                        className="text-black dark:text-white hover:text-blue dark:hover:text-lightBlue"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector("#features")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Features
                      </a>
                      <a
                        href="#demo"
                        className="text-black dark:text-white hover:text-blue dark:hover:text-lightBlue"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector("#demo")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Demos
                      </a>
                      <a
                        href="#project"
                        className="text-black dark:text-white hover:text-blue dark:hover:text-lightBlue"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector("#project")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Project
                      </a>
                      <a
                        href="#team"
                        className="text-black dark:text-white hover:text-blue dark:hover:text-lightBlue"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector("#team")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Team
                      </a>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 ml-6">
              <a
                href="#features"
                className="text-black dark:text-white text-sm font-medium transition-colors hover:text-blue dark:hover:text-lightBlue"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#features")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-black dark:text-white text-sm font-medium transition-colors hover:text-blue dark:hover:text-lightBlue"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#demo")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Demos
              </a>
              <a
                href="#project"
                className="text-black dark:text-white text-sm font-medium transition-colors hover:text-blue dark:hover:text-lightBlue"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#project")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Project
              </a>
              <a
                href="#team"
                className="text-black dark:text-white text-sm font-medium transition-colors hover:text-blue dark:hover:text-lightBlue"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#team")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Team
              </a>
            </nav>

            <div className="flex flex-1 items-center justify-end space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="text-blue dark:text-lightBlue"
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl md:mr-4 text-center md:text-left">
              <span className="block md:inline">Welcome to</span>{" "}
              <span className="flex items-center justify-center md:inline-flex">
                Locked
                <img
                  src={LockedInLogo}
                  alt="LockedIn Logo"
                  className={`h-12 sm:h-24 ml-2 ${
                    animateLogo
                      ? "animate-[fall-and-lock_0.6s_ease-in-out]"
                      : ""
                  }`}
                />
              </span>
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-darkBlue dark:text-lightBlue text-center">
            Effortless, AI-powered study groups that fit your schedule, learning style, and academic goals
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="bg-blue hover:bg-darkBlue text-white dark:bg-lightBlue dark:text-darkBlue dark:hover:bg-blue dark:hover:text-white">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="bg-white border-blue text-blue hover:bg-blue hover:text-white dark:bg-darkBlue dark:border-lightBlue dark:text-lightBlue dark:hover:bg-lightBlue dark:hover:text-darkBlue"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container px-4 py-24 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Features
          </h2>
          <p className="text-lg leading-8 text-center text-darkBlue dark:text-lightBlue mb-12">
          Our platform simplifies collaboration for college students by using AI-powered tools to create pre-planned, 
          recurring study groups based on shared schedules, learning styles, and academic goals. By automating the formation, 
          scheduling, and planning of study sessions, we aim to eliminate the hassle of organizing groups, allowing students to focus
          on learning and on their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-darkBlue border-lightBlue dark:border-blue flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-blue dark:text-lightBlue">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-black dark:text-white mt-4">
                    {feature.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="container px-4 py-24 mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24">
            {/* Video Section */}
            <div className="w-full md:w-auto md:flex-1 max-w-[450px] mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
                Watch our fun concept video:
              </h2>
              <div
                className="relative w-full rounded-md shadow-lg overflow-hidden"
                style={{ paddingBottom: "177.78%" }}
              >
                <video
                  className="absolute top-0 left-0 w-full h-full object-contain bg-black rounded-md"
                  controls
                  title="LockedIn Concept Video"
                >
                  <source src={ConceptVideoMP4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Figma Demo Section */}
            <div className="w-full md:w-auto md:flex-1 max-w-[393px] mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
                Try our Figma demo:
              </h2>
              <div
                className="relative w-full rounded-md shadow-lg overflow-hidden"
                style={{ paddingBottom: "216.79%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  src="https://embed.figma.com/proto/OCFo0SgSrsXFMxZrXMB7Am/LockedIn-Med-Fi-Prototype?node-id=55-452&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=55%3A452&embed-host=share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="project" className="container px-4 py-24 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Design Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <Card className="bg-white dark:bg-darkBlue border-lightBlue dark:border-blue h-full pb-16 relative">
                  {/* Add a container for the title and icon */}
                  <CardHeader className="relative">
                    <CardTitle className="text-blue dark:text-lightBlue">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-darkBlue dark:text-white">
                      {project.description}
                    </CardDescription>
                    {/* Icon placed in the top-right corner */}
                    <i
                      className={`${project.icon} text-blue dark:text-lightBlue text-2xl absolute top-4 right-4`}
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-black dark:text-white">
                      {project.details}
                    </p>
                  </CardContent>
                </Card>
                <div className="absolute bottom-4 w-full px-4 flex justify-between">
                  {/* Dynamically Render Button for Slides or Report */}
                  {project.links.some(
                    (link) => link.title === "Slides" || link.title === "Report"
                  ) && (
                    <Button
                      variant="ghost"
                      className="text-blue hover:text-darkBlue dark:text-lightBlue dark:hover:text-white flex items-center"
                      onClick={() => {
                        const reportOrSlidesLink = project.links.find(
                          (link) =>
                            link.title === "Slides" || link.title === "Report"
                        );
                        if (reportOrSlidesLink) {
                          window.open(reportOrSlidesLink.url, "_blank");
                        }
                      }}
                    >
                      {project.links.some((link) => link.title === "Report")
                        ? "Report"
                        : "Slides"}
                    </Button>
                  )}

                  {/* Unlock More Button */}
                  {project.links.filter(
                    (link) => link.title !== "Slides" && link.title !== "Report"
                  ).length > 0 && (
                    <Button
                      variant="ghost"
                      className="text-blue hover:text-darkBlue dark:text-lightBlue dark:hover:text-white flex items-center"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const nonSlideAndReportLinks = project.links.filter(
                          (link) =>
                            link.title !== "Slides" && link.title !== "Report"
                        );
                        openDialogAtPosition(
                          rect.x,
                          rect.y,
                          nonSlideAndReportLinks
                        );
                      }}
                    >
                      <img
                        src={UnlockIcon}
                        alt="Unlock icon"
                        className="w-auto h-4 mr-2"
                      />
                      Unlock More
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-darkBlue dark:text-white">
              Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="relative group">
                  <Card
                    className="
                      h-full 
                      transform 
                      transition-all 
                      duration-300 
                      border 
                      border-lightBlue 
                      dark:border-blue
                      shadow-md
                      hover:shadow-xl
                      hover:-translate-y-2
                      hover:scale-[1.02]
                      bg-white
                      dark:bg-darkBlue
                    "
                  >
                    <div
                      className="relative rounded-lg overflow-hidden"
                      style={{ paddingBottom: "125%" }}
                    >
                      {/* Image and name container */}
                      <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
                        <div className="h-full flex flex-col">
                          <div className="flex-1 overflow-hidden">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                          </div>
                          <div className="p-4 bg-white dark:bg-darkBlue">
                            <h3 className="text-xl font-semibold text-darkBlue dark:text-white text-center">
                              {member.name}
                            </h3>
                            {/* Role below the name */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bio container - reversed theme */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 bg-darkBlue dark:bg-white flex items-center justify-center">
                        <p className="text-white dark:text-gray-600">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-lightBlue dark:border-blue">
          <div className="container px-4 py-8 mx-auto">
            <div className="text-center">
              <p className="text-sm text-darkBlue dark:text-lightBlue">
                © 2024 LockedIn. CS147 Project - AI in Classroom
              </p>
            </div>
          </div>
        </footer>
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="bg-white dark:bg-darkBlue border-lightBlue dark:border-blue"
          style={{
            position: "fixed",
            left: `${dialogPosition.x}px`,
            top: `${dialogPosition.y}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="flex flex-col space-y-2">
            {selectedLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-black hover:text-blue dark:text-white dark:hover:text-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
