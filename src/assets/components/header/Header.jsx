import { HeaderWrapper } from "./style"
import LuciPic from '../../img/luci5.webp'
import { DownloadSimple } from "phosphor-react";
import lucicv from '../../img/lucicv.pdf'

export function Header() {
 

  return (  
    <HeaderWrapper>
      <article>
        <strong>Hello, there! I am Luci</strong>
        <h1>Junior Software Engineer</h1>
        <p>Front-End Developer based in UK. I like making online life easier with a touch of beauty. Back in 2020 when I decided to have a career change I started my learning journey. I am passionate about every line of code and proud of myself for every step of my progress.
        A focused, results-driven, and highly capable Front-End Developer offering sound theoretical knowledge and practical experience across projects using HTML, CSS, JavaScript, React, Git, and GitHub.</p>
        <button>
          <a href={lucicv} target="_blank" download>
            Download CV 
            <DownloadSimple size={20}/>
          </a>
        </button>
      </article>
      <img src={LuciPic} alt="Luci picture" />
    </HeaderWrapper>
  );
}

