import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
import TimeWeather from './TimeWeather'

function HomepageContent() {
/* eslint-disable no-unused-vars */
   var time = new Date().toLocaleTimeString();
  
   const [Ctime, setCtime] = useState(time);
   const updateTime =()=>{
      time= new Date().toLocaleTimeString();
      setCtime(time);
   }
   setInterval(updateTime,1000);
/* eslint-enable no-unused-vars */
   return (
      <>
        
      <div  className="contentOfHome">
         <div  className="main_section">
                        
            <div className="body_section">
               <div className="body_left">
                  <div className="clock_time">
                     <div id="local_time">
                        <span>Time</span>
                        <p>
                           {time}
                        </p>
                           {/* <Zehadkhan/> */}
                           {/* {} */}
                           <TimeWeather />
                     </div>
                     
                  </div>
                     <div className="intro">
                        <article>
                           <h2><span>Hi</span>, I'm Zehad,</h2>
                           <pre>Junior Developer & Programmer.</pre>

                           <p><small>Passionate Techy and Tech Author</small></p>
                        </article>
                     </div>
                     
                     <div className="contract_me">
                     <a href="zehadkhan.com"><button className="contact-me">Contact Me</button></a>
                     </div>
               </div> 
               {/* ==== */}
               {/* //Json side */}
             <div className="body_right">
               <div className="engine_use all_about_v">
                  <pre>
                     <pre> {"{"} </pre><em className="parent">"author"</em>:<em className="children">"Zehad Khan"</em>,<br /><em className="parent">"username"</em>:<em className="children">"zehadkhan"</em>,<br /><em className="parent">"description"</em>:<em className="children">"sub:CSE | Web Application Developer"</em>,<br /><em className="parent">"homepage"</em>:<em className="children">"zehadkhan.com"</em>,<br /><em className="parent">"repository"</em>:  {'{'} <br /><em className="parent-children">"type"</em>:<em className="children">"Open-source"</em><br /><em className="parent-children">"url"</em>:<em className="children">"github.com/zehadkhan"</em><br /><em className="closing-braces">  {'}'} </em>,<br /><em className="parent">"engines"</em>: [<br /><em className="children">"php"</em><br /><em className="children">"js"</em><br /><em className="children">"reactJs"</em><br /><em className="children">"html"</em><br /><em className="children">"css"</em><br /><em className="children">"meterial"</em><br /><em className="closing-braces">]</em>,<br /><em className="parent">"dependencies"</em>:  {'{'} <br /><em className="parent-children">"react"</em><em className="colon">:</em> <em className="children">^17.0.2"</em>,<br /><em className="parent-children">"webpack"</em>:<em className="children">"5.36.1"</em>,<br /><em className="parent-children">"express"</em>:<em className="children">^4.16.4</em>,<br /><em className="parent-children">"styled-components"</em><em className="colon">:</em> <em className="children">"^4.3.2"</em>
                     
                     {/*, <br /><em className="parent-children">"redux"</em> 
                     
                     <em className="colon">:</em> <em className="children">"^4.0.1"</em>,
                       <br /> */}
                       <br />
                     <em className="parent-children">"LESS"</em><em className="colon">:</em> <em className="children">"^1.0.0"</em>,<br /><em className="parent-children">"Flexbox"</em><em className="colon">:</em> <em className="children">"^1.0.0"</em>,<br /><em className="closing-braces"> {'}'} </em>,<br /><em className="parent">"devDependencies"</em>:  {'{'} <br /><em className="parent-children">"tea"</em>:<em className="children">"^1.0.0"</em>,<br /><em className="parent-children">"music"</em>:<em className="children">t-series :D</em>,<br /><em className="parent-children">"internet"</em>:<em className="children">"100mbps"</em>,<br /><em className="parent-children">"editor"</em>:<em className="children">"vscode"</em><br /><em className="closing-braces"> {'}'} ,</em><pre> {"}"} </pre>
                     </pre>
                   </div>
               </div>
                {/* ======= */}
            </div>
       </div>
    </div>

</>
     
      //Json side End


   )
}

export default HomepageContent
// export  {playClock}

