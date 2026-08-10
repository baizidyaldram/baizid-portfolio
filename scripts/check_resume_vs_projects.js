const fs = require('fs');
const path = require('path');
// Load projects by creating a temp JS module from the TypeScript source
const projectsTsPath = path.join(__dirname, '..', 'data', 'projects.ts');
if (!fs.existsSync(projectsTsPath)) {
  console.error('projects.ts not found at', projectsTsPath);
  process.exit(2);
}
const projectsTs = fs.readFileSync(projectsTsPath, 'utf8');
// Strip TypeScript-only annotations and convert export to module.exports
let tmp = projectsTs.replace(/export type[\s\S]*?};/m, '');
tmp = tmp.replace(/export const projects:\s*Project\[\]\s*=\s*/m, 'module.exports.projects = ');
const tmpPath = path.join(__dirname, 'tmp_projects.js');
fs.writeFileSync(tmpPath, tmp, 'utf8');
const projects = require(tmpPath).projects;

const pdfPath = path.join(__dirname, '..', 'public', 'Baizid_Yaldram_Resume.pdf');
if (!fs.existsSync(pdfPath)) {
  console.error('Resume PDF not found at', pdfPath);
  process.exit(2);
}
const buf = fs.readFileSync(pdfPath);
// Use latin1 to preserve bytes for binary search of ASCII tokens
const text = buf.toString('latin1');
function found(str){
  return text.indexOf(str) !== -1;
}
console.log('Checking resume for project titles and technologies...');
const report = [];
for (const p of projects){
  const titleFound = found(p.title);
  const techFound = p.technologies.map(t => ({tech: t, found: found(t)}));
  report.push({title: p.title, titleFound, techFound, demoUrl: p.demoUrl, githubUrl: p.githubUrl});
}
console.log(JSON.stringify(report, null, 2));
let missing = report.filter(r => !r.titleFound || r.techFound.some(t=>!t.found));
if (missing.length===0) console.log('\nAll project titles and technologies were found in the resume (binary match).');
else {
  console.log('\nProjects with missing tokens (title or techs):');
  missing.forEach(m=>{
    console.log('\n- ' + m.title);
    if(!m.titleFound) console.log('  * Title not found in resume');
    m.techFound.filter(t=>!t.found).forEach(t=>console.log('  * Tech not found: '+t.tech));
  });
}
