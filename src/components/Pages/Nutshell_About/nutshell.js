import React from 'react'
import "../Nutshell_About/nutshell.css"
import {allIcons} from '../../assets/icons/icons';
const { School, WorkIcon, SkillSet} = allIcons


const Nutshell = () => {
    return (
        <div class="flex-container" id="trees">
      <div class="trees" >
        <section class="tree-wrapper">
          <h3 class="title">Education</h3>
          <div class="tree">
            <div class="branch">
            <div className="iconContainer">
                <School />
              </div>
              <div class="branch-body">
                <h3 class="branch-title">Micheal Okpara of Agric.,Umudike</h3>
                <p>BSc. Biochemistry</p>
                <p>2010-2014</p>
              </div>
            </div>
            <div class="branch">
            <div className="iconContainer">
                <School />
              </div>
              <div class="branch-body">
                <h3 class="branch-title">University of Benin</h3>
                <p>MSc. Biochemistry</p>
                <p>2017-2020</p>
              </div>
          </div>

          
          </div>
        </section>

        {/* {-- 2 --} */}
        <section class="tree-wrapper">
          <h3 class="title">Experience</h3>
          <div class="tree">
            <div class="branch">
            <div className="iconContainer">
                <WorkIcon />
              </div>
              <div class="branch-body">
                <h3 class="branch-title">GeorgeDev Enterprise</h3>
                <p>Junior Developer</p>
                <p>Jan. 2023- till date</p>
              </div>
            </div>
            <div class="branch">
            <div className="iconContainer">
                <WorkIcon />
              </div>
              <div class="branch-body">
                <h3 class="branch-title">Women Techsters</h3>
                <p>Design Intern</p>
                <p>July 2020-March 2021</p>
              </div>
            </div>
            {/* <div class="branch"></div>
            <div class="branch"></div> */}
          </div>
        </section>

        {/* {- 3 --} */}
        <section class="tree-wrapper">
          <h3 class="title">Top Skills</h3>
          <div class="tree">
            <div class="branch">
            <div className="iconContainer">
                <SkillSet />
              </div>
              <div class="branch-body">
                <h3 class="branch-title">Javascript, Redux</h3>
                <p>React.js, Djongo, Vanilla CSS</p>
                
              </div>
            </div>
            {/* <div class="branch"></div>
            <div class="branch"></div> */}
          </div>
        </section>
      </div>
    </div>
    );
}

export default Nutshell