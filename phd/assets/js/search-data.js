// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/phd/";
    },
  },{id: "nav-reports",
          title: "Reports",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/reports/index.html";
          },
        },{id: "nav-timeline",
          title: "Timeline",
          description: "What was and what will be done.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/timeline/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/repositories/";
          },
        },{id: "nav-sota",
          title: "SOTA",
          description: "Some state of the art techniques, methods and technologies in my PhD field.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/sota/";
          },
        },{id: "nav-courses",
          title: "Courses",
          description: "Courses or other useful resources to learn the topics about my PhD.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/courses/";
          },
        },{id: "post-simulating-2d-motion-magnification",
      
        title: "Simulating 2D motion magnification",
      
      description: "Meeting support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2025/simulating_motion_magnification/";
        
      },
    },{id: "post-review-articles-for-mie",
      
        title: "Review articles for MIE",
      
      description: "Meeting support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2025/review_article_mie/";
        
      },
    },{id: "post-ideas-for-the-research-paper",
      
        title: "Ideas for the research paper",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/ideas_review_paper/";
        
      },
    },{id: "post-first-research-on-3d-motion-magnification",
      
        title: "First research on 3D motion magnification",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/first_research_3d_motion_magnification/";
        
      },
    },{id: "post-lightglue-on-3d-reconstruction",
      
        title: "LightGlue on 3D reconstruction",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/3d_lightglue/";
        
      },
    },{id: "post-testing-lightglue",
      
        title: "Testing LightGlue",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/testing_lightglue/";
        
      },
    },{id: "post-paper-sheet-holder",
      
        title: "Paper sheet holder",
      
      description: "Meeting support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/paper_sheet_holder/";
        
      },
    },{id: "post-improving-3d-reconstruction",
      
        title: "Improving 3D reconstruction",
      
      description: "Meeting report",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/improving_3d_report/";
        
      },
    },{id: "post-improving-3d-reconstruction",
      
        title: "Improving 3D reconstruction",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/improving_3d/";
        
      },
    },{id: "post-using-a-vibrometer",
      
        title: "Using a vibrometer",
      
      description: "Meeting report",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/vibrometer/";
        
      },
    },{id: "post-first-steps-on-3d-reconstruction",
      
        title: "First steps on 3D reconstruction",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/calibration_3d/";
        
      },
    },{id: "post-feature-matching",
      
        title: "Feature Matching",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/feature_matching/";
        
      },
    },{id: "post-using-motionscope-to-see-the-problem",
      
        title: "Using MotionScope to see the problem",
      
      description: "Meeting report",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/trying_motionscope/";
        
      },
    },{id: "post-towards-defining-the-problem",
      
        title: "Towards defining the problem",
      
      description: "Meeting report",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/defining_problem/";
        
      },
    },{id: "post-atom-experiments",
      
        title: "ATOM experiments",
      
      description: "Meeting preparation and support",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/atom_experiments/";
        
      },
    },{id: "post-first-meeting",
      
        title: "First meeting",
      
      description: "Meeting report",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/phd/reports/2024/first-meeting/";
        
      },
    },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/phd/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/phd/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
