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
            <div className="card-wrapper">
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
      <div className="fst7">
        <h1>FST7</h1>
      <h1><a href="https://www.youtube.com/watch?v=pZZzyBKH-GY" target="_blank" rel="noreferrer" >Chest & biceps</a></h1>
      <h1><a href="https://www.youtube.com/watch?v=Pn-_zoLtjh4" target="_blank" rel="noreferrer" >Back & Abbs</a></h1>
      <h1><a href="https://www.youtube.com/watch?v=7ROLmk6WSVk" target="_blank" rel="noreferrer" >Shoulder & triceps</a></h1>
      <h1><a href="https://www.youtube.com/watch?v=e5_bSRD1L40&t=829s" target="_blank" rel="noreferrer" >legs</a></h1>
      </div>
     <div className="pull">
     <h1>Push Pull Legs</h1>
     <h1><a href="https://www.youtube.com/watch?v=HE45jVN7XKM" target="_blank" rel="noreferrer">Push</a></h1>
     <h1><a href="https://www.youtube.com/watch?v=IOl42YpK_Es" target="_blank" rel="noreferrer">Pull</a></h1>
     <h1><a href="https://www.youtube.com/watch?v=Nr0voKyfiiE" target="_blank" rel="noreferrer">Legs</a></h1>
     </div>
     </div>
      </div>
    )
}
export default WorkoutProgram