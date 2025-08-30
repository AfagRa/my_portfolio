import { data } from "./data.js";

const menu = document.querySelector("menu")
const open_close = document.querySelector(".open_close")
const solgun = document.querySelector("#solgun")
const header = document.querySelector("header")
const main = document.querySelector("main")
const nav_open = document.querySelector("#nav_open")
const nav = document.querySelector("nav")
const title = document.querySelector("#title")
const skills = document.querySelector("#skills")
const projects = document.querySelector("#projects")


function change() {
    open_close.classList.toggle("fa-x")
    menu.classList.toggle("menu-active")
    nav.classList.toggle("bg-opacity")
    header.classList.toggle("fixed-header")
    main.classList.toggle("mt-100")
    nav_open.classList.toggle("nav-active")
    title.classList.toggle("title-active")
}


skills.innerHTML = `
    <h2>My skills</h2>
    <hr />
    <p>Passionate about crafting modern and user-friendly web interfaces...</p>
    ${data.skill.map(s => `
        <div class="skill">
        <h3>${s.name}</h3>
        <p>${s.percent}%</p>
        <div class="progress-bar">
            <div class="progress" style="width: ${s.percent}%"></div>
        </div>
        </div>
    `).join('')}
`

projects.innerHTML = `
    ${data.project.map(p => {
        return `
            <div class="flow" style="background: url('${p.img}') center/cover;">
                <a class="site" href="${p.link}" target="_blank">
                    <div class="cover">
                        <h3>${p.name}</h3>
                        <div class="buttons">
                            <button onclick="event.stopPropagation(); window.open('${p.gitLink}', '_blank')">
                                <i class="fa-solid fa-code"></i>
                            </button>    
                            <button onclick="event.stopPropagation(); window.open('${p.link}', '_blank')">
                                <i class="fa-solid fa-globe"></i>
                            </button>
                        </div>    
                    </div>
                </a>
            </div>
        `
    }).join('')}
`