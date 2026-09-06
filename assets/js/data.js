// Centralized Curriculum Database
// Validated subject keys and standardized URL slugs
const SITE_DATA = {
  "firstYear": {
    "odd": [
      {
        "id": "applied-mathematics-i",
        "name": "Applied Mathematics - I",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/applied-mathematics-i/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/applied-mathematics-i/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-chemistry",
        "name": "Engineering Chemistry",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/engineering-chemistry/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/engineering-chemistry/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-drawing",
        "name": "Engineering Drawing",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/engineering-drawing/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/engineering-drawing/slides.txt"
          }
        ]
      },
      {
        "id": "elements-of-electrical-and-electronics-engineering",
        "name": "Elements of Electrical and Electronics Engineering",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/elements-of-electrical-and-electronics-engineering/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/elements-of-electrical-and-electronics-engineering/slides.txt"
          }
        ]
      },
      {
        "id": "python-programming",
        "name": "Python Programming",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/python-programming/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/python-programming/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-chemistry-laboratory",
        "name": "Engineering Chemistry Laboratory",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/engineering-chemistry-laboratory/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/engineering-chemistry-laboratory/slides.txt"
          }
        ]
      },
      {
        "id": "elements-of-electrical-electronics-engineering-laboratory",
        "name": "Elements of Electrical & Electronics Engineering Laboratory",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/elements-of-electrical-electronics-engineering-laboratory/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/elements-of-electrical-electronics-engineering-laboratory/slides.txt"
          }
        ]
      },
      {
        "id": "project-based-learning",
        "name": "Project-Based Learning",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/project-based-learning/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/project-based-learning/slides.txt"
          }
        ]
      },
      {
        "id": "basic-workshop-practice-i",
        "name": "Basic Workshop Practice - I",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/basic-workshop-practice-i/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/basic-workshop-practice-i/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-drawing-laboratory",
        "name": "Engineering Drawing Laboratory",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/odd/engineering-drawing-laboratory/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/odd/engineering-drawing-laboratory/slides.txt"
          }
        ]
      }
    ],
    "even": [
      {
        "id": "applied-mathematics-ii",
        "name": "Applied Mathematics - II",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/applied-mathematics-ii/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/applied-mathematics-ii/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-physics",
        "name": "Engineering Physics",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/engineering-physics/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/engineering-physics/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-mechanics",
        "name": "Engineering Mechanics",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/engineering-mechanics/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/engineering-mechanics/slides.txt"
          }
        ]
      },
      {
        "id": "programming-in-c",
        "name": "Programming in C",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/programming-in-c/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/programming-in-c/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-physics-laboratory",
        "name": "Engineering Physics Laboratory",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/engineering-physics-laboratory/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/engineering-physics-laboratory/slides.txt"
          }
        ]
      },
      {
        "id": "engineering-mechanics-laboratory",
        "name": "Engineering Mechanics Laboratory",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/engineering-mechanics-laboratory/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/engineering-mechanics-laboratory/slides.txt"
          }
        ]
      },
      {
        "id": "project-based-learning",
        "name": "Project-Based Learning",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/project-based-learning/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/project-based-learning/slides.txt"
          }
        ]
      },
      {
        "id": "presentation-communication-skills",
        "name": "Presentation & Communication Skills",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/presentation-communication-skills/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/presentation-communication-skills/slides.txt"
          }
        ]
      },
      {
        "id": "basic-workshop-practice-ii",
        "name": "Basic Workshop Practice - II",
        "materials": [
          {
            "type": "notes",
            "title": "Notes",
            "file": "materials/first-year/even/basic-workshop-practice-ii/notes.txt"
          },
          {
            "type": "slides",
            "title": "Slides",
            "file": "materials/first-year/even/basic-workshop-practice-ii/slides.txt"
          }
        ]
      }
    ]
  },
  "branches": [
    {
      "id": "it",
      "name": "Information Technology",
      "years": {
        "sy": {
          "label": "Second Year",
          "semesters": {
            "odd": {
              "label": "Odd Semester",
              "subjects": [
                {
                  "id": "discrete-and-applied-mathematics",
                  "name": "Discrete and Applied Mathematics",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/odd/discrete-and-applied-mathematics/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/odd/discrete-and-applied-mathematics/slides.txt"
                    }
                  ]
                },
                {
                  "id": "data-structures",
                  "name": "Data Structures",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/odd/data-structures/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/odd/data-structures/slides.txt"
                    }
                  ]
                },
                {
                  "id": "database-management-systems",
                  "name": "Database Management Systems",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/odd/database-management-systems/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/odd/database-management-systems/slides.txt"
                    }
                  ]
                },
                {
                  "id": "digital-systems",
                  "name": "Digital Systems",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/odd/digital-systems/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/odd/digital-systems/slides.txt"
                    }
                  ]
                },
                {
                  "id": "data-communication-and-networking",
                  "name": "Data Communication and Networking",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/odd/data-communication-and-networking/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/odd/data-communication-and-networking/slides.txt"
                    }
                  ]
                },
                {
                  "id": "programming-laboratory-i",
                  "name": "Programming Laboratory I",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/odd/programming-laboratory-i/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/odd/programming-laboratory-i/slides.txt"
                    }
                  ]
                }
              ]
            },
            "even": {
              "label": "Even Semester",
              "subjects": [
                {
                  "id": "probability-statistics-and-optimization-techniques",
                  "name": "Probability, Statistics and Optimization Techniques",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/even/probability-statistics-and-optimization-techniques/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/even/probability-statistics-and-optimization-techniques/slides.txt"
                    }
                  ]
                },
                {
                  "id": "information-theory-and-coding",
                  "name": "Information Theory and Coding",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/even/information-theory-and-coding/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/even/information-theory-and-coding/slides.txt"
                    }
                  ]
                },
                {
                  "id": "analysis-of-algorithms",
                  "name": "Analysis of Algorithms",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/even/analysis-of-algorithms/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/even/analysis-of-algorithms/slides.txt"
                    }
                  ]
                },
                {
                  "id": "advanced-databases",
                  "name": "Advanced Databases",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/even/advanced-databases/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/even/advanced-databases/slides.txt"
                    }
                  ]
                },
                {
                  "id": "competitive-programming-laboratory",
                  "name": "Competitive Programming Laboratory",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/even/competitive-programming-laboratory/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/even/competitive-programming-laboratory/slides.txt"
                    }
                  ]
                },
                {
                  "id": "web-programming-i-laboratory",
                  "name": "Web Programming - I Laboratory",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/sy/even/web-programming-i-laboratory/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/sy/even/web-programming-i-laboratory/slides.txt"
                    }
                  ]
                }
              ]
            }
          }
        },
        "ty": {
          "label": "Third Year",
          "semesters": {
            "odd": {
              "label": "Odd Semester",
              "subjects": [
                {
                  "id": "theory-of-computation",
                  "name": "Theory of Computation",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/theory-of-computation/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/theory-of-computation/slides.txt"
                    }
                  ]
                },
                {
                  "id": "operating-system",
                  "name": "Operating System",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/operating-system/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/operating-system/slides.txt"
                    }
                  ]
                },
                {
                  "id": "information-and-network-security",
                  "name": "Information and Network Security",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/information-and-network-security/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/information-and-network-security/slides.txt"
                    }
                  ]
                },
                {
                  "id": "web-programming-ii-server-side",
                  "name": "Web Programming - II (Server Side)",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/web-programming-ii-server-side/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/web-programming-ii-server-side/slides.txt"
                    }
                  ]
                },
                {
                  "id": "artificial-intelligence",
                  "name": "Artificial Intelligence",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/artificial-intelligence/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/artificial-intelligence/slides.txt"
                    }
                  ]
                },
                {
                  "id": "cyber-laws",
                  "name": "Cyber Laws",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/cyber-laws/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/cyber-laws/slides.txt"
                    }
                  ]
                },
                {
                  "id": "computer-graphics-and-virtual-reality",
                  "name": "Computer Graphics and Virtual Reality",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/computer-graphics-and-virtual-reality/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/computer-graphics-and-virtual-reality/slides.txt"
                    }
                  ]
                },
                {
                  "id": "ui-programming",
                  "name": "UI Programming",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/ui-programming/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/ui-programming/slides.txt"
                    }
                  ]
                },
                {
                  "id": "advanced-computer-network",
                  "name": "Advanced Computer Network",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/odd/advanced-computer-network/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/odd/advanced-computer-network/slides.txt"
                    }
                  ]
                }
              ]
            },
            "even": {
              "label": "Even Semester",
              "subjects": [
                {
                  "id": "object-oriented-software-engineering",
                  "name": "Object Oriented Software Engineering",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/object-oriented-software-engineering/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/object-oriented-software-engineering/slides.txt"
                    }
                  ]
                },
                {
                  "id": "modeling-and-simulation",
                  "name": "Modeling and Simulation",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/modeling-and-simulation/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/modeling-and-simulation/slides.txt"
                    }
                  ]
                },
                {
                  "id": "cloud-computing",
                  "name": "Cloud Computing",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/cloud-computing/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/cloud-computing/slides.txt"
                    }
                  ]
                },
                {
                  "id": "exploratory-data-analytics",
                  "name": "Exploratory Data Analytics",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/exploratory-data-analytics/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/exploratory-data-analytics/slides.txt"
                    }
                  ]
                },
                {
                  "id": "vulnerability-analysis-and-penetration-testing",
                  "name": "Vulnerability Analysis And Penetration Testing",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/vulnerability-analysis-and-penetration-testing/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/vulnerability-analysis-and-penetration-testing/slides.txt"
                    }
                  ]
                },
                {
                  "id": "digital-signal-and-image-processing",
                  "name": "Digital Signal and Image Processing",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/digital-signal-and-image-processing/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/digital-signal-and-image-processing/slides.txt"
                    }
                  ]
                },
                {
                  "id": "development-framework-1",
                  "name": "Development Framework 1",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/development-framework-1/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/development-framework-1/slides.txt"
                    }
                  ]
                },
                {
                  "id": "internet-of-things",
                  "name": "Internet of Things",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/it/ty/even/internet-of-things/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/it/ty/even/internet-of-things/slides.txt"
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      "id": "aids",
      "name": "Artificial Intelligence & Data Science",
      "years": {
        "sy": {
          "label": "Second Year",
          "semesters": {
            "odd": {
              "label": "Odd Semester",
              "subjects": [
                {
                  "id": "discrete-applied-mathematics",
                  "name": "Discrete & Applied Mathematics",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/odd/discrete-applied-mathematics/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/odd/discrete-applied-mathematics/slides.txt"
                    }
                  ]
                },
                {
                  "id": "data-structures",
                  "name": "Data Structures",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/odd/data-structures/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/odd/data-structures/slides.txt"
                    }
                  ]
                },
                {
                  "id": "database-management-systems",
                  "name": "Database Management Systems",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/odd/database-management-systems/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/odd/database-management-systems/slides.txt"
                    }
                  ]
                },
                {
                  "id": "data-communication-and-networking",
                  "name": "Data Communication and Networking",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/odd/data-communication-and-networking/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/odd/data-communication-and-networking/slides.txt"
                    }
                  ]
                },
                {
                  "id": "information-theory-coding",
                  "name": "Information Theory & Coding",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/odd/information-theory-coding/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/odd/information-theory-coding/slides.txt"
                    }
                  ]
                },
                {
                  "id": "programming-laboratory-java-python-c",
                  "name": "Programming Laboratory: Java/Python/C++",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/odd/programming-laboratory-java-python-c/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/odd/programming-laboratory-java-python-c/slides.txt"
                    }
                  ]
                }
              ]
            },
            "even": {
              "label": "Even Semester",
              "subjects": [
                {
                  "id": "probability-statistics-optimization-techniques",
                  "name": "Probability, Statistics & Optimization Techniques",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/even/probability-statistics-optimization-techniques/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/even/probability-statistics-optimization-techniques/slides.txt"
                    }
                  ]
                },
                {
                  "id": "design-analysis-of-algorithms",
                  "name": "Design & Analysis of Algorithms",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/even/design-analysis-of-algorithms/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/even/design-analysis-of-algorithms/slides.txt"
                    }
                  ]
                },
                {
                  "id": "advanced-databases",
                  "name": "Advanced Databases",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/even/advanced-databases/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/even/advanced-databases/slides.txt"
                    }
                  ]
                },
                {
                  "id": "object-oriented-software-engineering",
                  "name": "Object Oriented Software Engineering",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/even/object-oriented-software-engineering/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/even/object-oriented-software-engineering/slides.txt"
                    }
                  ]
                },
                {
                  "id": "fundamentals-of-data-science",
                  "name": "Fundamentals of Data Science",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/even/fundamentals-of-data-science/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/even/fundamentals-of-data-science/slides.txt"
                    }
                  ]
                },
                {
                  "id": "competitive-programming",
                  "name": "Competitive Programming",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/even/competitive-programming/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/even/competitive-programming/slides.txt"
                    }
                  ]
                },
                {
                  "id": "web-programming-i",
                  "name": "Web Programming - I",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/sy/even/web-programming-i/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/sy/even/web-programming-i/slides.txt"
                    }
                  ]
                }
              ]
            }
          }
        },
        "ty": {
          "label": "Third Year",
          "semesters": {
            "odd": {
              "label": "Odd Semester",
              "subjects": [
                {
                  "id": "operating-systems",
                  "name": "Operating Systems",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/ty/odd/operating-systems/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/ty/odd/operating-systems/slides.txt"
                    }
                  ]
                },
                {
                  "id": "artificial-intelligence",
                  "name": "Artificial Intelligence",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/ty/odd/artificial-intelligence/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/ty/odd/artificial-intelligence/slides.txt"
                    }
                  ]
                },
                {
                  "id": "web-programming-ii",
                  "name": "Web Programming - II",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/ty/odd/web-programming-ii/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/ty/odd/web-programming-ii/slides.txt"
                    }
                  ]
                },
                {
                  "id": "information-and-network-security",
                  "name": "Information and Network Security",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/ty/odd/information-and-network-security/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/ty/odd/information-and-network-security/slides.txt"
                    }
                  ]
                }
              ]
            },
            "even": {
              "label": "Even Semester",
              "subjects": [
                {
                  "id": "cloud-computing",
                  "name": "Cloud Computing",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/ty/even/cloud-computing/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/ty/even/cloud-computing/slides.txt"
                    }
                  ]
                },
                {
                  "id": "machine-learning",
                  "name": "Machine Learning",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/ty/even/machine-learning/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/ty/even/machine-learning/slides.txt"
                    }
                  ]
                },
                {
                  "id": "natural-language-processing",
                  "name": "Natural Language Processing",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/aids/ty/even/natural-language-processing/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/aids/ty/even/natural-language-processing/slides.txt"
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      "id": "cs",
      "name": "Computer Science",
      "years": {
        "sy": {
          "label": "Second Year",
          "semesters": {
            "odd": {
              "label": "Odd Semester",
              "subjects": [
                {
                  "id": "integral-transform-and-vector-calculus",
                  "name": "Integral Transform and Vector Calculus",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/odd/integral-transform-and-vector-calculus/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/odd/integral-transform-and-vector-calculus/slides.txt"
                    }
                  ]
                },
                {
                  "id": "data-structures",
                  "name": "Data Structures",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/odd/data-structures/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/odd/data-structures/slides.txt"
                    }
                  ]
                },
                {
                  "id": "computer-organization-architecture",
                  "name": "Computer Organization & Architecture",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/odd/computer-organization-architecture/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/odd/computer-organization-architecture/slides.txt"
                    }
                  ]
                },
                {
                  "id": "object-oriented-programming-methodology",
                  "name": "Object Oriented Programming Methodology",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/odd/object-oriented-programming-methodology/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/odd/object-oriented-programming-methodology/slides.txt"
                    }
                  ]
                },
                {
                  "id": "discrete-mathematics",
                  "name": "Discrete Mathematics",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/odd/discrete-mathematics/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/odd/discrete-mathematics/slides.txt"
                    }
                  ]
                },
                {
                  "id": "digital-design-laboratory",
                  "name": "Digital Design Laboratory",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/odd/digital-design-laboratory/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/odd/digital-design-laboratory/slides.txt"
                    }
                  ]
                }
              ]
            },
            "even": {
              "label": "Even Semester",
              "subjects": [
                {
                  "id": "probability-statistics-and-optimization-techniques",
                  "name": "Probability, Statistics and Optimization Techniques",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/even/probability-statistics-and-optimization-techniques/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/even/probability-statistics-and-optimization-techniques/slides.txt"
                    }
                  ]
                },
                {
                  "id": "analysis-of-algorithms",
                  "name": "Analysis of Algorithms",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/even/analysis-of-algorithms/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/even/analysis-of-algorithms/slides.txt"
                    }
                  ]
                },
                {
                  "id": "relational-database-management-systems",
                  "name": "Relational Database Management Systems",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/even/relational-database-management-systems/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/even/relational-database-management-systems/slides.txt"
                    }
                  ]
                },
                {
                  "id": "theory-of-automata-with-compiler-design",
                  "name": "Theory of Automata with Compiler Design",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/even/theory-of-automata-with-compiler-design/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/even/theory-of-automata-with-compiler-design/slides.txt"
                    }
                  ]
                },
                {
                  "id": "web-programming-laboratory",
                  "name": "Web Programming Laboratory",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/sy/even/web-programming-laboratory/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/sy/even/web-programming-laboratory/slides.txt"
                    }
                  ]
                }
              ]
            }
          }
        },
        "ty": {
          "label": "Third Year",
          "semesters": {
            "odd": {
              "label": "Odd Semester",
              "subjects": [
                {
                  "id": "software-engineering",
                  "name": "Software Engineering",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/ty/odd/software-engineering/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/ty/odd/software-engineering/slides.txt"
                    }
                  ]
                },
                {
                  "id": "computer-networks",
                  "name": "Computer Networks",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/ty/odd/computer-networks/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/ty/odd/computer-networks/slides.txt"
                    }
                  ]
                },
                {
                  "id": "operating-system",
                  "name": "Operating System",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/ty/odd/operating-system/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/ty/odd/operating-system/slides.txt"
                    }
                  ]
                },
                {
                  "id": "full-stack-development-lab",
                  "name": "Full Stack Development Lab",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/ty/odd/full-stack-development-lab/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/ty/odd/full-stack-development-lab/slides.txt"
                    }
                  ]
                }
              ]
            },
            "even": {
              "label": "Even Semester",
              "subjects": [
                {
                  "id": "digital-signal-image-processing",
                  "name": "Digital Signal & Image Processing",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/ty/even/digital-signal-image-processing/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/ty/even/digital-signal-image-processing/slides.txt"
                    }
                  ]
                },
                {
                  "id": "information-security",
                  "name": "Information Security",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/ty/even/information-security/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/ty/even/information-security/slides.txt"
                    }
                  ]
                },
                {
                  "id": "artificial-intelligence",
                  "name": "Artificial Intelligence",
                  "materials": [
                    {
                      "type": "notes",
                      "title": "Notes",
                      "file": "materials/cs/ty/even/artificial-intelligence/notes.txt"
                    },
                    {
                      "type": "slides",
                      "title": "Slides",
                      "file": "materials/cs/ty/even/artificial-intelligence/slides.txt"
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    }
  ]
};
