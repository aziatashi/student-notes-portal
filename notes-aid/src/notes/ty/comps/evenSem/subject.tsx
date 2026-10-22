import {
  // Signal,
  // Brain,
  // EarthLock,
  // MessageSquareLock,
  // Server,
  Database,
} from "lucide-react";

import { Subjects } from "@/interfaces/Subject";
import dsip from "./dsip/data";
import ai from "./ai/data";
import is from "./is/data";
import cc from "./cc/data";
import ac from "./ac/data";

const subjects: Subjects = {
  dsip: dsip,
  ai: ai,
  is: is,
  ac: ac,
  cc: cc,
  adm: {
    name: "Honors - Advanced Data Mining",
    icon: Database,
    color: "blue",
    modules: {
      1: {
        notesLink: [
          {
            title:"All Notes",
            url:"https://somaiya0-my.sharepoint.com/:f:/g/personal/rohit_sd_somaiya_edu/EiDN6Fb_uS1Ep70frWb6CZUBL5a99orvfaTCIqgzu0uGaA?e=eEiz6o"
          }
        ],
        topics: [
          {
            title: "1.1 Data Mining Introduction",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "1.1.1 What is Data Mining",
                url: "https://www.youtube.com/embed/N9hGamh4Gfs?si=CckFYYS_k4bVRcxe",
              },
            ],
          },
          {
            title: "1.2 Data Preprocessing",
            description: "Theoretical Based Concepts - Important for exam ⭐",
            videos: [
              {
                title: "1.2.1 Data Preprocessing and KDD Process",
                url: "https://www.youtube.com/embed/_NYZ0rOdsSI?si=vSOdv0oy38IGRqdk",
              },
            ],
          },
          {
            title: "1.3 Data Mining Tasks",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "1.3.1 Data Mining Tasks",
                url: "https://www.youtube.com/embed/I0DanOCgcjE?si=jize8z_nYElrP_4N",
              },
              {
                title: "1.3.2 Distributive Computing",
                url: "https://www.youtube.com/embed/ajjOEltiZm4?si=xZICZ1Zij8iAXJth",
              },
            ],
          },
          {
            title: "1.4 Hadoop",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "1.4.1 Hadoop",
                url: "https://www.youtube.com/embed/aReuLtY0YMI?si=Ns6rA9sMZMsOPg4U",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: [
          {
            title:"All Notes",
            url:"https://somaiya0-my.sharepoint.com/:f:/g/personal/rohit_sd_somaiya_edu/EiDN6Fb_uS1Ep70frWb6CZUBL5a99orvfaTCIqgzu0uGaA?e=eEiz6o"
          }
        ],
        topics: [
          {
            title: "2.1 Association Rule Mining",
            description: "Numerical based concepts- Important for exam ⭐",
            videos: [
              {
                title: "2.1.1 Apiori Algorithm",
                url: "https://www.youtube.com/embed/NT6beZBYbmU?si=Y346a80KM44WYVRy",
              },
              {
                title:"Apriori Algorithm - 2",
                url:"https://www.youtube.com/embed/hBJ21-fR_xA?si=IIGYB8SEW7iZSLmS"
              },
              {
                title: "2.1.2 FP Growth Algorithm",
                url: "https://www.youtube.com/embed/7oGz4PCp9jI?si=d_ekEfSPleKPv1BZ",
              },
              {
                title: "2.1.3 Other important Algorithms",
                url: "https://www.youtube.com/embed/asWqVHex9kY?si=ikPJpc80hjDU5lqV",
              },
              {
                title: "2.1.4 Multi-Level Association Mining",
                url: "https://www.youtube.com/embed/1H8KM2s6ce0?si=jUk9a0g-bIlN8rXU",
              },
              {
                title: "2.1.5 Multi-Dimensional Association Mining",
                url: "https://www.youtube.com/embed/M3wyG3HKuNg?si=o_P4EaAahylemwYh",
              },
              {
                title:"Hash Based Tree Algorithm",
                url:""
              },
              {
                title:"FUP",
                url:""
              },
              {
                title:"FM",
                url:""
              },
              {
                title:"CPS",
                url:""
              }
            ],
          },
          {
            title: "2.2 Stream Data Mining",
            description: "Numerical based concepts- Important for exam ⭐",
            videos: [
              {
                title: "2.2.1 Stream Data Mining",
                url: "https://www.youtube.com/embed/nbBJ27XhEyM?si=zOBjeJXV_K0utLk4",
              },
              {
                title: "2.2.2 Sampling from a data stream",
                url: "https://www.youtube.com/embed/YI4y3Z1Tp8Y?si=EKKj0LDQ1rvtm79L",
              },
              {
                title: "2.2.3 Bloom Filters",
                url: "https://www.youtube.com/embed/F_3AmAcbvuk?si=IjeomfcSc8tOzfOv",
              },
              {
                title: "2.2.4 FM Algorithm",
                url: "https://www.youtube.com/embed/fhaA5hQmlbk?si=OyFYOlM3pIwioXwC",
              },
              {
                title: "2.2.5 DGIM Algorithm",
                url: "https://www.youtube.com/embed/2HTh7hK_eNQ?si=NYLB4jU1Pyh5lWk0",
              },
            ],
          },
        ],
      },
      3:{
        notesLink: [
          {
            title:"All Notes",
            url:"https://somaiya0-my.sharepoint.com/:f:/g/personal/rohit_sd_somaiya_edu/EiDN6Fb_uS1Ep70frWb6CZUBL5a99orvfaTCIqgzu0uGaA?e=eEiz6o"
          }
        ],
        topics: [
          {
            title: "Module 3 Numericals",
            description: "Numerical based concepts- Important for exam ⭐",
            videos: [
              {
                title: "Edge Betweeness ",
                url: "",
              },
              {
                title: "Girvan Newman",
                url: "",
              },
              {
                title: "Social Network Analysis",
                url: "",
              },
            ],
          },
        ],
      },
      4: {
        notesLink: [
           {
            title:"All Notes",
            url:"https://somaiya0-my.sharepoint.com/:f:/g/personal/rohit_sd_somaiya_edu/EiDN6Fb_uS1Ep70frWb6CZUBL5a99orvfaTCIqgzu0uGaA?e=eEiz6o"
          }
        ],
        topics: [
          {
            title: "4.1 Clustering",
            description: "Numerical based concepts- Important for exam ⭐",
            videos: [
              {
                title: "4.1.1 Hierarchical Clustering: Single Linkage",
                url: "",
              },
              {
                title: "4.1.1 Hierarchical Clustering: Complete Linkage",
                url: "",
              },
              {
                title: "4.1.1 Hierarchical Clustering: Average Linkage",
                url: "",
              },
              {
                title: "4.1.2 K-Means Clustering",
                url: "",
              },
              {
                title:"Vector Model Sum",
                url:""
              },
              {
                title:"Page Rank",
                url:""
              },
              {
                title:"HITS",
                url:""
              },
              {
                title:"TF-IDF",
                url:""
              },
              {
                title:"Naive Bayes",
                url:""
              }
            ],
          },
        ],
      },
      5:{
        notesLink: [
          {
            title:"All Notes",
            url:"https://somaiya0-my.sharepoint.com/:f:/g/personal/rohit_sd_somaiya_edu/EiDN6Fb_uS1Ep70frWb6CZUBL5a99orvfaTCIqgzu0uGaA?e=eEiz6o"
          }
        ],
        topics: [
          {
            title: "Module 5 Numericals",
            description: "Numerical based concepts- Important for exam ⭐",
            videos: [
              {
                title: "GSP",
                url: "",
              },
              {
                title:"DTW",
                url:""
              }
            ],
          },
        ],
      }
    },
  },
};

export default subjects;
