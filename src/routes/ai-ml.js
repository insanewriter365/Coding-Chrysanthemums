import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@material-ui/core";
import {
  faBook,
  faCalculator,
  faLink,
  faToolbox
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import title from "../img/Software engineer-cuate.png";
export default function AIML() {
  return (
    <>
      <div
        className="App"
        id="head"
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            margin: "1%"
          }}
        >
          <h1>AI and ML Resources</h1>
          <img src={title} alt="title" width="200px" />
          <div className="list">
            <div className="item">
              <Card className="Card1">
                <h4>Machine Learning</h4>
                <p>
                  Geeks for Geeks{" "}
                  <a href="https://www.geeksforgeeks.org/machine-learning/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>ML Courses</h4>
                <p>
                  Kaggle{" "}
                  <a href="https://www.kaggle.com/learn">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>30 Days of ML</h4>
                <p>
                  Rakshaa Viswanathan{" "}
                  <a href="https://github.com/rakshaa2000/30-Days-of-ML">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Crash Course</h4>
                <p>
                  Google Developers{" "}
                  <a href="https://developers.google.com/machine-learning/crash-course">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>ML with Python</h4>
                <p>
                  Amueller{" "}
                  <a href="https://github.com/amueller/introduction_to_ml_with_python">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Machine Learning</h4>
                <p>
                  Coursera{" "}
                  <a href="https://www.coursera.org/learn/machine-learning">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Common Algorithms</h4>
                <p>
                  Analytics Vidhya{" "}
                  <a href="https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Intro to ML</h4>
                <p>
                  TechNova{" "}
                  <a href="https://bit.ly/basics-of-ml-workshop-slides">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Learn AI</h4>
                <p>
                  Google{" "}
                  <a href="https://ai.google/education/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>AI Programming</h4>
                <p>
                  Peter Norvig{" "}
                  <a href="https://github.com/norvig/paip-lisp">
                    <FontAwesomeIcon icon={faBook} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>LP3THW</h4>
                <p>
                  Zed Shaw{" "}
                  <a href="https://learnpythonthehardway.org/python3/">
                    <FontAwesomeIcon icon={faBook} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Starter Kits</h4>
                <p>
                  IBM{" "}
                  <a href="https://cloud.ibm.com/developer/watson/starter-kits">
                    <FontAwesomeIcon icon={faToolbox} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Linear Algebra</h4>
                <p>
                  MIT{" "}
                  <a href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/">
                    <FontAwesomeIcon icon={faCalculator} />
                  </a>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
