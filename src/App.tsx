import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import ConceptVideo from "/video.mov";

export default function App() {
  const projects = [
    {
      title: "Needfinding",
      description: "Interviews and observations",
      details: "Project details go here...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A1slides.pdf",
        },
      ],
    },
    {
      title: "Brainstorming",
      description: "POVs, HMWs, and assumption testing",
      details: "Project details go here...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A2slides.pdf",
        },
      ],
    },
    {
      title: "Concept Video",
      description: "",
      details: "Project details go here...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A4slides.pdf",
        },
        {
          title: "Video",
          url: window.location.href + "video.mov",
        },
      ],
    },
    {
      title: "Sketching",
      description: "Low-fidelity prototyping and user testing",
      details: "Project details go here...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A5slides.pdf",
        },
      ],
    },
    {
      title: "First Prototype",
      description: "Medium-fidelity prototyping",
      details: "Project details go here...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A6slides.pdf",
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
    },
    {
      title: "Second Prototype",
      description: "High-fidelity prototyping",
      details: "Project details go here...",
      links: [
        {
          title: "Slides",
          url: window.location.href + "A8slides.pdf",
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
    },
    {
      title: "Evaluation",
      description: "",
      details: "Project details go here...",
      links: [
        {
          title: "Report",
          url: window.location.href + "A9slides.pdf",
        },
      ],
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
    },
    {
      title: "Final Report",
      description: "",
      details: "Project details go here...",
      links: [
        {
          title: "Report",
          url: window.location.href + "A11slides.pdf",
        },
      ],
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
            Effortless, personalized study groups tailored <br /> to your
            schedule, preferences, and learning styles
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="bg-blue hover:bg-darkBlue text-white dark:bg-lightBlue dark:text-darkBlue dark:hover:bg-blue dark:hover:text-white">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-blue text-blue hover:bg-blue hover:text-white dark:bg-darkBlue dark:border-lightBlue dark:text-lightBlue dark:hover:bg-lightBlue dark:hover:text-darkBlue"
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

        {/* Video Section */}
        <section className="container px-4 py-24 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Watch our fun concept video:
          </h2>
          <div className="max-w-sm mx-auto">
            <div
              className="relative w-full rounded-md shadow-lg overflow-hidden"
              style={{ paddingBottom: "177.78%" }}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-contain bg-black rounded-md"
                controls
                title="LockedIn Concept Video"
              >
                <source src={ConceptVideo} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Figma Demo Section */}
        <section className="container px-4 py-24 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Try our Figma demo:
          </h2>
          <div className="max-w-[393px] mx-auto">
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
        </section>

        {/* Features Section */}
        <section id="features" className="container px-4 py-24 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-white dark:bg-darkBlue border-lightBlue dark:border-blue"
              >
                <CardHeader>
                  <CardTitle className="text-blue dark:text-lightBlue">
                    Feature {i}
                  </CardTitle>
                  <CardDescription className="text-darkBlue dark:text-white">
                    Description for feature {i}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-black dark:text-white">
                    Feature details go here...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end mt-auto">
                  <Button
                    variant="ghost"
                    className="text-blue hover:text-darkBlue dark:text-lightBlue dark:hover:text-white flex items-center"
                  >
                    <img
                      src={UnlockIcon}
                      alt="Unlock icon"
                      className="w-auto h-4"
                    />
                    Unlock More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Section */}
        <section id="project" className="container px-4 py-24 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Project info
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <Card className="bg-white dark:bg-darkBlue border-lightBlue dark:border-blue h-full pb-16">
                  <CardHeader>
                    <CardTitle className="text-blue dark:text-lightBlue">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-darkBlue dark:text-white">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black dark:text-white">
                      {project.details}
                    </p>
                  </CardContent>
                </Card>
                <div className="absolute bottom-4 w-full px-4 flex justify-between">
                  <Button
                    variant="ghost"
                    className="text-blue hover:text-darkBlue dark:text-lightBlue dark:hover:text-white flex items-center"
                    onClick={() => {
                      const slidesLink = project.links.find(
                        (link) => link.title === "Slides"
                      );
                      if (slidesLink) {
                        window.open(slidesLink.url, "_blank");
                      }
                    }}
                  >
                    Slides
                  </Button>
                  {project.links.filter((link) => link.title !== "Slides")
                    .length > 0 && (
                    <Button
                      variant="ghost"
                      className="text-blue hover:text-darkBlue dark:text-lightBlue dark:hover:text-white flex items-center"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const nonSlideLinks = project.links.filter(
                          (link) => link.title !== "Slides"
                        );
                        openDialogAtPosition(rect.x, rect.y, nonSlideLinks);
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
