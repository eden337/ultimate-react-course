import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "HTML+CSS", level: "advanced", color: "blue" },
  { skill: "JavaScript", level: "advanced", color: "red" },
  { skill: "C#", level: "advanced", color: "green" },
  { skill: "Unity", level: "intermediate", color: "yellow" },
  { skill: "WPF", level: "advanced", color: "orange" },
  { skill: "Blazor", level: "advanced", color: "orangered" },
  { skill: "Angular", level: "beginner", color: "cyan" },
  { skill: "Typescript", level: "beginner", color: "brown" },
  { skill: "React", level: "beginner", color: "purple" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatars/sonic.png" alt="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Eden Schwartz</h1>
      <p>
        Hi, I am Eden, I am a Software Engineer from Israel, currently working
        from Bulgary, I have 2 years of experience on the field
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => {
        return <Skill skillObj={skill} />;
      })}
      {/*      <Skill skillName={"HTML + CSS"} emoji={"😀"} color="blue" />
      <Skill skillName={"Blazor"} emoji={"😎"} color="red" />
      <Skill skillName={"Javascript"} emoji={"🙏"} color="yellow" />
      <Skill skillName={"C#"} emoji={"🤲"} color="green" />
      <Skill skillName={"WPF"} emoji={"💪"} color="brown" />
      <Skill skillName={"Angluar"} emoji={"🙌"} color="coral" />
      <Skill skillName={"MVVM"} emoji={"👀"} color="orange" />
 */}
    </ul>
  );
}

function Skill({ skillObj }) {
  const style = { backgroundColor: skillObj.color };
  let emoji = "";
  switch (skillObj.level) {
    case "advanced":
      emoji = "🧔";
      break;
    case "intermediate":
      emoji = "🧑";
      break;
    default:
      emoji = "👶";
      break;
  }

  return (
    <li className="skill" style={style}>
      <span>{skillObj.skill}</span>
      <span>{emoji}</span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
