import React, {Component} from 'react';
import Image1 from '../../img/food-share.jpeg';
import Image2 from '../../img/food-share-2.jpeg';
import VideoPlayer from 'react-simple-video-player';


export class AboutUsPage extends Component{
    render(){
        return <div>
        <div id='AboutPage'>
              <div>
                  <img src={Image1} alt='Picture of food'/> 
              </div>
              <div id='AboutContent'>
                  <h1>About the Creators</h1>
                  <p>We're a rag-tag group of rookie programmers taking a bootcamp in order to better ourselves and the world. We have a passion for food and for our communities. We created this website to help others create connections with others in their community through food and to explore many interesting and unique recipes, because as the saying goes, the way to a person's heart, is through their stomach. Food is one of the many things we share between people, cultures, and countries. The Community Cookbook's goal is to bridge that distance and bring food to everyone, and create a safe space for people to share their favorite recipes!</p>
              </div>
              <div>
              <img src={Image2} alt='Picture of food'/> 
              </div>
        </div>
        <h1 id='CreatorRecipes-title' >Creator's Favorite Recipes!</h1>
        <div id="CreatorRecipes">
          <div className='Video'>
              <VideoPlayer
              url="https://www.youtube.com/watch?v=bFtDkG74l9w"
              poster="/myPoster.png"
              width={350}
              height={250}
              controls/>
          </div>
          <div className='Video'>
              <VideoPlayer
              url="https://www.youtube.com/watch?v=sv3TXMSv6Lw"
              poster="/myPoster.png"
              width={350}
              height={250}
              controls/>
          </div>
          <div className='Video'>
              <VideoPlayer
              url="https://www.youtube.com/watch?v=VvJm4pQZ04s"
              poster="/myPoster.png"
              width={350}
              height={250}
              controls/>
          </div>
          <div className='Video'>
              <VideoPlayer
              url="https://www.youtube.com/watch?v=QGAJokcwBXI"
              poster="/myPoster.png"
              width={350}
              height={250}
              controls/>
          </div>
          <div className='Video'>
              <VideoPlayer
              url="https://www.youtube.com/watch?v=WRYOVVexMhU"
              poster="/myPoster.png"
              width={350}
              height={250}
              controls/>
          </div>
                  <div className='Video'>
              <VideoPlayer
              url="https://www.youtube.com/watch?v=WRYOVVexMhU"
              poster="/myPoster.png"
              width={350}
              height={250}
              controls/>
          </div>
          
        </div>
    </div>;
    }
};

export default AboutUsPage;
