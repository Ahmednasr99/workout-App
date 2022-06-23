import React from "react";
import { Link } from "react-router-dom";


const PlansWorkout = ()=>{
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

        class ButtonBox extends React.Component {
          constructor(props) {
            super(props);
            console.log(props.likeIsClicked);
            this.state = {
              likeIsClicked: props.likeIsClicked
            };
          }
          
          toggle(index) {
            let state = {};
            state[index] = !this.state[index];
            this.setState(state);
          }
          
          render() {
            return (
              <div>

              </div>
            );
          }  
        }
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
                    <ButtonBox 
                    likeIsClicked={this.props.likeIsClicked}
                    likes={this.props.likes}/>
                </div>
              </div>
             
            );
          }
        };
        

        
    return(
        
        <div className='card-grid-view'>
        {posts.map(e => (
          <SocialCard 
            key={e.id}
            content={e.content}
            likes={e.likes}
            likeIsClicked={e.likeIsClicked}
            />
        ))}


        <div className="details">
            <ul>
            <li>chest and biceps</li>
            <li>abbs and back</li>
            <li>shoulder and triceps</li>
            <li>legs</li>
            </ul>
        </div>
      </div>
     

    )
}
export default PlansWorkout