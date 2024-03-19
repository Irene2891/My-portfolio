import React from 'react'
import "./further-details.css"
import {allIcons} from '../../assets/icons/icons';
const { School, WorkIcon, SkillSet} = allIcons


// const FurtherDetails = () => {
//     return (
//         <div class="flex-container" id="trees">
//       <div class="trees" >
//         <section class="tree-wrapper">
//           <h3 class="title">Education</h3>
//           <div class="tree">
//             <div class="branch">
//             <div className="iconContainer">
//                 <School />
//               </div>
//               <div class="branch-body">
//                 <h3 class="branch-title">Micheal Okpara of Agric.,Umudike</h3>
//                 <p>BSc. Biochemistry</p>
//                 <p>2010-2014</p>
//               </div>
//             </div>
//             <div class="branch">
//             <div className="iconContainer">
//                 <School />
//               </div>
//               <div class="branch-body">
//                 <h3 class="branch-title">University of Benin</h3>
//                 <p>MSc. Biochemistry</p>
//                 <p>2017-2020</p>
//               </div>
//           </div>

          
//           </div>
//         </section>

//         {/* {-- 2 --} */}
//         <section class="tree-wrapper">
//           <h3 class="title">Experience</h3>
//           <div class="tree">
//             <div class="branch">
//             <div className="iconContainer">
//                 <WorkIcon />
//               </div>
//               <div class="branch-body">
//                 <h3 class="branch-title">GeorgeDev Enterprise</h3>
//                 <p>Junior Developer</p>
//                 <p>Jan. 2023- till date</p>
//               </div>
//             </div>
//             <div class="branch">
//             <div className="iconContainer">
//                 <WorkIcon />
//               </div>
//               <div class="branch-body">
//                 <h3 class="branch-title">Women Techsters</h3>
//                 <p>Design Intern</p>
//                 <p>July 2020-March 2021</p>
//               </div>
//             </div>
//             {/* <div class="branch"></div>
//             <div class="branch"></div> */}
//           </div>
//         </section>

//         {/* {- 3 --} */}
//         <section class="tree-wrapper">
//           <h3 class="title">Top Skills</h3>
//           <div class="tree">
//             <div class="branch">
//             <div className="iconContainer">
//                 <SkillSet />
//               </div>
//               <div class="branch-body">
//                 <h3 class="branch-title">Javascript, Redux</h3>
//                 <p>React.js, Djongo, Vanilla CSS</p>
                
//               </div>
//             </div>
//             {/* <div class="branch"></div>
//             <div class="branch"></div> */}
//           </div>
//         </section>
//       </div>
//     </div>
//     );
// }

// export default FurtherDetails




const FurtherDetails = () => {
  // Sample data for sections and branches
  const data = [
    {
      title: 'Education',
      branches: [
        { institution: 'Micheal Okpara of Agric.,Umudike', degree: 'BSc. Biochemistry', duration: '2010-2014', icon: <School /> },
        { institution: 'University of Benin', degree: 'MSc. Biochemistry', duration: '2017-2020', icon: <School /> }
      ]
    },
    {
      title: 'Experience',
      branches: [
        { institution: 'GeorgeDev Enterprise', role: 'Junior Developer', duration: 'Jan. 2023- till date', icon: <WorkIcon /> },
        { institution: 'Women Techsters', role: 'Design Intern', duration: 'July 2020-March 2021', icon: <WorkIcon /> }
      ]
    },
    {
      title: 'Top Skills',
      branches: [
        { skillset: 'Javascript, Redux', tools: 'React.js, Djongo, Vanilla CSS', icon: <SkillSet /> }
      ]
    }
  ];

  return (
    <div className="flex-container" id="trees">
      <div className="trees">
        {data.map((section, index) => (
          <section key={index} className="tree-wrapper">
            <h3 className="title">{section.title}</h3>
            <div className="tree">
              {section.branches.map((branch, index) => (
                <div key={index} className="branch">
                  <div className="iconContainer">{branch.icon}</div>
                  <div className="branch-body">
                    {branch.institution && <h3 className="branch-title">{branch.institution}</h3>}
                    {branch.degree && <p>{branch.degree}</p>}
                    {branch.role && <p>{branch.role}</p>}
                    {branch.duration && <p>{branch.duration}</p>}
                    {branch.skillset && <h3 className="branch-title">{branch.skillset}</h3>}
                    {branch.tools && <p>{branch.tools}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FurtherDetails;