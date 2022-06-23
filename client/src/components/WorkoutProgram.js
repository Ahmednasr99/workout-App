import React from "react";
import { Link } from "react-router-dom";


const WorkoutProgram = ()=>{
    const posts = [
        { id: 0, 
          content: {
            title: 'FST7',
            image: 'https://sb.studylib.net/store/data/025760208_1-40d240b9ccbd11928ff09073c5336e74.png',
            content: 'Details',
          }},
          { id: 1,
          content : {
            title: 'Push Pull Legs',
            image: 'https://athleanx.com/wp-content/uploads/2022/04/the-ppl-split-8211-pros-and-cons-full-breakdown-lQOAidOej7E-1024x576.jpg',
            content: 'Details',
          },
          },
      ]   

        const UiCard = props => {
          let {image, title, content} = props.content;
          return (
            <div class="card-wrapper">
              <div className='card-img'>
                <img src={image} alt="" />
              </div>
              <div className='card-content'>
                <h1>{title}</h1>
                <Link>{content}</Link>
              </div>
              </div>
          );
        }
        
      class SocialCard extends React.Component {
          render() {
            return (
              <div className='card-body'>
                <UiCard content={this.props.content}/>
                <div className='line'></div>
                 <div style={{textAlign: 'right'}}>
                </div>
              </div>
             
            );
          }
        };
        

        
    return(
        <div>
        <div className='card-grid-view'>
        {posts.map(e => (
          <SocialCard 
            key={e.id}
            content={e.content}
            />
        ))}
      </div>
      <div className="details">
      <div>
      <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY">Chest & biceps</a></h1>
      <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY">Back & Abbs</a></h1>
      <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY">Shoulder & triceps</a></h1>
      <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY">legs</a></h1>
      </div>
     <div className="pull">
     <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY">Push</a></h1>
     <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY">Pull</a></h1>
     <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY">Legs</a></h1>
     </div>
     </div>
      </div>
    )
}
export default WorkoutProgram