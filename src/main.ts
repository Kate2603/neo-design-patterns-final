import "./styles.css";
import { ResumePage } from "./facade/ResumePage";

const resumeRootId = "resume-content";

// ensure root container exists or create it (helps if index.html minimal)
function ensureRoot() {
  let root = document.getElementById(resumeRootId);
  if (!root) {
    root = document.createElement("div");
    root.id = resumeRootId;
    document.body.appendChild(root);
  }
}

ensureRoot();

const page = new ResumePage();
// path relative to index.html: resume.json
page.init("resume.json").catch((e) => console.error(e));
